import React from 'react';
import {PlusCircle, Pencil, Trash, ExternalLink, Github} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import portfolioCoverImage from '../assets/images/glen-carrie-TfzeRFtlkFA-unsplash.jpg';

const ProjectManagement = () => {
  return (
    <div className='flex bg-background min-h-screen text-foreground'>
      <Sidebar/>
      <div className='flex-1 p-6'>
        <header className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl font-semibold'>Manage Projects</h2>
          <button className='flex items-center gap-2 text-primary font-medium hover:underline'><PlusCircle/>Add New Project</button>
        </header>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5'>
          <div className='bg-muted rounded-xl overflow-hidden shadow-md hover:shadow-lg transition'>
            <img src={portfolioCoverImage} alt="Personal Portfolio" className='w-full h-56 object-cover' />
            <div className='p-4 space-y-3'>
              <div className='flex items-start justify-between'>
                <div>
                  <h3 className='text-xl font-bold text-accent'>Personal Portfolio</h3>
                  <p className='text-muted-foreground text-sm mt-1'>A minimal, animated developer portfolio to showcase my skills</p>
                </div>
                <div className='flex gap-2'>
                  <button className='p-2 text-accent hover:bg-accent/10 rounded'><Pencil size={18}/></button>
                  <button className='p-2 text-red-400 hover:bg-red-500/10 rounded'><Trash size={18}/></button>
                </div>
              </div>
              <div className='flex flex-wrap gap-2 text-sm'>
                <span className='bg-background border border-muted-foreground/20 text-muted-foreground px-2 py-1 rounded'>React, Tailwind, Framer Motion</span>
              </div>
              <div className='flex gap-4 text-sm mt-2'>
                <a href="#" className='inline-flex items-center gap-1 text-blue-400 hover:underline'><ExternalLink size={14}/>Live</a>
                <a href="#" className='inline-flex items-center gap-1 text-muted-foreground hover:underline'><Github size={16}/>GitHub</a>
              </div>
            </div>
          </div>
      
          <div className='bg-muted rounded-xl overflow-hidden shadow-md hover:shadow-lg transition'>
            <img src={portfolioCoverImage} alt="Personal Portfolio" className='w-full h-56 object-cover' />
            <div className='p-4 space-y-3'>
              <div className='flex items-start justify-between'>
                <div>
                  <h3 className='text-xl font-bold text-accent'>Personal Portfolio</h3>
                  <p className='text-muted-foreground text-sm mt-1'>A minimal, animated developer portfolio to showcase my skills</p>
                </div>
                <div className='flex gap-2'>
                  <button className='p-2 text-accent hover:bg-accent/10 rounded'><Pencil size={18}/></button>
                  <button className='p-2 text-red-400 hover:bg-red-500/10 rounded'><Trash size={18}/></button>
                </div>
              </div>
              <div className='flex flex-wrap gap-2 text-sm'>
                <span className='bg-background border border-muted-foreground/20 text-muted-foreground px-2 py-1 rounded'>React, Tailwind, Framer Motion</span>
              </div>
              <div className='flex gap-4 text-sm mt-2'>
                <a href="#" className='inline-flex items-center gap-1 text-blue-400 hover:underline'><ExternalLink size={14}/>Live</a>
                <a href="#" className='inline-flex items-center gap-1 text-muted-foreground hover:underline'><Github size={16}/>GitHub</a>
              </div>
            </div>
          </div>

          <div className='bg-muted rounded-xl overflow-hidden shadow-md hover:shadow-lg transition'>
            <img src={portfolioCoverImage} alt="Personal Portfolio" className='w-full h-56 object-cover' />
            <div className='p-4 space-y-3'>
              <div className='flex items-start justify-between'>
                <div>
                  <h3 className='text-xl font-bold text-accent'>Personal Portfolio</h3>
                  <p className='text-muted-foreground text-sm mt-1'>A minimal, animated developer portfolio to showcase my skills</p>
                </div>
                <div className='flex gap-2'>
                  <button className='p-2 text-accent hover:bg-accent/10 rounded'><Pencil size={18}/></button>
                  <button className='p-2 text-red-400 hover:bg-red-500/10 rounded'><Trash size={18}/></button>
                </div>
              </div>
              <div className='flex flex-wrap gap-2 text-sm'>
                <span className='bg-background border border-muted-foreground/20 text-muted-foreground px-2 py-1 rounded'>React, Tailwind, Framer Motion</span>
              </div>
              <div className='flex gap-4 text-sm mt-2'>
                <a href="#" className='inline-flex items-center gap-1 text-blue-400 hover:underline'><ExternalLink size={14}/>Live</a>
                <a href="#" className='inline-flex items-center gap-1 text-muted-foreground hover:underline'><Github size={16}/>GitHub</a>
              </div>
            </div>
          </div>

          <div className='bg-muted rounded-xl overflow-hidden shadow-md hover:shadow-lg transition'>
            <img src={portfolioCoverImage} alt="Personal Portfolio" className='w-full h-56 object-cover' />
            <div className='p-4 space-y-3'>
              <div className='flex items-start justify-between'>
                <div>
                  <h3 className='text-xl font-bold text-accent'>Personal Portfolio</h3>
                  <p className='text-muted-foreground text-sm mt-1'>A minimal, animated developer portfolio to showcase my skills</p>
                </div>
                <div className='flex gap-2'>
                  <button className='p-2 text-accent hover:bg-accent/10 rounded'><Pencil size={18}/></button>
                  <button className='p-2 text-red-400 hover:bg-red-500/10 rounded'><Trash size={18}/></button>
                </div>
              </div>
              <div className='flex flex-wrap gap-2 text-sm'>
                <span className='bg-background border border-muted-foreground/20 text-muted-foreground px-2 py-1 rounded'>React, Tailwind, Framer Motion</span>
              </div>
              <div className='flex gap-4 text-sm mt-2'>
                <a href="#" className='inline-flex items-center gap-1 text-blue-400 hover:underline'><ExternalLink size={14}/>Live</a>
                <a href="#" className='inline-flex items-center gap-1 text-muted-foreground hover:underline'><Github size={16}/>GitHub</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectManagement
