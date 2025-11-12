import React from 'react'
import projekt4 from '../assets/projekt4.png'
import projekt5 from '../assets/projekt5.png'

function JS() {
  return (
    <section>

      <div className="info-course">I kursen JavaScript Frontend fick vi en introduktion till både grundläggande JavaScript och React, där vi byggde en webbsida utifrån en färdig design. Under kursens gång lärde vi oss hantera formulär och göra API-anrop, både med ren JavaScript och med hjälp av olika npm-paket.

        Vi har även lärt oss om tillgänglighetsanpassning, där vi gick igenom hur man kan implementera riktlinjer enligt WCAG för att skapa inkluderande webbsidor.

        <h3>Projekt JavaScript - Stor Aid </h3>
        <h4><a href="https://github.com/jeanettesamuelsson/StorAid" target="_blank" >GitHub-länk</a></h4>

      </div>

      <div id="images">

        <img className="gallery-img" src={projekt4} alt="" />
        <img className="gallery-img" src={projekt5} alt="" />

      </div>




    </section>
  )
}

export default JS