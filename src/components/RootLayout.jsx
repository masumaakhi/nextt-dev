import React from 'react'
import Link from 'next/link'

const RootLayout = ({children}) => {
  return (
    <div>
      <nav>
        <Link href={"/"}><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/posts"><li>Posts</li></Link>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout
