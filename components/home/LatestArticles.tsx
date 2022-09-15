import React from 'react'
import {AiFillThunderbolt} from 'react-icons/ai'
import Article from './Article'

const LatestArticles = () => {
  return (
    <div className='flex flex-col lg:col-span-2'>
      <h2 className='text-white font-semibold text-lg flex items-center gap-1'>
        <AiFillThunderbolt />
        Ultimos articulos:
      </h2>

      <div className='flex flex-col gap-4'>
        <Article
          title={"¿Por que usar Tailwind CSS?"}
          date={"14 septiembre de 2022"}
        />
        <Article
          title={"¿Por que usar Tailwind CSS?"}
          date={"14 septiembre de 2022"}
        />
        <Article
          title={"¿Por que usar Tailwind CSS?"}
          date={"14 septiembre de 2022"}
        />
        <Article
          title={"¿Por que usar Tailwind CSS?"}
          date={"14 septiembre de 2022"}
        />
      </div>
    </div>
  )
}

export default LatestArticles