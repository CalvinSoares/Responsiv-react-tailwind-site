import React from 'react'
import middle from '../assets/middle.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={middle} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore distinctio a facilis? Voluptatum, corrupti vero. Ipsum nihil, recusandae quod repudiandae doloremque doloribus sed? Asperiores architecto qui earum reiciendis dicta delectus.</p>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] hover:bg-[#00df98c5] hover:text-black ease-in-out duration-100'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics