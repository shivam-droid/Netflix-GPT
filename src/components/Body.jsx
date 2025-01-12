import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login.jsx'
import Browse from './Browse.jsx'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ])

  return (
    <div className='overflow-hidden min-h-screen'>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body