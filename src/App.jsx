import { useEffect, useState, useRef } from 'react'; 
import './index.scss';

import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import Edu from './components/Edu.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import IntegratedPixels from './components/IntegratedPixels.jsx';
import ProjectSlide from './components/ProjectSlide.jsx'; 
import projekt1 from './assets/projekt1.png'
import projekt2 from './assets/projekt2.png'
import projekt3 from './assets/projekt3.png'
import projekt4 from './assets/projekt4.png'
import projekt5 from './assets/projekt5.png'
import projekt6 from './assets/projekt6.png'
import projekt7 from './assets/projekt7.png'
import projekt8 from './assets/projekt8.png'
import projekt9 from './assets/projekt9.png'


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  // Ref project gallery
  const scrollRef = useRef(null);

// list of projects
  const myProjects = [
    {
      id: 1,
      title: "Silicon",
      course: "HTML & CSS",
      description: "I kursen HTML och CSS fick jag lära mig att bygga en webbsida utifrån en färdig design i Figma. Under kursens gång testade jag även på olika CSS-ramverk, såsom Tailwind och Bootstrap. Jag lärde mig också lite grundläggande JavaScript för att skapa interaktiva delar på webbsidan, så som en FAQ-accordion och en funktion för mörkt tema.",
      images: [projekt2, projekt3, projekt1], 
      githubUrl: "https://github.com/jeanettesamuelsson/SiliconV2"
    },
    {
      id: 2,
      title: "Stor Aid",
      course: "JavaScript Frontend",
      description: "I kursen JavaScript Frontend fick jag en gedigen introduktion till både grundläggande JavaScript men också React, vilket var fokuset under kursens gång. Jag fick bygga en webbsida utifrån en färdig design i Figma. Under kursens gång lärde jag mig att hantera formulär och göra API-anrop, både med ren JavaScript och med hjälp av olika npm-paket. Vi gick även igenom tillgänglighetsanpassning och hur man kan implementera riktlinjer enligt WCAG för att skapa inkluderande och tillgängliga webbsidor.",
      images: [projekt4, projekt5],
      githubUrl: "https://github.com/jeanettesamuelsson/StorAid"
    },
   
    {
      id: 3,
      title: "CManager",
      course: "C#",
      description: "I kursen C# låg mycket fokus på systemarkitektur och jag lärde mig bland annat att skapa en konsolapplikation i form av ett kundhanteringssystem. Systemet kunde lägga till användare i en lista och spara dem som en JSON-fil, samt söka och ta bort specifika användare. Vidare lärde jag mig om MVVM-mönstret och tillämpade detta i en grafisk WPF-applikation.",
      images: [projekt8, projekt9],
      githubUrl: "https://github.com/jeanettesamuelsson/CManager"
    },

     {
      id: 4,
      title: "EduSQRL & GolfSQRL",
      course: "Datalagring",
      description: "I kursen Datalagring var fokuset att bygga en applikation för kursadministration. Jag lärde mig att designa en relationsdatabas i Microsoft SQL Server, grundläggande SQL-syntax samt att koppla ihop detta med ett Minimal Web-API byggt i .NET med Entity Framework Core. Under kursens gång startade jag även upp ett sidoprojekt - GolfSQRL, som tekniskt sätt går hand i hand med EduSQRL. Här fokuserade jag på att bygga en lösning för ett verkligt behov, vilket lät mig experimentera mer fritt utanför kursens ramar.",
      images: [projekt7, projekt6],
      githubUrl: "https://github.com/jeanettesamuelsson/Datalagring-Jeanette-Samuelsson"
    },



  ];

  // Gallery function
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // Scroll logic 
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      const sections = ['home', 'learning', 'about', 'projects', 'contact-footer'];
      const scrollPos = window.scrollY + 300;

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <div id="main-container">
      <IntegratedPixels scrollProgress={scrollProgress} activeSection={activeSection} />

      {/* Hamburger & Nav */}
      <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span><span></span><span></span>
      </button>

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
          <div className="scroll-thumb-left" style={{ height: `${scrollProgress}%` }}></div>
          <div className="scroll-dots-container">
            {[
              { id: 'home', label: 'Start' },
              { id: 'learning', label: 'Utbildning' },
              { id: 'about', label: 'Om mig' },
              { id: 'projects', label: 'Projekt' },
              { id: 'contact-footer', label: 'Kontakt' }
            ].map((item) => (
              <div key={item.id} className={`scroll-dot-wrapper ${activeSection === item.id ? 'active' : ''}`} onClick={() => scrollToSection(item.id)}>
                <div className="scroll-dot"></div>
                <span className="dot-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

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

      <main>
        <section id="home" className="page-section"><HomePage /></section>
        <section id="learning" className="page-section alt-bg"><Edu /></section>
        <section id="about" className="page-section"><About /></section>

        {/* Project section  */}

        <section id="projects" className="page-section alt-bg">
          <h2 className="section-title">Mina Projekt</h2>
          
          <div className="gallery-wrapper">
          
          <div className="gallery-controls">
                <button className="nav-btn" onClick={() => scroll('left')} aria-label="Föregående">‹</button>
                <button className="nav-btn" onClick={() => scroll('right')} aria-label="Nästa">›</button>
                </div>

           
            
            <div className="images" ref={scrollRef}>
              {myProjects.map((project) => (
                <ProjectSlide key={project.id} project={project} />
              ))}
            </div>

           
          </div>
        </section>
      </main>

      <footer id="contact-footer"><Contact /></footer>
    </div>
  );
}

export default App;