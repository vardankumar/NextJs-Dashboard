import Image from 'next/image'
import Header from './Components/Header'

import { Inter } from 'next/font/google'
import TopCards from './Components/TopCards'
import BarChart from './Components/BarChart'
import RecentOrders from './Components/RecentOrders'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <main className='bg-gray-100 min-h-screen'>
          <Header/>
          <TopCards/>
          <div className='p-4 grid md:grid-cols-3 grid-col-1 gap-4'>
            <BarChart/>
            <RecentOrders/>
          </div>
        </main>
    </>
  )
}
