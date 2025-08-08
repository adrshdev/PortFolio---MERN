import React, { useState } from 'react';
import {ChevronDown} from 'lucide-react';

const techOptions = [
  'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Firebase', 'TypeScript', 'JavaScript', 'HTML', 'CSS'
];

const AddProjectModal = () => {

  const [previeImage, setPreviewImage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
 

  const handleImageChange = () => {
    setPreviewImage((prev) => !prev);
  }

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <form className='space-y-5 text-sm text-white'>
      <h2 className='text-2xl font-semibold mb-2 text-white'>Add New Project</h2>
      <div className='space-y-1'>
        <label className='block font-medium text-white'>Project Title *</label>
        <input type="text" name='title' className='w-full bg-background border border-muted-foreground/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent' required />
      </div>
      <div className='space-y-1'>
        <label className='block font-medium text-white'>Description</label>
        <textarea name="description" rows={4} className='w-full bg-background border border-muted-foreground/30 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-accent' required ></textarea>
      </div>
      <div className='space-y-1 relative'>
        <label className='block font-medium text-white'>Technologies used</label>
        <button onClick={toggleDropdown} className='w-full flex justify-between items-center border border-muted-foreground/30 rounded px-3 py-2 focus:outline-none'><span className='text-muted-foreground'></span><ChevronDown size={16} className='text-white'/></button>
        {isOpen && (
          <div className='absolute z-10 mt-1 w-full bg-muted border border-muted-foreground/20 rounded shadow-lg max-h-52 overflow-y-auto'>
            {techOptions.map((tech) => (
              <label key={tech} className='flex items-center px-4 py-2 hover:bg-background cursor-pointer text-white'>
                <input type="checkbox" className='mr-2 accent-accent' />
                {tech}
              </label>
            ))}
          </div>
        )}
      </div>
      <div className='space-y-1'>
        <label className='block font-medium text-white'>Live URL</label>
        <input type="url" name='liveUrl' className='w-full bg-background p-2 rounded border border-muted-foreground/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent' />
      </div>
      <div className='space-y-1'>
        <label className='block font-medium text-white'>GitHub Repo URL</label>
        <input type="url" name='repoUrl' className='w-full bg-background rounded border border-muted-foreground/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent' />
      </div>
      <div className='space-y-1'>
        <label className='block font-medium text-white'>Cover Image *</label>
        <input type="file" accept='image/*' onChange={handleImageChange} className='text-muted-foreground file:bg-accent file:border-none file:rounded file:px-3 file:py-1 file:text-white file:cursor-pointer' required />
        {previeImage && (
          <img src={previeImage} alt="Preview" className='mt-2 h-32 w-full object-cover rounded' />
        )}
      </div>
      <button type='submit' className='w-full bg-primary text-background font-semibold py-2 rounded hover:bg-primary/90 transition'>Submit Project</button>
    </form>
  )
}

export default AddProjectModal
