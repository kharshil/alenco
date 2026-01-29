import Link from 'next/link'
import './Breadcrumb.scss'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <div className="breadcrumb__container">
        <ol className="breadcrumb__list">
          <li className="breadcrumb__item">
            <Link href="/" className="breadcrumb__link">Home</Link>
            {items.length > 0 && <span className="breadcrumb__separator">&gt;</span>}
          </li>
          {items.map((item, index) => (
            <li key={index} className="breadcrumb__item">
              {item.href ? (
                <>
                  <Link href={item.href} className="breadcrumb__link">{item.label}</Link>
                  {index < items.length - 1 && <span className="breadcrumb__separator">&gt;</span>}
                </>
              ) : (
                <span className="breadcrumb__current">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
