import React from 'react';
import {Home, FolderKanban, LogOut} from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className='md:flex flex-col w-64 bg-muted p-6 space-y-6'>
      <h1 className='text-xl font-bold text-accent'>adrshDev</h1>
      <nav className='space-y-4'>
        <Link to={'/'} className='flex items-center gap-3 hover:text-accent'><Home size={18}/>Dashboard</Link>
        <Link to={'/projectmanagement'} className='flex items-center gap-3 hover:text-accent'><FolderKanban size={18}/>Project Management</Link>
      </nav>
      <div className='mt-auto pt-6 border-t border-white/10'>
        <button className='flex items-center gap-3 text-red-400 hover:text-red-300'><LogOut size={18}/>Logout</button>
      </div>
    </aside>
  )
}

export default Sidebar
