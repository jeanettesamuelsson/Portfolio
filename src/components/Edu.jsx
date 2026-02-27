import React from 'react'

function Edu() {

  // Funktion för att scrolla smidigt
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="learning-content">
        <h2 className="section-title">Avklarade kurser</h2>

        <div id="courses">

          <div 
            className="course complete" 
            onClick={() => scrollToSection('js-project')}
          > 
            Introduktion till Linux och små nätverk
          </div>

          <div 
            className="course complete" 
            onClick={() => scrollToSection('js-project')}
          > 
            Cybersäkerhet - grunder och medvetenhet
          </div>

          <div 
            className="course complete" 
            onClick={() => scrollToSection('js-project')}
          > 
            Programmering i Java
          </div>

          <div 
            className="course complete" 
            onClick={() => scrollToSection('js-project')}
          > 
            Dataanalys med R
          </div>
        
          <div 
            className="course complete" 
            onClick={() => scrollToSection('html-css-project')}
          > 
            HTML & CSS 
          </div>

          <div 
            className="course complete" 
            onClick={() => scrollToSection('js-project')}
          > 
            Javascript Frontend 
          </div>

          <div 
            className="course complete" 
            onClick={() => scrollToSection('cs-project')}
          > 
            C#
          </div>

          <div 
            className="course complete" 
            onClick={() => scrollToSection('datalagring-project')}
          > 
            Datalagring 
          </div>


          <div className="ongoing-course">Pågående! ASP.NET</div>
       
        </div>

      </section>

      <hr className="divider" />
    </>
  )
}

export default Edu