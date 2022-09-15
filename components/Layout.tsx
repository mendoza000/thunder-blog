import Head from 'next/head'
import React from 'react'
import Navbar from './home/Navbar'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className="">
      <Head>
        <title>Thunder blog! ⚡| Omar Mendoza</title>
        <link rel="shortcut icon" href="/thunder-logo.svg" />
      </Head>
      {/* <Navbar /> */}
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout