import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Questions from './Questions'
import SideBar from './SideBar'

export default function Layout({children}) {
  return (
    <>
      <Header/>
 <div className='container'>
     <NavBar/>
    {/* 메인  */}
   <div id="content">
    <Questions/>
      <SideBar/>
    </div>
    <style jsx>{`
      .container {
         flex: 1 1 0;
          width: 100%;
        display: flex;
        }
        #content {
          flex: 1 2 0;
          display: flex;
        }
      `}</style>
    </div>
    <div>{children}</div>

    </>
  )
}
