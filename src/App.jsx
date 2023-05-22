//import * as React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MainLandingPage } from './page/landingPage/Main';
import Auth from './page/auth/Main';
import './App.css'
import AuthForm from './page/auth/component/FormData';
import MainPage from './page/main/Index';



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLandingPage />
    },
    {
      path: "/auth/:id",
      element: <Auth />,
    },
    {
      path: '/main',
      element: <MainPage/>
    }
  ])
  return (
    <main className='app'>
      <AuthForm>
        <RouterProvider router={router} />
      </AuthForm>
    </main>
  )
}

export default App