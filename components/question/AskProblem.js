import React from 'react'

export default function AskProblem() {
  return (
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
              <button className='nextbtn s-btn'>Next</button>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
    .problem-box {
        border: 1px solid #e3e6e8;
        background-color: white;
        width: 70%;
        height: 100%;
        margin-top:  2.5%;
        border-radius: 3px;

    }
    .problem-outer {
        margin: 3%;
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
        border: 1px solid #e3e6e8;
        height: 100%;
    }
    .problem-body {
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
          .problem-box {
            width: 90%;
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
        }
    `}</style>
  </div>
  )
}
