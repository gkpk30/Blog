import React from 'react'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div>
        <Header/>
        <div className="py-6">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-[120rem] lg:px-8 lg:grid lg:grid-cols-12 lg:gap-5">
          
              <Posts/>
              <Sidebar/>
          
        </div>
      </div>
    </div>
  )
}
