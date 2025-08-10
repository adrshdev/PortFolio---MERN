import React, { useEffect, useState } from 'react';
import {PlusCircle, Pencil, Trash, ExternalLink, Github} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import AddProjectModal from '../components/AddProjectModal';
import Api from '../Api';

const CompletedProjects = () => {

  const [clickAddProject, setClickAddProject] = useState(false);
  const [projects, setProjects] = useState([]);


  const fetchAllProjects = async() => {
      try {
        const response = await Api.get('/admin/fetchallprojects');
        if(response.data?.success){
          setProjects(response.data?.allProjects);
        }
      }catch(error){
       console.error(error);
      }
    }


  useEffect(() => {
    fetchAllProjects();
  }, []);
  

  return (
    <div className='relative'>
        <header className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl font-semibold'>Manage Projects</h2>
          <button className='flex items-center gap-2 text-primary font-medium hover:underline' onClick={() => setClickAddProject(prev => !prev)}><PlusCircle/>Add New Project</button>
        </header>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5'>
          {projects.map((project, index) => (
            <div key={index} className='bg-muted rounded-xl overflow-hidden shadow-md hover:shadow-lg transition'>
            <img src={`http://localhost:5000${project.coverImage}`} alt="Personal Portfolio" className='w-full h-56 object-cover' />
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
              <div className='flex gap-4 text-sm mt-2'>
                {project.liveUrl ? <a href={project.liveUrl} className='inline-flex items-center gap-1 text-blue-400 hover:underline'><ExternalLink size={14}/>Live</a> : 'Live Coming Soon'}
                <a href={project.repoUrl} className='inline-flex items-center gap-1 text-muted-foreground hover:underline'><Github size={16}/>GitHub</a>
              </div>
            </div>
          </div>
          ))}
        </div>
    
      {clickAddProject && (
        <div className='fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4'>
          <div className='relative bg-muted rounded-xl max-w-2xl w-full p-6 shadow-lg'>
            <button onClick={() => setClickAddProject(false)} className='absolute top-4 right-4 text-muted-foreground hover:text-white'>X</button>
            <AddProjectModal onProjectAdded = {fetchAllProjects}/>
          </div>
        </div>
      )}
    </div>
  )
}

export default CompletedProjects
