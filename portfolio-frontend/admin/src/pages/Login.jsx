import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-background px-4'>
      <div className='w-full max-w-md bg-muted p-8 rounded-2xl shadow-xl'>
        <h2 className='text-3xl font-bold text-center text-foreground mb-6'>Admin Login</h2>
        <form className='space-y-6'>
          <div>
            <label htmlFor="email" className='block text-sm text-muted-foreground mb-1'>Email</label>
            <input type="email" name='email' id='email' autoComplete='username' required className='w-full px-4 py-2 rounded-lg bg-background text-foreground border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent' />
          </div>
          <div>
            <label htmlFor="password" className='block text-sm text-muted-foreground mb-1'>Password</label>
            <div className='relative'>
              <input type="password" name='password' id='password' autoComplete='current-password' required className='w-full px-4 py-2 rounded-lg bg-background text-foreground border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent'/>
              <button type='button' className='absolute right-3 top-1/2 -translate-y-1/2 text-sm text-accent hover:underline'>Show Password</button>
            </div>
          </div>
          <Link to={'/'}><button type='submit' className='w-full bg-accent hover:bg-cyan-400 text-background font-semibold py-2 rounded-lg transition duration-200 mt-3'>Login</button></Link>
        </form>
      </div>
    </div>
  )
}

export default Login
