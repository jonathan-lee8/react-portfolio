import React from 'react'
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='intro'></div>
        <h2> Hi, my name is Jonathan </h2>
          <div className='prompt'>
            <p>
              Previously a financial analyst for The Walt Disney Company, now turned Software Engineer!
            </p>
          </div>
      <div className='skills'>
        <h1> Skills </h1>
          <ol className='skillList'>
            <li className='code'>
              <h2> Front-End </h2>
              <span>
                ReactJS, HTML, CSS, BootStrap, JQuery
              </span>
            </li>
            <li className='code'>
              <h2> Back-End </h2>
              <span>
                NodeJS, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB
              </span>
            </li>
            <li className='code'>
              <h2> Languages </h2>
              <span>
                JavaScript; Pursuing Java, Python, C++
              </span>
            </li>
          </ol>
      </div>
    </div>
  )
}

export default Home;