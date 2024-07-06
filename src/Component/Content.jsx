import React from 'react'
import '../index.css'

const Content = () => {
  return (
    <div>
    <div className=' w-full bg-teal-200 h-[100%] flex flex-col pl-16 pt-12 gap-5 bg-white '>
      <img src="/google.png" alt="goole"className='w-32 h-10' />
      <h1 className='text-4xl font-bold'>Google Project Management: Professional <br />Certificate</h1>
      <p>Start your path to a career in project management. In this program, you’ll learn in-demand skills that will have you job-ready in less <br /> than six months. No degree or experience is required.</p>
      
      <div className='flex flex-col gap-4 items-start'>
      <div className='flex flex-row gap-2'><img src="\translate_FILL0_wght400_GRAD0_opsz24.svg" alt="" /> <p>Taught in English</p> <p>|</p> <p className='underline hover:no-underline hover:text-pinky2 cursor-pointer'>Video Subtitle Availables</p></div>
     <div className='flex gap-1'><div className='m-auto'><img src="\500x500_Google.png" alt="google" className='w-8 h-8' /></div> 
     <div className='flex-col'>
         <div  className='flex flex-row gap-2'><p>Instructor:</p> <p className='underline hover:no-underline hover:text-pinky2 cursor-pointer'>Google career certificates</p></div>
     <p className='text-xs bg-pinky flex w-20 '>Top Instructor</p>
     </div>
    
     </div>
     <div className='flex gap-5 items-center mt-5'><button className='border w-40 h-16 rounded-md bg-pinky2 text-red-200  text-white hover:bg-pinky'>Enroll for free</button> <div>financial aid available</div></div>
      </div>
      
      <div><p><b>1,432,373</b> already enrolled</p></div>

      
    </div>
    
    </div>
  )
}

export default Content
