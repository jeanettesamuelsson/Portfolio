import React from 'react'
import projekt4 from '../assets/projekt4.png'
import projekt5 from '../assets/projekt5.png'

function JS() {
  return (
    <section id="js-project">

      <div className="info-course">I kursen JavaScript Frontend fick jag en gedigen introduktion till både grundläggande JavaScript men också React, vilket var fokuset under kursens gång. Jag fick bygga en webbsida utifrån en färdig design i Figma. Under kursens gång lärde jag mig att hantera formulär och göra API-anrop, både med ren JavaScript och med hjälp av olika npm-paket.

        Vi gick även igenom tillgänglighetsanpassning och hur man kan implementera riktlinjer enligt WCAG för att skapa inkluderande och tillgängliga webbsidor.

        <h3>Projekt JavaScript - Stor Aid </h3>
        <h4><a href="https://github.com/jeanettesamuelsson/StorAid" target="_blank" >GitHub-länk</a></h4>

      </div>

      <div className="images">

        <img className="gallery-img" src={projekt4} alt="" />
        <img className="gallery-img" src={projekt5} alt="" />

      </div>




    </section>
  )
}

export default JS