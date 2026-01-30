'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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

const navItems: NavItem[] = [
  { label: 'HOME', href: '/' },
  {
    label: 'ABOUT US',
    href: '/about',
    dropdown: [{ label: 'Certificates', href: '/certificates' }],
  },
  {
    label: 'PRODUCTS',
    href: '/products',
    dropdown: [
      { label: 'Aluminium Window & Door Hardware', href: '#' },
      { label: 'Aluminium Sliding Folding System', href: '#' },
      { label: 'uPVC Window and Door Hardware', href: '#' },
      { label: 'Fabrication Machinery', href: '#' },
      { label: 'Tool & Die Development', href: '#' },
      { label: 'Customize Product Development', href: '#' },
      { label: 'Aluminum Window Roller', href: '#' },
      { label: 'Aluminum Window Lock', href: '#' },
      { label: 'Metro Handle Supplier', href: '#' },
    ],
  },
  { label: 'SERVICES', href: '/services' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'BECOME A DISTRIBUTOR', href: '/distributor' },
]

export default function Header() {
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
                      <Link
                        key={d.label}
                        href={d.href}
                        className="dropdown-item"
                      >
                        {d.label}
                      </Link>
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
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
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
