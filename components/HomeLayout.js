import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Questions from './Questions'
import Seo from './Seo'
import SideBar from './SideBar'

export default function Layout({children}) {
  return (
    <>
     
    <div>{children}</div>

    </>
  )
}
