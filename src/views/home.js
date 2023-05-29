import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Quizzical Rotating Horse</title>
        <meta property="og:title" content="Quizzical Rotating Horse" />
      </Helmet>
      <img src="/favicon-16x16-200h.png" alt="image" className="home-image" />
      <h1>Heading</h1>
      <button className="button">Button</button>
    </div>
  )
}

export default Home
