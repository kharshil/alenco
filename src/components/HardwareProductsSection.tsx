import './HardwareProductsSection.scss'

type ProductCard = {
  title: string
  imageSrc: string
}

const products: ProductCard[] = [
  {
    title: 'Aluminium Window & Door Hardware',
    imageSrc:
      'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1',
  },
  {
    title: 'Aluminium Sliding Folding System',
    imageSrc:
      'https://images.pexels.com/photos/271628/pexels-photo-271628.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1',
  },
  {
    title: 'uPVC Window and Door Hardware',
    imageSrc:
      'https://images.pexels.com/photos/5592263/pexels-photo-5592263.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1',
  },
  {
    title: 'Fabrication Machinery',
    imageSrc:
      'https://images.pexels.com/photos/259972/pexels-photo-259972.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1',
  },
  {
    title: 'Tool & Die Development',
    imageSrc:
      'https://images.pexels.com/photos/3856252/pexels-photo-3856252.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1',
  },
  {
    title: 'Customize Product Development',
    imageSrc:
      'https://images.pexels.com/photos/614103/pexels-photo-614103.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1',
  },
]

export default function HardwareProductsSection() {
  return (
    <section className="hardware-products" aria-label="Our Hardware Products">
      <div className="hardware-products__container">
        <h2 className="hardware-products__title">Our Hardware Products</h2>

        <div className="hardware-products__grid">
          {products.map((p) => (
            <article key={p.title} className="hardware-products__card">
              <div className="hardware-products__media">
                <img className="hardware-products__image" src={p.imageSrc} alt={p.title} />
                <div className="hardware-products__ribbon" aria-hidden="true">
                  <span className="hardware-products__ribbonText">{p.title}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

