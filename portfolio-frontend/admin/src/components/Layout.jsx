
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
     <>
     <div className='flex bg-background min-h-screen text-foreground'>
      <Sidebar/>
       <div className='flex-1 p-6'>
        <Outlet/>
       </div>
     </div>
     </>
  )
}

export default Layout
