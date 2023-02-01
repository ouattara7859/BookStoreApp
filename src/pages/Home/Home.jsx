import React from 'react'
import Header from '../../components/Header/Header.jsx'; 
import { Outlet } from 'react-router-dom';
function Home() {
  return (
   <main>
        <Header/>
        <Outlet/>
   </main>
  )
}

export default Home