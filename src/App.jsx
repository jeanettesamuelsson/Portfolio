import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
              </nav>

            </section>

          </header>
          <hr className="divider"></hr>



          <main>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/edu" element={<Edu />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/HTMLCSS" element={<HTMLCSS />} />
              <Route path="/JS" element={<JS />} />
              <Route path="/about" element={<About />} />

            </Routes>

          </main>

          <footer>

            <Contact />

          </footer>


        </BrowserRouter>
      </div>

    </>
  )
}

export default App