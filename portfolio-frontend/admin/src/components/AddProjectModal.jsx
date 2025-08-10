import React, { useState } from 'react';
import {ChevronDown} from 'lucide-react';
import Api from '../Api';

const techOptions = [
  'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Firebase', 'TypeScript', 'JavaScript', 'HTML', 'CSS',
  'Socket.io', 'Realtime', 'MERN', 'EJS'
];

const AddProjectModal = ({onProjectAdded}) => {

  const [previewImage, setPreviewImage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    title: '',
    description: '',
    technologies: [],
    liveUrl: '',
    repoUrl: '',
    coverImage: '',
  });
  const [successMessage, setSuccessMessage] = useState('')
 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(file) {
      setForm((prev) => ({
        ...prev,
        coverImage: file
      }));
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl);
    }
  }

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  }

  const handleTechChange = (e) => {
    const {value, checked} = e.target;
    setForm((prev) => {
      const updatedTechs = checked ? [...prev.technologies, value] : prev.technologies.filter((tech) => tech !== value);
      return{
        ...prev,
        technologies: updatedTechs,
      }
    })
  };

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('description', form.description);
      formData.append('liveUrl', form.liveUrl);
      formData.append('repoUrl', form.repoUrl);
      form.technologies.forEach((tech) => {
        formData.append("technologies[]", tech);
      });
      if(form.coverImage){
        formData.append('coverImage', form.coverImage);
      };
      const response = await Api.post('/admin/createproject', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      if(response.data?.success) {
        setForm({
          title: '',
          description: '',
          technologies: [],
          liveUrl: '',
          repoUrl: '',
          coverImage: ''
        });
        setPreviewImage('');
        setSuccessMessage('Project added successfully.');
        if(onProjectAdded){
          onProjectAdded();
        }
      }
    }catch(error){
      console.error(error);
    }
  }

  return (
    <div className='max-h-[80vh] overflow-y-auto p-4 bg-background rounded-lg'>
      <form className='space-y-5 text-sm text-white' onSubmit={handleSubmit}>
      <h2 className='text-2xl font-semibold mb-2 text-white'>Add New Project</h2>
      <div className='space-y-1'>
        <label className='block font-medium text-white'>Project Title *</label>
        <input type="text" name='title' value={form.title} onChange={handleChange} className='w-full bg-background border border-muted-foreground/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent' required />
      </div>
      <div className='space-y-1'>
        <label className='block font-medium text-white'>Description</label>
        <textarea name="description" rows={4} value={form.description} onChange={handleChange} className='w-full bg-background border border-muted-foreground/30 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-accent' required ></textarea>
      </div>
      <div className='space-y-1 relative'>
        <label className='block font-medium text-white'>Technologies used</label>
        <button type='button' onClick={toggleDropdown} className='w-full flex justify-between items-center border border-muted-foreground/30 rounded px-3 py-2 focus:outline-none'>
          <span className='text-muted-foreground'>Select Technologies</span>
          <ChevronDown size={16} className='text-white'/>
        </button>
        {isOpen && (
          <div className='absolute z-10 mt-1 w-full bg-muted border border-muted-foreground/20 rounded shadow-lg max-h-52 overflow-y-auto'>
            {techOptions.map((tech) => (
              <label key={tech} className='flex items-center px-4 py-2 hover:bg-background cursor-pointer text-white'>
                <input type="checkbox" checked={form.technologies.includes(tech)} value={tech} onChange={handleTechChange} className='mr-2 accent-accent' />
                {tech}
              </label>
            ))}
          </div>
        )}
        {form.technologies.length > 0 && (
          <div className='flex flex-wrap gap-2 mt-2'>
            {form.technologies.map((tech) => (
              <span key={tech} className='bg-accent text-black text-sm px-3 py-1 rounded-full flex items-center gap-1'>
                {tech}
                <button type='button' onClick={() => setForm((prev) => ({
                  ...prev,
                  technologies: prev.technologies.filter((t) => t!==tech)
                }))} className='text-black hover:text-red-500'>X</button>
              </span>
            ))}
          </div>
        )}
      </div>
      <div className='space-y-1'>
        <label className='block font-medium text-white'>Live URL</label>
        <input type="url" name='liveUrl' value={form.liveUrl} onChange={handleChange} className='w-full bg-background p-2 rounded border border-muted-foreground/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent' />
      </div>
      <div className='space-y-1'>
        <label className='block font-medium text-white'>GitHub Repo URL</label>
        <input type="url" name='repoUrl' value={form.repoUrl} onChange={handleChange} className='w-full bg-background rounded border border-muted-foreground/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent' />
      </div>
      <div className='space-y-1'>
        <label className='block font-medium text-white'>Cover Image *</label>
        <input type="file" accept='image/*' name='coverImage' onChange={handleImageChange} className='text-muted-foreground file:bg-accent file:border-none file:rounded file:px-3 file:py-1 file:text-white file:cursor-pointer' required />
        {previewImage && (
          <img src={previewImage} alt="Preview" className='mt-2 h-32 w-full object-cover rounded' />
        )}
      </div>
      {successMessage && (
        <p>{successMessage}</p>
      )}
      <button type='submit' className='w-full bg-primary text-background font-semibold py-2 rounded hover:bg-primary/90 transition'>Submit Project</button>
    </form>
    </div>
  )
}

export default AddProjectModal
