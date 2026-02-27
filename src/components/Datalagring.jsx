import React from 'react'
import projekt6 from '../assets/projekt6.png'
import projekt7 from '../assets/projekt7.png'


function Datalagring() {
  return (
    <section id="js-project">

      <div className="info-course"><p>I kursen Datalagring var fokuset att bygga en applikation för kursadministration. Jag lärde mig att designa en relationsdatabas i Microsoft SQL Server, grundläggande SQL-syntax samt att koppla ihop dem med ett Minimal Web-API byggt i .NET. Här användes även Entity Framework Core.
      Systemet integrerades sedan med en frontend i React för att skapa ett flöde mellan lagring och användargränssnitt.</p>
      <p>Under kursens gång startade jag även upp ett sidoprojekt - GolfSQRL, som tekniskt sätt går hand i hand med EduSQRL. Här fokuserade jag på att bygga en lösning för ett verkligt behov, vilket lät mig experimentera mer fritt utanför kursens ramar.  </p>

      
        <h3>Projekt Datalagring - EduSQRL </h3>
        <h4><a href="https://github.com/jeanettesamuelsson" target="_blank" >GitHub-länk</a></h4>

      </div>

      <div className="images">

        <img className="gallery-img" src={projekt7} alt="" />
        <img className="gallery-img" src={projekt6} alt="" />
        

      </div>




    </section>
  )
}

export default Datalagring