import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsLetter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email'/>
                    <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 hover:bg-[#00df98c5] ease-in-out duration-100'>Notify Me</button>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, <span className='text-[#00df9a]'>assumenda</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter