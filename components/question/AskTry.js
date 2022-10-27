import React from 'react'

export default function AskTry() {
  return (
    <div className='try-box'>
    <div className='try-outer'>
      <div>
        <div className='try-margin'>
          <div className='try-content'>
            {/* try 제목 */}
              <div className='try-title'>
                <label className='try-name'>
                What did you try and what were you expecting?
                <p className='try-p'>
                Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.
                </p>
                </label>
                </div>
              {/* try 내용  */}
              <div className='try-body-box'>
              <textarea className='try-body' placeholder='여기에 문제를 써주세요.'>
                </textarea>
              </div>
              <button className='nextbtn s-btn'>Next</button>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
          .try-box {
              border: 1px solid #e3e6e8;
              background-color: white;
              width: 70%;
              height: 100%;
              margin-top:  2.5%;
              border-radius: 3px;

          }
          .try-outer {
            margin: 3%;
          }
          .try-title {
            margin-bottom: 1.5%;
          }
          .try-name {
              font-weight: 600;
              font-size: 1rem;
          }

          .try-body {
              border: 1px solid #e3e6e8;
              height: 10rem;
              
          }
          .try-p {
              font-size: 0.8rem;
              font-weight: 400;
              color: gray;
              margin-top: 0.5%;
          }
          .try-body-box{
              border: 1px solid #e3e6e8;
              height: 100%;
          }
          .try-body {
            width: 100%;
            border: 1px solid #e3e6e8;
            height: 100%;
            padding-bottom: 20%;

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
          .try-box {
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
