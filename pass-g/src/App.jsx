import { useState,useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [chare, setchare] = useState(false)
  const [password, setpassword] = useState("")

  const passwordRef = useRef(null)

  const passwordgenrator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number)str+="1234567890"
    if(chare)str+="!@#$%^&*()<>][}{:;~|"
    for (let i = 0; i<=length; i++){
      let chare = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(chare)

    }
       setpassword(pass)
  },[length,number,chare,setpassword])


const copypasswordToClipboard = useCallback(()=>
{
  window.navigator.clipboard.writeText(password)
},[password]
)

  useEffect(()=>{
      passwordgenrator()
  },[length,number,chare,passwordgenrator])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copypasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {
              setnumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={chare}
              id="characterInput"
              onChange={() => {
                  setchare((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>

     </div>
    </>
  )
}

export default App
