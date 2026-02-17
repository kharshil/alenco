import React from 'react'
import HeaderWrapper from '@/components/HeaderWrapper'
import PageLoader from '@/components/PageLoader/PageLoader'
import './styles.css'
import Footer from '@/components/Footer'

export const metadata = {
  description: 'Premium hardware solutions for windows and doors.',
  title: 'Alenco | Hardware Products',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <PageLoader />
        <HeaderWrapper />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
