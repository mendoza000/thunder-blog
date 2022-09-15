import React from 'react'
import TopHeader from './TopHeader'

const Header = () => {
  return (
    <header className="flex flex-col box-border py-5 pb-7">
      <TopHeader />

      {/* <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl shadow-2xl h-40 w-72 flex justify-center items-center'>
        <h1 className="text-center text-5xl font-bold tracking-wider text-white">
          Thunder <br/> Blog!
        </h1>
      </div>
        <p className="text-center text-white opacity-80 my-6 text-xl flex items-center gap-2">
          <AiTwotoneThunderbolt />
          By: Omar Mendoza.
          <AiTwotoneThunderbolt />
        </p>
        <ContactsHeader /> */}
    </header>
  )
}

export default Header