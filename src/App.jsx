import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './index.scss'
import HomePage from './components/HomePage.jsx';
import Contact from './components/Contact.jsx';
import Header from './components/Header.jsx';
import Edu from './components/Edu.jsx';

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
              <li> <NavLink to="/edu">Min utbildning</NavLink></li>
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