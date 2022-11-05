import Link from "next/link";
import React, { useEffect, useState } from "react";
import agoraStatesDiscussions from "../../static/dummydata";
import FilterBtn from "./FilterBtn";
import TopHeader from "./TopHeader";
import {  useRef } from "react"
import { useInfiniteQuery } from "react-query"
import axios from "axios"


export default function Questions() {

//   const {
//     data, // 💡 data.pages를 갖고 있는 배열
//     error, // error 객체
//     fetchNextPage, // 💡 다음 페이지를 불러오는 함수
//     hasNextPage, // 다음 페이지가 있는지 여부, Boolean
//     isFetching, // 첫 페이지 fetching 여부, Boolean, 잘 안쓰인다
//     isFetchingNextPage, // 추가 페이지 fetching 여부, Boolean
//     status, // 💡 loading, error, success 중 하나의 상태, string
// } = useInfiniteQuery(
//       "questionList" // data의 이름
//     , getPokemonList // fetch callback, 위 data를 불러올 함수
//     , {
//         // 💡 중요! getNextPageParams가 무한 스크롤의 핵심,
//         // getNextPageParam 메서드가 falsy한 값을 반환하면 추가 fetch를 실행하지 않는다
//         // falsy하지 않은 값을 return 할 경우 Number를 리턴해야 하며
//         // 위의 fetch callback의 인자로 자동으로 pageParam을 전달.
//         getNextPageParam: lastPage => {
//           const { next } = lastPage // PoKeApi는 마지막 데이터가 없으면 next를 null로 준다

//           // 마지막페이지 fetchNextPage가 더는 작동하지 않도록 false를 리턴하자
//           if (!next) return false

//           // next 값에서 URL주소를 주고 있기 때문에 필요한 offset만 빼와서
//           // getPokemonList 함수에 pageParam으로 넘겨주자.
//           return Number(new URL(next).searchParams.get("size"))
//       }
//     }
//     )
  
    // const pageNum = 1

  const [question, setQuestion] = useState([])

  useEffect(()=> {
    (async () => {
     const {data} = await (
      await fetch(
        `http://54.180.175.144:8080/post?page=1&size=30`,{
          // params: {
          //   page: pageNum,
          //   size: 10,
          // }
        }
      )
      ).json()
     setQuestion(data)
     console.log(data)
    })()
  }, [])


  return (
    <div className="top_mainbar">
      {/* Top Questions 부분  */}
      <TopHeader />
      {/* Interesting, Hot~ 버튼들  */}
      <FilterBtn />
      {/* 밑에 질문들 map으로 깔아주기  */}
      <div id="qlist-wrapper" className="flush-left">
        <div id="question-mini-list">
          <div>
            
            { question.map(tweet => (
              <div key={tweet.postId} className="post-main">
                {/* 투표수, 답변수, views 일단 하드코딩  */}
                <div className="votes-status">
                  <div className="votes-list vote">
                    <span className="votes-item">10</span>
                    <span className="votes-name">votes</span>
                  </div>
                  <div className="votes-list plus">
                    <span className="votes-item">20</span>
                    <span className="votes-name">answers</span>
                  </div>
                  <div className="votes-list">
                    <span className="votes-item">30</span>
                    <span className="votes-name">views</span>
                  </div>
                </div>

                {/* 질문들 나오는 곳  */}
                <div className="post-content">
                  <h3 className="post-title">
                    <Link
                      href={{
                        pathname: `/questions/${tweet.postId}`,
                      }}
                    >
                      <a className="post-link">{tweet.title}</a>
                    </Link>
                  </h3>
                  {/* 태그, 작성자 */}
                  <div className="post-meta">
                    <div className="post-tags">
                    
                    </div>
                    <div className="usercard">
                      <div className="human_img">
                        <img src="/human.png" width={15} height={15}></img>
                      </div>
                      {tweet.author}
                      <div className="asked">  </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .top_mainbar {
          display: flex;
          flex-direction: column;
          padding: 1.5%;
          width: 100%;
          
        
        }
        .qlist-wrapper {
          width: 100%;
        }
        .question-mini-list {
          width: 100%;
        }
        .flush-left {
          margin-top: 2%;
          border-top: 1px solid #e3e6e8;
        }
        .votes-status {
          gap: 10;
          margin-right: 3%;
          margin-bottom: 1%;
          width: 10%;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          flex-wrap: wrap;
          align-items: flex-end;
          font-size: 1rem;
          color: gray;
        }
        .votes-list {
          font-size: 0.8rem;
          margin-bottom: 5%;
        }
        .votes-item {
          margin-right: 3%;
        }
        .plus {
          color: #2f6f44;
          border: 1px solid #2f6f44;
          padding: 6%;
        }
        .vote {
          color: black;
        }
        .post-content {
          width: 100%;
        }
        .post-title {
          flex-grow: 1;
          color: #0074cc;
          margin: 0;
          padding: 0;
          border: 0;
          font: inherit;
          font-size: 100%;
        }
        .post-main {
          position: relative;
          display: flex;
          border-bottom: 1px solid #e3e6e8;
          padding: 2%;
          padding-left: 7%;
          font-size: 1.2rem;
        }
        .post-meta {
          display: flex;
          justify-content: space-between;
          margin-top: 2%;
          width: 100%;
        }
        .post-link:hover {
          color: #49acf7;
        }
        .usercard {
          display: flex;
          font-size: 0.8rem;
          color: #0074cc;
          width: 50%;
          justify-content: flex-end;
          align-items: center;
        }
        .human_img {
          margin-right: 2%;
        }
        .tags {
          color: #2c5877;
          background-color: #d0e3f1;
          border-color: #00000000;
          font-size: 0.8rem;
          text-decoration: none;
          display: inline-block;
          padding: 20% 30%;
          white-space: nowrap;
          text-align: center;
          border-width: 1px;
          border-style: solid;
          border-radius: 2px;
        }
        .asked {
          color: gray;
          margin-left: 2%;
        }
        a {
          text-align: center;
          text-decoration: none; /* 링크의 밑줄 제거 */
          color: inherit;
        }

        @media screen and (max-width: 1300px) {
          .post-main {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .post-content {
            width: 80%;
          }
        }
        @media screen and (max-width: 1100px) {
          #mainbar {
            width: 90%;
          }
          .post-main {
            justify-content: space-around;
          }
        }
        @media screen and (max-width: 700px) {
          #mainbar {
            width: 100%;
          }
          .post-content {
            width: 75%;
          }
          .post-main {
            justify-content: space-around;
          }
        }
        @media screen and (min-width: 830px) {
        }
      `}</style>
    </div>
  );
}