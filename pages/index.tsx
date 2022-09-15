import LatestArticles from '@components/home/LatestArticles'
import Sidebar from '@components/home/Sidebar'
import type { NextPage } from 'next'
import Header from '../components/home/Header'

const Home: NextPage = () => {
  return (
    <div className='container bg-gradient-to-t from-gray-900 to-gray-800 min-h-screen px-5'>
      <Header />
      <div className='grid lg:grid-cols-3 gap-10 pb-10'>
        <LatestArticles />
        <Sidebar />
      </div>
    </div>
  )
}

export default Home
