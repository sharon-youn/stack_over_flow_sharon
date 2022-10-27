import React from 'react'
import NavBar from '../NavBarFake';
import Questions from './Questions';
import Seo from './Seo';
import Notices from './Notices';
import HeaderFake from '../HeaderFake';

export default function TopQuestions() {
  return (
    <>
    <Seo/>
    <HeaderFake/>
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
