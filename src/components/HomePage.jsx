import React from 'react';
import Typewriter from 'typewriter-effect';
import about from '../assets/about2.png';

function HomePage() {
  return (
    <div id="home" className="hero-section">
      <div className="code-hero-container">
        
      
        <div id="hero-left-column">
          
          <div className="code-line">
            <span className="code-bracket">&lt;</span>
            <span className="tag-name">div</span>{' '}
            <span className="attribute-name">id</span>=
            <span className="attribute-value">"hello-section"</span>
            <span className="code-bracket">&gt;</span>
          </div>

          <div className="code-block code-indent">
            
    
            <h1 className="rendered-title">
              <Typewriter
                options={{
                  strings: ['Hej där! 👋', 'Hello there! 👋'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  wrapperClassName: 'typewriter-text',
                  cursorClassName: 'typed-cursor',
                 
                }}
              />
            </h1>

            <div className="code-line">
              <span className="code-bracket">&lt;</span>
              <span className="tag-name">p</span>
              <span className="code-bracket">&gt;</span>
            </div>

            <div className="code-block code-indent">
              <p className="rendered-text">
                Jag är en framtida utvecklare med en bred teknisk nyfikenhet. 
                Just nu studerar jag till <strong>Webbutvecklare inom .NET-stacken</strong> på EC-Utbildning 
                och tar sikte på examen våren 2027.
              </p>
              <p className="rendered-subtext">
                -- Stay tuned för mer kod och projekt under tiden!
              </p>
            </div>

          
            <div className="code-line">
              <span className="code-bracket">&lt;/</span>
              <span className="tag-name">p</span>
              <span className="code-bracket">&gt;</span>
            </div>
          </div>

          <div className="code-line">
            <span className="code-bracket">&lt;/</span>
            <span className="tag-name">div</span>
            <span className="code-bracket">&gt;</span>
          </div>
        </div>

        <div id="hero-right-column">
          <div className="about-img-container">
            <img src={about} alt="Jeanette Samuelsson" className="hero-img" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default HomePage;