import React from 'react'
import Header from '../component/Header'
import Posts from '../component/Posts'
import Sidebar from '../component/Sidebar'


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
