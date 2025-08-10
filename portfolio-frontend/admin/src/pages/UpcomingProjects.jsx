import React, { useState } from 'react'
import {PlusCircle, Pencil, Trash} from 'lucide-react';
import AddUpcomingProjectModal from '../components/AddUpcomingProjectModal';
import Api from '../Api';
import { useEffect } from 'react';

const UpcomingProjects = () => {

  const [clickAddProject, setClickAddProject] = useState(false);
  const [allUpcomingProjects, setAllUpcomingProjects] = useState([]);

  const fetchAllUpcomingProjects = async() => {
    try{
      const response = await Api.get('/admin/fetchallupcomingprojects');
      if(response.data?.success){
        setAllUpcomingProjects(response.data.allUpcomingProjects);
      }
    }catch(error){
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllUpcomingProjects();
  }, [])

  return (
    <div className='relative'>
        <header className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl font-semibold'>Manage Upcoming Projects</h2>
          <button className='flex items-center gap-2 text-primary font-medium hover:underline' onClick={() => setClickAddProject(prev => !prev)}><PlusCircle/>Add New Upcoming Project</button>
        </header>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5'>
          {allUpcomingProjects?.length > 0 ? (
            allUpcomingProjects.map((project, index) => (
              <div key={index} className='bg-muted rounded-xl overflow-hidden shadow-md hover:shadow-lg transition'>
                <div className='p-4 space-y-3'>
                  <div className='flex items-start justify-between'>
                    <div>
                      <h3 className='text-xl font-bold text-accent'>{project.title}</h3>
                      <p className='text-muted-foreground text-sm mt-1'>{project.description}</p>
                    </div>
                    <div className='flex gap-2'>
                      <button className='p-2 text-accent hover:bg-accent/10 rounded'><Pencil size={18}/></button>
                      <button className='p-2 text-red-400 hover:bg-red-500/10 rounded'><Trash size={18}/></button>
                    </div>
                  </div>
                  <div className='flex flex-wrap gap-2 text-sm'>
                  {project.technologies?.length > 0 && (
                    project.technologies.map((tech, index) => (
                      <span key={index} className='bg-background border border-muted-foreground/20 text-muted-foreground px-2 py-1 rounded'>{tech}</span>
                    ))
                  )}
              </div>
                </div>
              </div>
            ))
          ) : (
            <p>No Upcoming Projects..</p>
          )}
        </div>
    
      {clickAddProject && (
        <div className='fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4'>
          <div className='relative bg-muted rounded-xl max-w-2xl w-full p-6 shadow-lg'>
            <button onClick={() => setClickAddProject(false)} className='absolute top-4 right-4 text-muted-foreground hover:text-white'>X</button>
            <AddUpcomingProjectModal onProjectAdded={fetchAllUpcomingProjects}/>
          </div>
        </div>
      )}
    </div>
  )
}

export default UpcomingProjects
