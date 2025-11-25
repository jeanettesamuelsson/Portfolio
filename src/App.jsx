import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './index.scss'
import HomePage from './components/HomePage.jsx';
import Contact from './components/Contact.jsx';
import Header from './components/Header.jsx';
import Edu from './components/Edu.jsx';
import HTMLCSS from './components/HTMLCSS.jsx';
import JS from './components/JS.jsx';
import About from './components/About.jsx';

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };


  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  }, [darkMode]);

  return (

    <>

      <div id="main-container">
        <BrowserRouter>

          <header>
            <section id="header">
              <Header />
              <nav id="nav-links">
                <ul>
                  <li><NavLink to="/">Start</NavLink></li>
                  <li> <NavLink to="/edu">Utbildning/Projekt</NavLink></li>
                  <li> <NavLink to="/about">Om mig</NavLink></li>
                  {/* <li> <NavLink to="/projects">Projekt</NavLink></li> */}
                </ul>

                <div id="darkmode-wrapper">
                  <span>{darkMode ? "☀️" : "🌙"}</span>
                  <label id="toggle">
                    <input type="checkbox" checked={darkMode} onChange={handleToggle} id="darkmode-toggle" />
                    <span id="slider"></span>
                  </label>
                </div>
              </nav>
            </section>

          </header>
          <hr className="divider"></hr>
          <main>
            <section id="main">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/edu" element={<Edu />} />
                <Route path="/HTMLCSS" element={<HTMLCSS />} />
                <Route path="/JS" element={<JS />} />
                <Route path="/about" element={<About />} />
              </Routes>

              

            </section>

          </main>

        </BrowserRouter>

        <Contact />
      </div>

    </>
  )
}

export default App