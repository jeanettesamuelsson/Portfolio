import React from 'react'
import projekt8 from '../assets/projekt8.png'


function CS() {
  return (
    <section id="cs-project">

      <div className="info-course"><p>I kursen C# låg mycket fokus på systemarkitektur och jag lärde oss bland annat att skapa en konsolapplikation i form av ett kundhanteringssystem, med funktionalitet så som att lägga till användare i en lista och spara som json-fil. Även funktionalitet så som att kunna söka efter en specifik användare och ta bort denna från filen, CRUD-funktionalitet helt enkelt!


</p>
      <p>Vidare lärde vi oss om MVVM och tillämpade även en grafisk WPF-applikation.  </p>

      
        <h3>Projekt C# - CManager </h3>
        <h4><a href="https://github.com/jeanettesamuelsson" target="_blank" >GitHub-länk</a></h4>

      </div>

      <div className="images">

        <img className="gallery-img" src={projekt8} alt="" />
        

      </div>




    </section>
  )
}
