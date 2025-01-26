import React from 'react'

const RootLayout = ({children}) => {
  return (
    <div>
      <nav>
        <li>Home</li>
        <li>About</li>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout
