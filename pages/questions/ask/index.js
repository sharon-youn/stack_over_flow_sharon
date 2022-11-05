import React, { useState } from 'react'
import AskNotice from '../../../components/question/AskNotice'
import SubmissionBtn from '../../../components/question/SubmissionBtn'
import AskSeo from '../../../components/question/AskSeo'
import AskContent from '../../../components/question/AskContent'


export default function Ask() {


  return (
    <>
    <AskSeo/>
    <div className='ask_container'>
      <div className='ask_content'>
        <div className='box-border'>
            <div className='post-form'>
              <main className='question-form'>
               <AskNotice/>
              {/* Writing a good title, title 부분  */}
              <AskContent/>
              
                {/* 태그 달수 있는 곳 */}
              
              </main>
            </div>
        </div>
      </div>
      <style jsx>{`
       
      .ask_container {
        width: 100vw;
        overflow-x: hidden;
        background-color: rgb(248, 249, 249);
   
      }
      .ask_content {
        width: 80vw;
        overflow-y: auto;

      }
    
  
        `}</style>
    </div>
    </>
  )
  
}
