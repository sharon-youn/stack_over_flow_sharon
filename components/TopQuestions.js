import React from 'react'
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Questions from '../components/Questions';
import Seo from '../components/Seo';
import Notices from '../components/Notices';

export default function TopQuestions() {
  return (
    <>
    <Seo/>
    <Header/>
<div className='container'>
   <NavBar/>
  {/* 메인  */}
 <div id="content">
  <Questions/>
    <Notices/>
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
  </>
  )
}
