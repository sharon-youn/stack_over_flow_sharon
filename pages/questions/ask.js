import React from 'react'
import Header from '../../components/Header'
import Notice from '../../components/Notice'

import AskSide from '../../components/AskSide'

export default function Ask() {
  return (
    <>
     <Header/>

    <div className='container'>
     <AskSide/>
      <div className='content'>
        <div className='box-border'>
            <form className='post-form'>

              <main className='question-form'>
               <Notice/>
                        {/* Writing a good title, title 부분  */}
                    <div className='title'>
                      <div className='writing'>
                          <div className='writing-name'>
                            Writing a good title
                          </div>
                          <img src="/good-title.png" width={50} height={50} />
                          <div className='writing-content'>
                            <p>Your title should summarize the problem.</p>
                            <p>You might find that you have a better idea of your title after writing out the rest of the question.</p>
                          </div>
                      </div>
                      <div className='title-box'>
                        {/* Title 글씨 */}
                        <div className='title-content'>
                            <div className='title-head'>
                                <div className='title-name'>
                                        <label>Title</label>
                                </div>
                                <div className='title-detail'>
                                  <div>
                                    <label>
                                    Be specific and imagine you’re asking a question to another person.
                                    </label>
                                  </div>

                                </div>
                              </div>
                              {/* Title input*/}
                              <div>
                                <input placeholder='e.g. Is there an R function for finding the index of an element in a vector?'></input>


                              </div>

                        </div>
                        <button>Next</button>
                      </div>
                          <div className='problem-box'>
                            <div className='problem-outer'>
                              <div>
                                <div className='problem-margin'>
                                  <div className='problem-content'>
                                    {/* problem 제목 */}
                                      <div className='problem-title'>
                                        <label>
                                        What are the details of your problem?
                                        <p>
                                        Introduce the problem and expand on what you put in the title. Minimum 20 characters.
                                        </p>
                                        </label>
                                        </div>
                                      {/* problem 내용  */}
                                      <div className='problem-body-box'>
                                        <div className='problem-body'>
                                          이게문제야 
                                        </div>
                                      </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                          {/* try box 부분  */}

                          <div className='try-box'>
                            <div className='try-outer'>
                              <div>
                                <div className='try-margin'>
                                  <div className='try-content'>
                                    {/* try 제목 */}
                                      <div className='try-title'>
                                        <label>
                                        What did you try and what were you expecting?
                                        <p>
                                        Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.
                                        </p>
                                        </label>
                                        </div>
                                      {/* try 내용  */}
                                      <div className='try-body-box'>
                                        <div className='try-body'>
                                          이게문제야 
                                        </div>
                                      </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                          
                          {/* 태그 달수 있는 곳 */}

                          <div className='tags'>
                            
                          </div>
                          {/* 버튼부분  */}
                          <div className='button-box'>
                            <div className='button-list'>
                              <button>Review your queston</button>
                              <button>Discard draft</button>


                            </div>

                          </div>

                    </div>
                
              </main>
            </form>
        </div>

      </div>
      <style jsx>{`
       
      .container {
        background-color: rgb(248, 249, 249);
        flex: 1 1 0;
        display: flex;
        width: 100%;
      }
      .content {
        border: 1px solid blue;
        width: 75rem;

      }
      
        `}</style>
    </div>
    </>
  )
  
}
