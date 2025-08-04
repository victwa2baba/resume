import { useState, useEffect } from 'react'

export function FormInputs() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    about: '',
    school: '',
    title: '',
    entryDate: '',
    gradDate: '',
    honours: '',
    companyName: '',
    position: '',
    location: '',
    duties: '',
    startDate: '',
    endDate: '',
  })

  const [isChecked, setChecked] = useState(false); 
  const [isShowGen, setIsShowGen] = useState(false);
  const [isPractical, setIsPractical] = useState(false);
  const [isEducational, setIsEducational] = useState(false);
  const LOCAL_STORAGE_KEY = 'formData';

  function handleChange(e) {
    const { name, value} = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleCheck(e) {
    setChecked(e.target.checked)
  }

   // Load from storage
  useEffect(()=> {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      setForm(JSON.parse(savedData))
    }
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(form));
  }



  function CvDisplay() {
    return (
      <div className="px-4 relative">
        <div className='before:bg-amber-500 before:p-15 before:rounded-full before:absolute z-0 before:top-[-20px]'>
           <h2 className='dark:text-white font-bold text-5xl relative ms-5 z-10'>
            {form.fullName ? form.fullName: "Victor Tounaregha"}
          </h2>
          <h4 className="dark:text-white py-3 ms-5 relative z-10 after:p-[0.2px] after:absolute after:left-35 after:right-20 after:bottom-5 dark:after:bg-white">
            {form.position ? form.position : "Software Enginer"}
          </h4>
          <div className="grid lg:grid-cols-2 p-5">
            <div className="mt-5 dark:text-white relative">
            <p className="flex dark:fill-white gap-1 justify-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"/></svg>
              Phone
            </p>
            <p className="py-3 mx-7 before:bg-amber-300 before:absolute before:left-0 before:bottom-5 before:right-[94%] lg:before:right-[92%] before:p-[0.2px]">
               {form.phone ? form.phone: "+234 91-3536-9142"}
            </p>
            </div>
            <div className="mt-5 dark:text-white relative">
              <p className="flex dark:fill-white gap-1 justify-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"/></svg>
               Email
              </p>
              <p className="py-3 mx-7 before:bg-amber-300 before:absolute before:left-0 before:bottom-5 before:right-[94%] lg:before:right-[92%] before:p-[0.2px]">
                {form.email ? form.email: "vtounaregha@gmail.com"}
              </p>
            </div>
          </div>
          <div className="p-5 font-mono dark:text-white">
            <h3>About Me: <hr className='w-[110px] text-amber-400 border-2' /></h3>
            <p className='py-3'>
              {form.about ? form.about : `
                I'm Victor Joseph Tounaregha, a developer who turns complex ideas into reality. I have hands-on experience in collaborative environments building responsive applications and consuming RESTful APIs.
Core Skills: React.js, JavaScript (ES6+), HTML5, CSS3
Tools & Frameworks: Bootstrap 5, Tailwind CSS, Jest, Webpack, Git, npm
Currently Learning: Node.js
Seeking to apply my skills in a challenging new role. Let's talk
              `}
            </p>
          </div>
          <div className="p-5 font-mono dark:text-white">
            <h3>Educational Experience: <hr className='w-[110px] text-amber-400 border-2' /></h3>
            <div className="grid grid-cols-2 gap-2 py-3">
              <div className="grid line-clamp-4">
              <p className="dark:text-white font-bold">
                {form.entryDate ? form.entryDate : 2018} - {form.gradDate ? form.gradDate : 2023}
              </p>
              <p className=" dark:text-white">
                {form.honours ? form.honours: "B.Tech"}
              </p>
              </div> 
              <div className="dark:text-white grid">
                <p>
                  {form.title ? form.title : "Electrical Engineering"}
                </p>
                <p>
                  {form.school ? form.school : "Rivers State University"}
                </p>
              </div>
            </div> 
          </div>
          <div className="p-5 font-mono dark:text-white">
            <h3>Practical Experience: <hr className='w-[110px] text-amber-400 border-2' /></h3>
            <div className="grid grid-cols-2 gap-2 py-3">
              <div className="line-clamp-4">
              <p className="dark:text-white">
                {form.startDate ? form.startDate : 2024} - {form.endDate ? form.endDate : "present"}
              </p>
              <p className=" dark:text-white">
                {form.companyName ? form.companyName: "Aiistecx international"}
              </p>
              <p className=" dark:text-white">
                {form.location ? form.location: "Remote"}
              </p>
              </div> 
              <div className="dark:text-white">
                <p>
                  {form.position ? form.position : "Software Engineer"}
                </p>
                <p className='flex overflow-hidden line-clamp-3'>
                  {form.duties ? form.duties: "i did a lot bro 😁"}
                </p>
              </div>
            </div> 
          </div>
        </div>
      </div>
    )
  }
  
    return (
      <div className='grid lg:grid-cols-2'>
        <form action="" method="post" onSubmit={handleSubmit} className='sm:mb-0 px-4 mb-20'>
          <>
          <div className="grid lg:border-r lg:border-amber-300 ">
            {/* General Info */}
            <div className="grid">
              <div className="row dark:text-white text-black pb-5">
                <h3>General Info</h3>
              </div>
              {isShowGen ?  <>
                <div className="form-control">
                  <label htmlFor="fullName">Full Name:</label>
                  <input type="text" name="fullName" id="fullname" onChange={handleChange} value={form.fullName} />
                </div>
                <div className="form-control">
                  <label htmlFor="email">Email Address:</label>
                  <input type="email" name="email" id="email" autoComplete='email' onChange={handleChange} value={form.email} />
                </div>
                <div className="form-control">
                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" name="phone" id="phone" autoComplete='phone' onChange={handleChange} value={form.phone} />
                </div>
                <div className="form-control">
                  <label htmlFor="about">About Me:</label>
                  <textarea name="about" id="about" cols="30" onChange={handleChange} value={form.about}></textarea>
                </div>
              </> : null }
            <button className="btn flex w-fit h-fit" onClick={()=> setIsShowGen(!isShowGen)}>{!isShowGen ? "Edit" : "Hide"}</button>
            </div>
            {/* Educational Experience */}
            <div className='grid pt-6'>
            <div className="row dark:text-white text-black pb-5">
              <h3>Educational Experience</h3>
            </div>
          {isPractical ? 
            <> 
              <div className="form-control">
                <label htmlFor="schoolName">School Name:</label>
                <input type="text" name="schoolname" id="schoolName" onChange={handleChange} value={form.school} />
              </div>
              <div className="form-control">
                <label htmlFor="titleOfStudy">Title of Study:</label>
                <input type="text" name="titleofstudy" id="titleOfStudy" onChange={handleChange} value={form.title} />
              </div>
              <div className="form-control">
                <label htmlFor="dateOfStudy">Date of Study:</label>
                <input type="number" name="dateofstudy" id="dateOfStudy" value={form.entryDate} min={1990} className="dark:text-white" onChange={handleChange}  />
              </div>
              <div className="form-control">
                <label htmlFor="dateOfgrad">Date of Graduation:</label>
                <input type="number" name="dateofgrad" id="dateOfGrad" value={form.gradDate} min={1990} className=" dark:text-white" onChange={handleChange} />
              </div>
              <div className="form-control">
                <label htmlFor="honours">Honours:</label>
                <input type="text" name="honour" id="honours" onChange={handleChange} value={form.honours} />
              </div>
            </> : null}
            <button className="btn w-fit h-fit flex" onClick={()=> setIsPractical(!isPractical)}>{!isPractical? "Edit" : "Hide"}</button>
            </div>
            {/* Practical Experience */}
            <div className='grid py-6'>
              <div className="row dark:text-white text-black pb-5">
                <h3>Practical Experience</h3>
              </div>
              {isEducational ? <>
                <div className="form-control">
                  <label htmlFor="companyName">Company Name:</label>
                  <input type="text" name="companyName" id="companyname" onChange={handleChange} value={form.companyName}/>
                </div>
                <div className="form-control">
                  <label htmlFor="position">Position Title:</label>
                  <input type="text" name="position" id="position" onChange={handleChange} value={form.position}/>
                </div>
                <div className="form-control">
                  <label htmlFor="duties">Main Duties:</label>
                  <textarea name="duties" id="duties" cols="30" rows="4" onChange={handleChange} value={form.duties}></textarea>
                </div>
                <div className="form-control">
                  <label htmlFor="startDate">From:</label>
                  <input type="date" name="startDate" id="start" className='dark:bg-amber-50 dark:text-black' onChange={handleChange} value={form.startDate} />
                </div>
                <div className="form-control">
                  <label htmlFor="endDate">End:</label>
                  <input type="date" name="endDate" id="end" className='dark:bg-amber-50 dark:text-black disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed' onChange={handleChange} disabled={isChecked} value={form.endDate}/>
                </div>
                <div className="form-check">
                  <label htmlFor="presentCheck">I current work there</label>
                  <input type="checkbox" name="presentCheck" id="present" checked={isChecked} onChange={handleCheck} />
                </div>
              </> : null}
              <button className="btn flex w-fit h-fit" onClick={()=> setIsEducational(!isEducational)}>{!isEducational ? "Edit" : "Hide"}</button>
            </div>
          </div>
        </> 
        <button type="submit" className='btn btn submit'>Submit</button>
        </form>
        <CvDisplay />
      </div>
    )
}
