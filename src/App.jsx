import { useEffect, useState } from 'react';
import './index.scss';

// Importera dina komponenter
import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import Edu from './components/Edu.jsx';
import About from './components/About.jsx';
import HTMLCSS from './components/HTMLCSS.jsx';
import JS from './components/JS.jsx';
import Contact from './components/Contact.jsx';
import IntegratedPixels from './components/IntegratedPixels.jsx';
import Datalagring from './components/Datalagring.jsx';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      // pixel progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // active section
      const sections = ['home', 'learning', 'about', 'projects', 'contact-footer'];
      const scrollPos = window.scrollY + 300; // Trigger-offset

      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Darkmode
  const handleToggle = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    document.body.classList.toggle("darkmode", darkMode);
  }, [darkMode]);

  // smooth scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // function to close menu 
  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <div id="main-container">

      <IntegratedPixels scrollProgress={scrollProgress} activeSection={activeSection} />

      {/* hamburger nav on mobile*/}
      <button 
        className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Meny"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* overlay */}
      <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><button onClick={() => handleNavClick('home')}>Start</button></li>
          <li><button onClick={() => handleNavClick('learning')}>Utbildning</button></li>
          <li><button onClick={() => handleNavClick('about')}>Om mig</button></li>
          <li><button onClick={() => handleNavClick('projects')}>Projekt</button></li>
          <li><button onClick={() => handleNavClick('contact-footer')}>Kontakt</button></li>
        </ul>
      </nav>
      
      {/* Sidebar */}
      <div className="pixel-sidebar">
       
        <div className="scroll-track-left">
        
          <div 
            className="scroll-thumb-left" 
            style={{ height: `${scrollProgress}%` }}
          ></div>

          <div className="scroll-dots-container">
            {[
              { id: 'home', label: 'Start' },
              { id: 'learning', label: 'Utbildning' },
              { id: 'about', label: 'Om mig' },
              { id: 'projects', label: 'Projekt' },
              { id: 'contact-footer', label: 'Kontakt' }
            ].map((item) => (
             <div 
                 key={item.id}
                  className={`scroll-dot-wrapper ${activeSection === item.id ? 'active' : ''}`} 
                  onClick={() => scrollToSection(item.id)}
>
                 <div className="scroll-dot"></div>
                <span className="dot-label">{item.label}</span>
            </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky nav */}
      <header className="sticky-nav">
        <section id="header-nav-wrapper">
          <Header />
          

            <div id="darkmode-wrapper">
              <span>{darkMode ? "☀️" : "🌙"}</span>
              <label id="toggle">
                <input type="checkbox" checked={darkMode} onChange={handleToggle} id="darkmode-toggle" />
                <span id="slider"></span>
              </label>
            </div>
          
        </section>
      </header>

      {/* Main */}
      <main>
        
        <section id="home" className="page-section">
          <HomePage />
        </section>

        <section id="learning" className="page-section alt-bg">
          <Edu />
        </section>

        <section id="about" className="page-section">
          <About />
        </section>

        <section id="projects" className="page-section alt-bg">
          <h2 className="section-title">Mina Projekt</h2>
          
          <div id="html-css-project">
            <HTMLCSS />
          </div>
          
          <div className="divider" style={{margin: '4rem 0'}}></div>
          
          <div id="js-project">
            <JS />
          </div>

           <div className="divider" style={{margin: '4rem 0'}}></div>
          
          <div id="datalagring-project">
            <Datalagring />
          </div>



        </section>
      </main>

      <footer id="contact-footer">
        <Contact />
      </footer>

    </div>
  );
}

export default App;