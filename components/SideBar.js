import React from 'react'

export default function SideBar() {
  return (
    <div className='sidebar'>
    <div className='main-sidebar'>
      <div className='sidebar-box'>
          <ul className='d-block p0 m0'>
            <li className='li-title'>The Overflow Blog</li>
              <li className='blog-content'>
                <div>
                  <img src='/overflow_pencil.png' width={23} height={23}></img>
                </div>
                <div>Goodbye Webpack, hello Turbopack! The big news from today’s Next.JS conference</div>
              </li>
              <li className='blog-content'>
                <div>
                  <img src='/overflow_pencil.png' width={23} height={23}></img>
                </div>
                <div>Goodbye Webpack, hello Turbopack! The big news from today’s Next.JS conference</div>
              </li>
            <div>
            </div>
          </ul>

        </div>
        <style jsx>{`
        .sidebar-box {
            border:1px solid red;
            width: 17rem;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-color: #f1e5bc;
            background-color: #fdf7e2;
            margin-top: 28px;
            margin-right: 120px;
            border-radius: 5px;
        }
        .li-title {
            border-color: #f1e5bc;
            background-color: #fbf3d5;
            list-style: none;
            font-size: 15px;
            font-weight: bold;
        }
        .main-sidebar {
            display: flex;
        }
        .sidebar {
          display: flex;
        }
        .blog-content {
          display: flex;
        }
        `}</style>
    </div>
    </div>
  )
}
