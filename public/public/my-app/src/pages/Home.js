import React from 'react'
import "../styles/Home.css";
import profile from '../assets/profile.jpg';

function Home() {
  return (
    <div className='home'>
      <div className='intro'></div>
      <img src={profile} alt = "me" />
        <h2> Hi, my name is Jonathan </h2>
          <div className='prompt'>
            <p>
              <text>
                Previously a financial analyst for The Walt Disney Company, now turned Software Engineer! I graduated from University of Southern California -- Fight On! -- with a degree in Business Administration. I worked at the Walt Disney Company for ~ 4 years, now trying to transition into development. I like to play golf, smoke a cigar, and game on my free time! Leave me a message! 
              </text>
            </p>
          </div>
      <div className='skills'>
        <h1> Skills </h1>
          <ol className='skillList'>
            <li className='code'>
              <h2> Front-End </h2>
              {/* <span> */}
                <ul>
                  <li>ReactJS</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>BootStrap</li>
                  <li>JQuery</li>
                  <li>JavaScript</li>
                </ul>
                {/* ReactJS, HTML, CSS, BootStrap, JQuery */}
              {/* </span> */}
            </li>
            <li className='code'>
              <h2> Back-End </h2>
              {/* <span> */}
              <ul>
                  <li>NodeJS</li>
                  <li>ExpressJS</li>
                  <li>GraphQL</li>
                  <li>ApolloServer</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>JavaScript</li>
                </ul>
                {/* NodeJS, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB */}
              {/* </span> */}
            </li>
            <li className='code'>
              <h2> Learning Languages </h2>
              {/* <span> */}
              <ul>
                  <li>Java</li>
                  <li>Python</li>
                  <li>C++</li>
              </ul>
                {/* JavaScript; Pursuing Java, Python, C++ */}
              {/* </span> */}
            </li>
          </ol>
      </div>
    </div>
  )
}

export default Home;