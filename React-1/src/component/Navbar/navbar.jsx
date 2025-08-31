import React from 'react'

function navbar() {
  return (
    <>
      <nav className='h-20 w-full bg-amber-800 text-amber-50 flex justify-between'>
        <div className='text-2xl font-bold m-5'>
            logo
        </div>
        <ul className='flex gap-3.5 mt-5 text-2xl cursor-pointer'>
            <li className='hover:underline'>Home</li>
            <li className='hover:underline'>About</li>
            <li className='hover:underline'>Me</li>

        </ul>
        <div>
            <button className='border-2 rounded-2xl mr-4 mt-3 p-2 hover:bg-white hover:font-sans text-black cursor-pointer hover:uppercase '>Submit</button>
        </div>
      </nav>
    </>
  )
}

export default navbar