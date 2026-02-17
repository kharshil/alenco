'use client'

import { useState, useEffect } from 'react'
import './PageLoader.scss'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Hide after page hydrates + small delay for smooth UX
    const timer = setTimeout(() => setVisible(false), 700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`page-loader ${!visible ? 'page-loader--done' : ''}`} aria-hidden="true">
      <div className="page-loader__inner">
        {/* Spinning ring */}
        <div className="page-loader__ring">
          <div />
          <div />
          <div />
          <div />
        </div>
        {/* Brand name below spinner */}
        <p className="page-loader__brand">ALENCO</p>
      </div>
    </div>
  )
}
