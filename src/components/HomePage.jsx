import React from 'react'
import { Link } from 'react-router-dom';
import about from '../assets/about2.png'


function HomePage() {
  return (
    <div id="info-text">

      
      <h2>Hej! 👋</h2>

      <div id="info-wrapper">
  
      <h4>Jag är en blivande systemutvecklare som testat lite av mycket. 
      Just nu läser jag till Webbutvecklare inom .NET på EC-Utbildning och är färdig våren 2027.</h4>

      <img className="about-img" src={about} alt="" /></div>

     <p>Stay tuned för mer kod och projekt under resans gång!</p>

    
    </div>
  )
}

export default HomePage