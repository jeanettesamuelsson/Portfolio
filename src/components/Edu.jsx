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
        <h2 className="section-title">Kurser</h2>

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

          <div className="course">C#</div>
          <div className="course">Datalagring</div>
          <div className="course">ASP.NET</div>
          <div className="course">Molntjänster</div>
          <div className="course">CMS</div>
          <div className="course">Projekt</div>
          <div className="course">LIA</div>
          <div className="course">Examensarbete</div>
        </div>

      </section>

      <hr className="divider" />
    </>
  )
}

export default Edu