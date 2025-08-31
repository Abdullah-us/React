import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className='w-full h-screen duration-1000' style={{backgroundColor: color}}>

         <div className='flex fixed flex-wrap bottom-5 inset-x-0.5 px-2 justify-center'>

          <div className='flex flex-wrap bg-amber-50 border-2  rounded-2xl shadow-lg'>

            <button onClick={()=> setColor("black")} className='bg-black rounded-4xl w-16 m-2 text-amber-50 border-2'> Black</button>

            <button onClick={()=> setColor("white")} className='bg-white rounded-4xl w-16 m-2 text-black border-2'> White</button>

            <button onClick={()=> setColor("red")} className='bg-red-700 rounded-4xl w-16 m-2 text-amber-50 border-2'> Red</button>

            <button onClick={()=> setColor("blue")} className='bg-blue-600 rounded-4xl w-16 m-2 text-amber-50 border-2'> Blue</button>
          
          </div>

         </div>


      </div>
    </>
  )
}

export default App
