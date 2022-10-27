import React from 'react'
import Link  from 'next/link';


export default function TopHeader() {
  return (
    <div className='top'>
        <h1 className='top_h1'>Top Questions</h1>
            <div className="ask">
              <Link href="/questions/ask">
              <a className='askQ'>Ask Question</a>
              </Link>
            </div>
            <style jsx>{`
            .top {
                display:flex;
                flex-direction: row;
            }
            .top_h1 {
                font-size: 2rem;
                flex: 1 1 0;
                font-size: 1.5rem;
                font-weight:400;
            }
            
            .ask {
                width: 7rem;
                height: 2.5rem; 
                background-color:#0a95ff;
                color: white;
                box-shadow: inset 0 0.2rem rgba(198, 194, 194, 0.4);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 3px;
            }
            .ask:hover {
                background-color: #076ab6;
                transition: 0.5s;
            }
            .askQ {
                display: flex;
                align-items: center;
                justify-content: center;
        
            }
                `}</style>
        </div>
  )
}
