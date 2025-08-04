import { useState, useEffect } from 'react'
import './App.css'
import { FormInputs } from './components/form'


function App() {
  const [theme, setTheme] = useState(()=> {
     return localStorage.getItem('theme') || 'light';
  });
  

  useEffect(()=> {
    const saved = localStorage.getItem('theme');
    setTheme(saved)
  },[])

  useEffect(()=> {
      const html = document.documentElement;
      html.classList.remove('light', 'dark');
      html.classList.add(theme)
      localStorage.setItem('theme', theme)
  },[theme])

  function handleTheme() {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }
 
  
  return (
    <div className="p-4 dark:bg-black bg-white">
      <div className="grid grid-cols-[100px_1fr] mt-4 p-5"> 
        <button className="btn flex w-fit h-fit place-self-start" onClick={handleTheme}>{theme === 'dark' ? 'light' : 'dark'}</button>
        <h1 className=" mb-16 text-center justify-center dark:text-white font-extrabold text-4xl">Resume <span className='dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r  dark:from-amber-500 dark:bg:to-amber-300 dark:backdrop-blur-2xl'>Builder</span></h1>
      </div>
     <FormInputs />
    </div>
  )
}

export default App
