import React from 'react'
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div id="info-text">


      <h4>TL;DR</h4>
      <p>Hej!</p>
      <p>Jag är en blivande systemutvecklare som testat lite av mycket. 
      Just nu läser jag till Webbutvecklare inom .NET på EC-Utbildning och är färdig våren 2027.</p>

     <p>Stay tuned för mer kod och projekt under resans gång!</p>

      <Link to="/about"><h4>Läs mer</h4></Link>
      
      

    </div>
  )
}

export default HomePage