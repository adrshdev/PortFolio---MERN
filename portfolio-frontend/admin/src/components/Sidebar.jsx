import React, { memo, useRef, useState } from 'react';
import {Home, FolderKanban, LogOut, ChevronDown} from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = memo(() => {

  const [isOpen, setIsOpen] = useState(false);

  const completedProjectsLinkRef = useRef();
  const upcomingProjectsLinkRef = useRef();

  const handleSelect = (selectedRef) => {
    completedProjectsLinkRef.current.style.color = '';
    upcomingProjectsLinkRef.current.style.color = '';

    selectedRef.current.style.color = '#38bdf8';
  }

  return (
    <aside className='md:flex flex-col w-64 bg-muted p-6 space-y-6'>
      <h1 className='text-xl font-bold text-accent'>adrshDev</h1>
      <nav className='space-y-4'>
        <Link to={'/'} className='flex items-center gap-3 hover:text-accent'><Home size={18}/>Dashboard</Link>
        <div>
          <button onClick={() => setIsOpen(!isOpen)} className='flex items-center justify-between w-full hover:text-accent'>
            <span className='flex items-center gap-3'><FolderKanban size={18}/>Project Management</span>
            <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}/>
          </button>
          {isOpen && (
            <div className='ml-8 mt-2 space-y-2'>
              <button ref={completedProjectsLinkRef} id='completed' onClick={() => handleSelect(completedProjectsLinkRef)}><Link to='/completedprojects' className='block hover:text-accent'>Completed Projects</Link></button>
              <button ref={upcomingProjectsLinkRef} id='upcoming' onClick={() => handleSelect(upcomingProjectsLinkRef)}><Link to='/upcomingprojects' className='block hover:text-accent'>Upcoming Projects</Link></button>
            </div>
          )}
        </div>
      </nav>
      <div className='mt-auto pt-6 border-t border-white/10'>
        <Link to={'/auth'}><button className='flex items-center gap-3 text-red-400 hover:text-red-300'><LogOut size={18}/>Logout</button></Link>
      </div>
    </aside>
  );
});

export default Sidebar
