import React from 'react';
import {HamburgerIcon} from 'lucide-react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className='flex h-screen bg-background text-foreground'>
      <Sidebar/>
      <main className='flex-1 p-6 overflow-y-auto'>
        <header className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-semibold'>Welcome back, Dev 👋</h2>
          <div>
            <button className='md:hidden'><HamburgerIcon/></button>
          </div>
        </header>
        <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
          <div className='p-6 bg-muted rounded-xl shadow'>
            <h3 className='text-lg font-medium mb-2'>Total Projects</h3>
            <p className='text-3xl font-bold text-accent'>12</p>
          </div>
          <div className='p-6 bg-muted rounded-xl shadow'>
            <h3 className='text-lg font-medium mb-2'>Pending Reviews</h3>
            <p className='text-3xl font-bold text-accent'>3</p>
          </div>
          <div className='p-6 bg-muted rounded-xl shadow'>
            <h3 className='text-lg font-medium mb-2'>Last Login</h3>
            <p className='text-base text-muted-foreground'>Aug 7, 2025 - 8:20 PM</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
