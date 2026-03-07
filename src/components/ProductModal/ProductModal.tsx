'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import type { Product, Media } from '@/payload-types'
import './ProductModal.scss'

interface ProductModalProps {
  product: Product | null
  products: Product[]
  isOpen: boolean
  onClose: () => void
  onNavigate: (product: Product) => void
}

function getImageUrl(media: Media | string | null | undefined): string {
  if (!media) return ''
  if (typeof media === 'string') return media
  return media.url || ''
}

function getFirstProductImage(product: Product): string {
  if (product.images && product.images.length > 0) {
    const firstImage = product.images[0]
    if (firstImage.image) {
      return getImageUrl(firstImage.image as Media)
    }
  }
  return ''
}

export default function ProductModal({
  product,
  products,
  isOpen,
  onClose,
  onNavigate,
}: ProductModalProps) {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const currentIndex = products.findIndex((p) => p.id === product?.id)
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null
  const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : null

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && prevProduct) onNavigate(prevProduct)
      if (e.key === 'ArrowRight' && nextProduct) onNavigate(nextProduct)
    },
    [isOpen, onClose, onNavigate, prevProduct, nextProduct]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown, isOpen])

  useEffect(() => {
    if (product) {
      setShowEnquiryForm(false)
      setSubmitStatus('idle')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        quantity: '',
        message: '',
      })
    }
  }, [product])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!product) return

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/product-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          productName: product.name,
          productCode: product.productCode,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          quantity: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Something went wrong')
      }
    } catch {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen || !product) return null

  const imageUrl = getFirstProductImage(product)

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="product-modal__close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Navigation Arrows */}
        {prevProduct && (
          <button
            className="product-modal__nav product-modal__nav--prev"
            onClick={() => onNavigate(prevProduct)}
            aria-label="Previous product"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
        {nextProduct && (
          <button
            className="product-modal__nav product-modal__nav--next"
            onClick={() => onNavigate(nextProduct)}
            aria-label="Next product"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        <div className="product-modal__content">
          {!showEnquiryForm ? (
            <>
              {/* Product View */}
              <div className="product-modal__image-section">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="product-modal__no-image">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                      <path
                        d="M21 15L16 10L5 21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>No Image</span>
                  </div>
                )}
              </div>

              <div className="product-modal__details">
                <span className="product-modal__code">{product.productCode}</span>
                <h2 className="product-modal__name">{product.name}</h2>

                {product.shortDescription && (
                  <p className="product-modal__description">{product.shortDescription}</p>
                )}

                {/* Technical Specifications */}
                {product.technicalSpecifications && product.technicalSpecifications.length > 0 && (
                  <div className="product-modal__specs">
                    <h3 className="product-modal__specs-title">Technical Specifications</h3>
                    <ul className="product-modal__specs-list">
                      {product.technicalSpecifications.map((spec, index) => (
                        <li key={spec.id || index}>{spec.specification}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Detailed Specifications */}
                {product.detailedSpecifications && product.detailedSpecifications.length > 0 && (
                  <div className="product-modal__detailed-specs">
                    <h3 className="product-modal__specs-title">Specifications</h3>
                    <table className="product-modal__specs-table">
                      <tbody>
                        {product.detailedSpecifications.map((spec, index) => (
                          <tr key={spec.id || index}>
                            <td className="product-modal__spec-key">{spec.key}</td>
                            <td className="product-modal__spec-value">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <button
                  className="product-modal__enquiry-btn"
                  onClick={() => setShowEnquiryForm(true)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Send Enquiry
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Enquiry Form */}
              <div className="product-modal__form-section">
                <button
                  className="product-modal__back-btn"
                  onClick={() => setShowEnquiryForm(false)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M19 12H5M5 12L12 19M5 12L12 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Back to Product
                </button>

                <div className="product-modal__form-header">
                  <h2 className="product-modal__form-title">Send Enquiry</h2>
                  <div className="product-modal__form-product">
                    <span className="product-modal__form-product-code">{product.productCode}</span>
                    <span className="product-modal__form-product-name">{product.name}</span>
                  </div>
                </div>

                {submitStatus === 'success' ? (
                  <div className="product-modal__success">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h3>Enquiry Submitted!</h3>
                    <p>Thank you for your interest. We will get back to you soon.</p>
                    <button
                      className="product-modal__success-btn"
                      onClick={() => setShowEnquiryForm(false)}
                    >
                      View Product
                    </button>
                  </div>
                ) : (
                  <form className="product-modal__form" onSubmit={handleSubmit}>
                    <div className="product-modal__form-row">
                      <div className="product-modal__form-group">
                        <label htmlFor="name">Name *</label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="product-modal__form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="product-modal__form-row">
                      <div className="product-modal__form-group">
                        <label htmlFor="phone">Phone *</label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div className="product-modal__form-group">
                        <label htmlFor="company">Company</label>
                        <input
                          type="text"
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company name (optional)"
                        />
                      </div>
                    </div>

                    <div className="product-modal__form-group">
                      <label htmlFor="quantity">Quantity Required</label>
                      <input
                        type="text"
                        id="quantity"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        placeholder="e.g., 100 pieces"
                      />
                    </div>

                    <div className="product-modal__form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    {submitStatus === 'error' && (
                      <div className="product-modal__error">{errorMessage}</div>
                    )}

                    <button
                      type="submit"
                      className="product-modal__submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="product-modal__spinner"></span>
                          Sending...
                        </>
                      ) : (
                        'Submit Enquiry'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </>
          )}
        </div>

        {/* Product Navigation Dots */}
        <div className="product-modal__dots">
          {products.map((p, index) => (
            <button
              key={p.id}
              className={`product-modal__dot ${p.id === product.id ? 'active' : ''}`}
              onClick={() => onNavigate(p)}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
