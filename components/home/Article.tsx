import Image from 'next/image'
import React from 'react'
import {MdArticle} from 'react-icons/md'
import ArticleHome from '../../types'

const Article = (props: any) => {
  return (
    <>
      <div className='flex items-center gap-3 border-b-2 border-gray-700 py-2'>
        <Image 
          src={'/code.png'}
          width={70}
          height={70}
        />
        <div>
          <h4 className='text-white text-xl'>
            {props.title}
          </h4>
          <p className='text-white opacity-80'>
            {props.date}
          </p>
        </div>

      </div>
    </>
  )
}

export default Article