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
        <h2 className="section-title">Klara kurser</h2>

        <div id="courses">
          {/* Vi triggar scroll till projekt-sektionen vid klick */}
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
            onClick={() => scrollToSection('js-project')}
          > 
            C#
          </div>

          <div 
            className="course complete" 
            onClick={() => scrollToSection('js-project')}
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