import Image from 'next/image'
import React from 'react'

export default function AskContent() {


  return (
    <>
    <div className='title'>
    {/* Title 글씨 */}
  <div className='title-box'>
    <div className='title-content'>
        <div className='title-head'>
            <div className='title-name'>
                    <label className='title-label'>Title</label>
            </div>
            <div className='title-detail'>
              <div>
                <label className='detail-label'>
                Be specific and imagine you’re asking a question to another person.
                </label>
              </div>

            </div>
       </div>
      {/* Title input*/}
        <div>
           <input 
           className='title-input'
           type="text"
           placeholder='e.g. Is there an R function for finding the index of an element in a vector?'></input>
       </div>
     </div>


 </div>
 {/* writing box  */}
 <div className='writing-box'>
      <div className='writing-name'>
            Writing a good title
       </div>
       <div className='writing-content'>
        <img className='writing-img' alt="good-title-content" src="/good-title.png" width={50} height={50} />
         
        <li className='writing-list'>
          <div className='writing-body idea2'>Your title should summarize the problem.</div>
        </li>

        <li className='writing-list'>
          <div className='writing-body idea'>You might find that you have a better idea of your title after writing out the rest of the question.</div>
        </li>
          
      </div>
     </div>
    </div>

    {/* problem 부분 */}
    <div className='problem-box'>
    <div className='problem-outer'>
      <div>
        <div className='problem-margin'>
          <div className='problem-content'>
            {/* problem 제목 */}
              <div className='problem-title'>
                <label className='title-name'>
                What are the details of your problem?
                <p className='problem-p'>
                Introduce the problem and expand on what you put in the title. Minimum 20 characters.
                </p>
                </label>
                </div>
              {/* problem 내용  */}
              <div className='problem-body-box'>
              <textarea className='problem-body' placeholder='여기에 문제를 써주세요.'>
                </textarea>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    {/* 태그 부분 */}
    <div className='tags-box'>
    <div className='tags-outer'>
      <div>
        <div className='tags-margin'>
          <div className='tags-content'>
            {/* tags 제목 */}
              <div className='tags-title'>
                <label className='tags-name'>
                Tags
                <p className='tags-p'>
                Add up to 5 tags to describe what your question is about. Start typing to see suggestions.
                </p>
                </label>
                </div>
              {/* tags 내용  */}
              <div className='tags-body-box'>
                <input className='tags-body' placeholder='태그를 써주세요'>
                </input>
              </div>

          </div>
        </div>
      </div>
    </div>
    </div>
  <style jsx>{`

  .title {
   display: flex;
   justify-content: space-between;
   margin-top: 2.5%;
   margin-left: 3%;
  }
  .title-box{
      border: 1px solid #e3e6e8;
      width: 72%;
      background-color: #ffffff;
      padding-top: 1.5%;
      padding-left: 1.5%;
      border-radius: 3px;
      padding-bottom: 2%;
   
  }
  .title-content {
      display: flex;
      flex-direction: column;
  
  }
  .title-label {
      font-size: 1rem;
      font-weight: 800;
  }
  .detail-label{
      font-size: 0.8rem;
  }
  .title-input{
      width: 95%;
      border: 1px solid #babfc4;
      color: black;
      padding: 1% 1%;
      border-radius: 2px;
      margin-top: 1%;

  }
  .nextbtn{
      color: #ffffff;
      background-color: #0a95ff;
      box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
      width: 6%;
      font-size: 0.8rem;
      margin-top: 1.4%;
      margin-bottom: 2%;
  }
  .nextbtn:hover{
    background-color: #77c0f8;
    transition: 0.5s;
  }
  .writing-box{
      border: 1px solid #d6d9dc;
      border-radius: 2px;
      background-color: #ffffff;
      width: 25%;
      display: flex;
      flex-direction: column;        
  }
 
  .writing-name {
      background-color: #f8f9f9;
      border-bottom: 1px solid #d6d9dc;
      height: 30%;
      padding: 5% 8%;
      display: flex;
      align-items: center;
  }
  .writing-body {
    display: flex;
  }
  .writing-list {
    list-style: none;
  }
  .writing-content {
      display: flex;
      font-size: 0.8rem;
      align-items: center;
      justify-content: center;
      padding-right: 2%;
      flex-wrap: wrap;

  }
  .idea {
    margin-left: 23%;
    margin-top: -4%;
  }
  @media screen and (max-width: 1340px) {
    .title {
      display:flex;
      flex-direction: column-reverse;
    }
    .title-box {
      width: 93%;
    }
    .writing-box {
      width: 93%;
      margin-bottom: 3%;
    }
    .writing-name {
      padding: 1% 2%;

    }
    .writing-content {
      padding: -4% -4%;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      align-items: flex-start;
    }
    .writing-list {
      padding: 3%;
      font-size: 0.9rem;
    }
    .writing-body {
      margin-bottom: -4%;

    }
    .writing-img {
   display: none;
  }

  .idea {
    margin: 0;
    padding: 0;
  }
  .idea2 {
    margin: 0;
    padding: 0;
    margin-bottom: -10%;
  }

  }

  .problem-box {
        border: 1px solid #e3e6e8;
        background-color: white;
        width: 70%;
        height: 100%;
        margin-top:  2.5%;
        border-radius: 3px;
        margin-left: 3%;

    }
    .problem-outer {
        margin: 3% 3% 3% 3%;
    }
    .problem-title {
      margin-bottom: 1.5%;
    }
    .title-name {
        font-weight: 600;
        font-size: 1rem;
    }
    .problem-p {
        font-size: 0.8rem;
        font-weight: 400;
        color: gray;
        margin-top: 0.5%;
    }

    .problem-content {
      height: 100%;
    }
    .problem-body-box{
        height: 100%;
    }
    .problem-body {
      width: 100%;
      border: 1px solid #e3e6e8;
      height: 100%;
      padding-bottom: 20%;

    }
  
        @media screen and (max-width: 1340px) {
          .problem-box {
            width: 90%;
          }
        }

        .tags-box {
        border: 1px solid #e3e6e8;
        background-color: white;
        width: 70%;
        height: 100%;
        margin-top:  2.5%;
        border-radius: 3px;
        margin-left: 3%;

    }
    .tags-outer {
      margin: 3% 3% 3% 3%;
    }
    .tags-title {
      margin-bottom: 1.5%;
    }
    .tags-name {
        font-weight: 600;
        font-size: 1rem;
    }
    .tags-p {
        font-size: 0.8rem;
        font-weight: 400;
        color: gray;
        margin-top: 0.5%;
    }
    .try-content {
      height: 100%;
    }
    .tags-body-box{
        height: 100%;
        color: white;
        
    }
    .tags-body {
      height: 100%;
      width: 100%;
      border: 1px solid #e3e6e8;
      padding: 1% 1%;
    }
    
        @media screen and (max-width: 1340px) {
          .tags-box {
            width: 90%;
          }
        }
      

    `}</style>
  </>
  )
}
