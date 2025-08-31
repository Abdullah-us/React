import { Component } from 'react'
import './App.css'
import Cards from './component/cards/cards'
import Navbar from './component/navbar/navbar'

function App() {

  return (
    <>
    
      <Navbar/>
      <div className='flex gap-64'>
      <Cards username="Asif" img='https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8fDA%3D' />
     <Cards username='mian' img='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D'/>
      <Cards/>
      

      </div>
      

      
    </>
  )
}

export default App
