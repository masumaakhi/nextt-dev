import React from 'react'
import Link from 'next/link'

const RootLayout = ({children}) => {
  return (
    <div>
      <nav>
        <li>Home</li>
        <li>About</li>
        <Link href="/posts"><li>Posts</li></Link>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout
