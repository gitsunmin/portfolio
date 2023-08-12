import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gitsunmin Blog',
  description: 'Gitsunmin의 블로그입니다.'
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang='en'>
        <body>{children}</body>
      </html>
    </>
  )
}
