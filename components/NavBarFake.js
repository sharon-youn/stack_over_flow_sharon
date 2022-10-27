import React from 'react'

export default function NavBar() {
  return (
    <div className='nav'>
      <ul>
        <li>Home</li>
        <li>Questions</li>
        <li>Tags</li>
      </ul>
      <style jsx>{`
        div {
            background-color: rgb(219, 219, 219);
            font-size: 15px;
            font-weight: bold;

        }
        li{
            list-style: none;
            margin-top: 30px;
            color:white
            
        }
        .nav {
          height: 40rem;
          width: 17rem;
          background-color: #8ecbfa;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          
        }
        
        `}</style>
    </div>
  )
}
