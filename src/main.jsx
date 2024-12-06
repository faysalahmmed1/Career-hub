import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/HomePage/Home.jsx';
import About from './Components/Pages/About/About.jsx';
import Jobs from './Components/Pages/Jobs/Jobs.jsx';
import Blogs from './Components/Pages/Blogs/Blogs.jsx';
import Statistics from './Components/Pages/Statistics/Statistics.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/statistics",
        element: <Statistics />
      },
      {
        path: '/jobs',
        element: <Jobs />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
