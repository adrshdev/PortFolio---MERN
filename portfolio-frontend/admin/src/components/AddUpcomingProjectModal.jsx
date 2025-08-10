import React, { useState } from 'react';
import {ChevronDown} from 'lucide-react';
import Api from '../Api';

const techOptions = [
  'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Firebase', 'TypeScript', 'JavaScript', 'HTML', 'CSS',
  'Socket.io', 'Realtime', 'MERN', 'EJS', 'OpenAI', 'career',
];

const AddUpcomingProjectModal = ({onProjectAdded}) => {

  const [form, setForm] = useState({
    title: '',
    description: '',
    technologies: [],
  });
  const [isOpen, setIsOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  };

  const handleTechChange = (e) => {
    const {value, checked} = e.target;
    setForm((prev) => {
      const updatedTech = checked ? [...prev.technologies, value] : prev.technologies.filter((tech) => tech!==value);
      return{
        ...prev,
        technologies: updatedTech,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await Api.post('/admin/addupcomingproject', {form});
      if(response.data?.success){
        setForm({
          title: '',
          description: '',
          technologies: [],
        });
        onProjectAdded();
        setSuccessMessage('Project Added');
      }
    }catch(error){
      console.error(error)
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
      {successMessage && (
        <p>{successMessage}</p>
      )}
      <button type='submit' className='w-full bg-primary text-background font-semibold py-2 rounded hover:bg-primary/90 transition'>Submit Project</button>
    </form>
    </div>
  )
}

export default AddUpcomingProjectModal
