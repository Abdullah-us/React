import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import Contact from './components/Contact/Contact.jsx';

import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Layout from './layout.jsx';
import Services from './components/Services/Services.jsx';


const router = createBrowserRouter([
{
  path:"/",
  element:<Layout/>,
  children:[
    {
      index: true,
      element:<Home/>

    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"contact",
      element:<Contact/>
    },
     {
      path: "services",
      element:<Services/>

    }
  ]
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}/>
  
  </StrictMode>,
)
