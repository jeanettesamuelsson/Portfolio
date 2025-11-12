import React from 'react'
import projekt1 from '../assets/projekt1.png'
import projekt2 from '../assets/projekt2.png'
import projekt3 from '../assets/projekt3.png'

function HTMLCSS() {
  return (
    <section>

      <div className ="info-course">I kursen HTML och CSS fick vi lära oss att använda HTML och CSS för att bygga en webbsida utifrån en färdig design. Vi testade också på att anända olika CSS-ramverk såsom Tailwind och Bootstrap. Vi lärde oss även lite grundläggande Javascript för att bygga vissa delar på webbsidan, så som en FAQ-Accordion och en hantering för mörkt tema.

       
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