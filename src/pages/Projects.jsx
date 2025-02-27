import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'


const Project = () => {
    const projectRef=useRef(null)
    const location=useLocation();
  useEffect(()=>{
    if(location.pathname==="/projects"){
      projectRef.current?.scrollIntoView({behavior:"smooth"})
    }
},[location])

  return (
    <div className='bg-[#FBFBFB] min-h-[90vh] lg:p-40 sm:p-28 p-10 dark:bg-[#030712] dark:text-white' ref={projectRef} >
      <p className=" text-5xl font-semibold" >Projects</p>

      <div className='mt-16 flex flex-col gap-20'>
         
         <div className=''>
             <div className='flex items-center gap-x-6'> <p className='text-2xl font-semibold'>SaurHub</p>
             <a
            href={"https://ecommerce-node-kk5p.onrender.com"}
            target='_blank'
            className=" border border-black py-1 px-3  rounded-3xl text-xl dark:border-white"
          >
            Live
          </a>
          <a
          target='_blank'
            href={"https://github.com/SaurabPrasai/ECOMMERCE_NODE"}
            className=" border border-black py-1 px-3  rounded-3xl text-xl dark:border-white"
          >
            Code
          </a>
             </div>
          <p className='text-xl pl-2'>-An Ecommerce app created using Node.js, MongoDb and Ejs.</p>
         </div>
         <div className=''>
             <div className='flex items-center gap-x-6'> <p className='text-2xl font-semibold'>Room Finder</p>
             <a
            href={"https://room-finder-i8g9.onrender.com"}
            target='_blank'
            className=" border border-black py-1 px-3  rounded-3xl text-xl dark:border-white"
          >
            Live
          </a>
          <a
            href={"https://github.com/SaurabPrasai/room-finder/"}
            target='_blank'
            className=" border border-black py-1 px-3  rounded-3xl text-xl dark:border-white"
          >
            Code
          </a>
             </div>
          <p className='text-xl pl-2'>-A room locator app created using React and Firebase. </p>
         </div>

         <div className=''>
             <div className='flex items-center gap-x-6'> <p className='text-2xl font-semibold'>Finance Tracker</p>
          <a
            href={"https://github.com/SaurabPrasai/Finance-Tracker"}
            target='_blank'
            className=" border border-black py-1 px-3  rounded-3xl text-xl dark:border-white"
          >
            Code
          </a>
             </div>
          <p className='text-xl pl-2'>-An expence monitor app created using MERN Stack.  </p>
         </div>

         <div className=''>
             <div className='flex items-center gap-x-6'> <p className='text-2xl font-semibold'>Update Damak</p>
             <a
            href={"https://update-damak.vercel.app"}
            target='_blank'
            className=" border border-black py-1 px-3  rounded-3xl text-xl dark:border-white"
          >
            Live
          </a>
          {/* <a
            href={"https://github.com/SaurabPrasai/room-finder/"}
            target='_blank'
            className=" border border-black py-1 px-3  rounded-3xl text-xl dark:border-white"
          >
            Code
          </a> */}
             </div>
          <p className='text-xl pl-2'>-A news portal created using Html, CSS and JavaScript. </p>
         </div>
      </div>

    </div>
  )
}

export default Project