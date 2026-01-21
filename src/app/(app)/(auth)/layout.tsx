import React from 'react'

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className="">{children}</main>
    </div>
  )
}

export default AuthLayout
