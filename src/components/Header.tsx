'use client'

import { useState } from 'react'
import Link from 'next/link'
import './Header.scss'

interface NestedDropdownItem {
  label: string
  href: string
}

interface DropdownItem {
  label: string
  href: string
  featured?: boolean
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
    dropdown: [
      { label: 'Certificates', href: '/products/certificates' },
      {
        label: 'Gallery',
        href: '/products/gallery',
        featured: true,
        submenu: [
          { label: 'Photo Gallery', href: '/products/gallery/photos' },
          { label: 'Video Gallery', href: '/products/gallery/videos' },
        ],
      },
    ],
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
  { label: 'BLOG', href: '/blog' },
]

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link href="/" className="logo">
          <div className="logo-text">HIVIK</div>
        </Link>

        {/* Navigation */}
        <nav className="nav">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="nav-item-wrapper"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => {
                setOpenDropdown(null)
                setOpenSubmenu(null)
              }}
            >
              <Link href={item.href} className="nav-item">
                {item.label}
              </Link>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div
                  className={`dropdown ${
                    openDropdown === item.label ? 'active' : ''
                  }`}
                >
                  {item.dropdown.map((dropdownItem) => (
                    <div
                      key={dropdownItem.label}
                      className="dropdown-item-wrapper"
                      onMouseEnter={() => setOpenSubmenu(dropdownItem.label)}
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      <Link
                        href={dropdownItem.href}
                        onClick={(e) => {
                          if (dropdownItem.href === '#') e.preventDefault()
                        }}
                        className={`dropdown-item ${
                          dropdownItem.featured ? 'featured' : ''
                        } ${dropdownItem.submenu ? 'has-submenu' : ''}`}
                      >
                        {dropdownItem.label}
                        {dropdownItem.submenu ? (
                          <span className="chevron">›</span>
                        ) : dropdownItem.featured ? (
                          <span className="arrow">›</span>
                        ) : null}
                      </Link>

                      {/* Nested Submenu */}
                      {dropdownItem.submenu && (
                        <div
                          className={`submenu ${
                            openSubmenu === dropdownItem.label ? 'active' : ''
                          }`}
                        >
                          {dropdownItem.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="submenu-item"
                            >
                              {subItem.label}
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

        {/* CTA Button */}
        <Link href="/contact" className="cta-button">
          CONTACT US
        </Link>
      </div>
    </header>
  )
}
