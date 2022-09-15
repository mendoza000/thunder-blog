import Image from 'next/image'
import React from 'react'

const TopHeader = () => {
  return (
    <div className='flex gap-3 items-center'>
      <div className='flex gap-3 items-center hover:scale-110 duration-300'>
        <Image
          src={'/thunder-logo.svg'}
          width={40}
          height={40}
        />
        <p className='text-white font-bold text-xl'>
          Thunder Blog!
        </p>
      </div>
    </div>
  )
}

export default TopHeader