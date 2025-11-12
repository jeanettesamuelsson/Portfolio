import React from 'react'
import projekt1 from '../assets/projekt1.png'
import projekt2 from '../assets/projekt2.png'
import projekt3 from '../assets/projekt3.png'

function HTMLCSS() {
  return (
    <section>

      <div className ="info-course">I kursen HTML och CSS fick vi lära oss att bygga en webbsida utifrån en färdig design med hjälp av HTML och CSS. Under kursens gång testade vi även olika CSS-ramverk, såsom Tailwind och Bootstrap. Vi gick också igenom grundläggande JavaScript för att skapa interaktiva delar på webbsidan, som en FAQ-accordion och en funktion för mörkt tema.
       
       <h3>Projekt HTML&CSS - Silicon </h3>
       <h4><a href="https://github.com/jeanettesamuelsson/SiliconV2" target="_blank" >GitHub-länk</a></h4>

       </div>

      <div id="images">

       

        <img src={projekt2} alt="" />
        <img src={projekt3} alt="" />
        <img src={projekt1} alt="" />

      </div>




    </section>
  )
}

export default HTMLCSS