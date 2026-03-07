'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Category, Subcategory } from '@/payload-types'
import './Header.scss'
import logoSrc from '../images/logo.png'

interface NestedDropdownItem {
  label: string
  href: string
}

interface DropdownItem {
  label: string
  href: string
  submenu?: NestedDropdownItem[]
}

interface NavItem {
  label: string
  href: string
  dropdown?: DropdownItem[]
}

interface CategoryWithSubs extends Category {
  subcategories?: Subcategory[]
}

interface HeaderProps {
  categories?: CategoryWithSubs[]
}

export default function Header({ categories = [] }: HeaderProps) {
  // Build navigation items dynamically
  const navItems: NavItem[] = useMemo(() => {
    const staticItems: NavItem[] = [
      { label: 'HOME', href: '/' },
      {
        label: 'ABOUT US',
        href: '/about',
        dropdown: [{ label: 'Certificates', href: '/certificates' }],
      },
    ]

    // Build Products dropdown from categories
    const productsDropdown: DropdownItem[] = categories.map((category) => {
      const categoryItem: DropdownItem = {
        label: category.name,
        href: `/products/${category.slug}`,
      }

      // If category has subcategories, add them as submenu
      if (category.subcategories && category.subcategories.length > 0) {
        categoryItem.submenu = category.subcategories.map((sub) => ({
          label: sub.name,
          href: `/products/${category.slug}/${sub.slug}`,
        }))
      }

      return categoryItem
    })

    const productsItem: NavItem = {
      label: 'PRODUCTS',
      href: '/products',
      dropdown: productsDropdown.length > 0 ? productsDropdown : undefined,
    }

    return [
      ...staticItems,
      productsItem,
      { label: 'SERVICES', href: '/services' },
      { label: 'PROJECTS', href: '/projects' },
      { label: 'BECOME A DISTRIBUTOR', href: '/distributor' },
    ]
  }, [categories])
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <Link href="/" className="logo">
            <Image src={logoSrc} alt="Company Logo" priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="nav-item-wrapper"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link href={item.href} className="nav-item">
                  {item.label}
                </Link>

                {item.dropdown && (
                  <div
                    className={`dropdown ${
                      openDropdown === item.label ? 'active' : ''
                    }`}
                  >
                    {item.dropdown.map((d) => (
                      <div key={d.label} className="dropdown-item-wrapper">
                        <Link
                          href={d.href}
                          className="dropdown-item"
                        >
                          {d.label}
                          {d.submenu && d.submenu.length > 0 && (
                            <span className="dropdown-arrow">›</span>
                          )}
                        </Link>
                        {d.submenu && d.submenu.length > 0 && (
                          <div className="dropdown-submenu">
                            {d.submenu.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="dropdown-subitem"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="menu-toggle"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>

          {/* CTA */}
          <Link href="/contact" className="contact-button">
            CONTACT US
          </Link>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <span>Menu</span>
          <button onClick={() => setMobileOpen(false)}>✕</button>
        </div>

        <div className="drawer-nav">
          {navItems.map((item) => (
            <div key={item.label} className="drawer-item">
              {item.dropdown ? (
                <>
                  <button
                    className="drawer-link"
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <span>›</span>
                  </button>

                  {mobileDropdown === item.label && (
                    <div className="drawer-submenu">
                      {item.dropdown.map((sub) => (
                        <div key={sub.label} className="drawer-subitem-wrapper">
                          {sub.submenu && sub.submenu.length > 0 ? (
                            <>
                              <button
                                className="drawer-sublink"
                                onClick={() =>
                                  setMobileDropdown(
                                    mobileDropdown === sub.label ? item.label : sub.label
                                  )
                                }
                              >
                                {sub.label}
                                <span>›</span>
                              </button>
                              {mobileDropdown === sub.label && (
                                <div className="drawer-nested-submenu">
                                  {sub.submenu.map((nested) => (
                                    <Link
                                      key={nested.label}
                                      href={nested.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="drawer-nested-link"
                                    >
                                      {nested.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="drawer-sublink"
                            >
                              {sub.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="drawer-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="drawer-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  )
}
