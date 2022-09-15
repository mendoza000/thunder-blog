import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import {FaReact, FaTelegramPlane, FaTwitter} from 'react-icons/fa'

const ContactSidebar = () => {
  return (
    <div className='flex gap-3 items-center justify-around min-w-full border-gray-600 border-2 rounded-md py-2 shadow-slate-900 shadow-xl'>
        <a href="https://github.com/mendoza000" target={"_blank"}>
          <AiFillGithub
            className='fill-white hover:fill-violet-400 duration-300 p-2 h-10 w-10'
          />
        </a>
        <a href="https://te.me/mendoza000" target={"_blank"}>
          <FaTelegramPlane
            className='fill-white hover:fill-violet-400 duration-300 p-2 h-10 w-10'
          />
        </a>
        <a href="https://twitter.com/mendoza000x" target={"_blank"}>
          <FaTwitter
            className='fill-white hover:fill-violet-400 duration-300 p-2 h-10 w-10'
          />
        </a>
        <a href="https://mendoza000.vercel.app" target={"_blank"}>
          <FaReact
            className='fill-white hover:fill-violet-400 duration-300 p-2 h-10 w-10'
          />
        </a>
      </div>
  )
}

export default ContactSidebar