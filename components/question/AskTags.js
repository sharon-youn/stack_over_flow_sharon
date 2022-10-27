import React from 'react'

export default function AskTags() {
  return (
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
              <button className='nextbtn s-btn'>Next</button>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
    .tags-box {
        border: 1px solid #e3e6e8;
        background-color: white;
        width: 70%;
        height: 100%;
        margin-top:  2.5%;
        border-radius: 3px;

    }
    .tags-outer {
       margin: 3%;
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
        border: 1px solid #e3e6e8;
        height: 100%;
        color: white;
        
    }
    .tags-body {
      height: 100%;
      width: 100%;
      border: 1px solid #e3e6e8;
      padding: 1% 1%;
    }
    .nextbtn{
        color: #ffffff;
        background-color: #0a95ff;
        box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
        width: 6%;
        font-size: 0.8rem;
        margin-top: 1.4%;
        }
    .nextbtn:hover{
      background-color: #77c0f8;
      transition: 0.5s;
    }
        @media screen (max-width: 1340px) {
          .tags-box {
            width: 90%;
          }
        }
        @media screen (max-width:1100px) {
          .nextbtn{
            width: 3rem;
         }

        }
      
        @media screen (max-width:600px) {
          .nextbtn{
            width: 3rem;
         }
        }
    `}</style>
  </div>
  )
}
