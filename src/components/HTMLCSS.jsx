import React from 'react'
import projekt1 from '../assets/projekt1.png'
import projekt2 from '../assets/projekt2.png'
import projekt3 from '../assets/projekt3.png'

function HTMLCSS() {
  return (
    <section id="html-css-project">

      <div className ="info-course">I kursen HTML och CSS fick jag lära mig att bygga en webbsida utifrån en färdig design i Figma. Under kursens gång testade jag även på olika CSS-ramverk, såsom Tailwind och Bootstrap. Vi gick också igenom grundläggande JavaScript för att skapa interaktiva delar på webbsidan, så som en FAQ-accordion och en funktion för mörkt tema.
       
       <h3>Projekt HTML&CSS - Silicon </h3>
       <h4><a href="https://github.com/jeanettesamuelsson/SiliconV2" target="_blank" >GitHub-länk</a></h4>

       </div>

      <div id="images">

       

        <img className="gallery-img" src={projekt2} alt="" />
        <img className="gallery-img" src={projekt3} alt="" />
        <img className="gallery-img" src={projekt1} alt="" />

      </div>




    </section>
  )
}

export default HTMLCSS