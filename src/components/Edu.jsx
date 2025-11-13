import React from 'react'
import { Link } from 'react-router-dom';


function Edu() {

    return (

        <>
            <section id="learning">
                <h2>Vad jag lär mig </h2>

                <div id="courses">

                    <Link to="/HTMLCSS"><div className="course complete"> HTML & CSS </div></Link>
                    <Link to="/JS"><div className="course complete"> Javascript Frontend </div></Link>
                    <div className="course">C#</div>
                    <div className="course">Datalagring</div>
                    <div className="course">ASP.NET</div>
                    <div className="course">Molntjänster och distribuerade system</div>
                    <div className="course">CMS</div>
                    <div className="course">Projekt</div>
                    <div className="course">LIA</div>
                    <div className="course">Examensarbete</div>
                </div>

                <a href="https://ecutbildning.se/utbildningar/webbutvecklare-inom-net/#om-utbildningen" target="_blank"><h2>Läs mer om programmet Webbutvecklare inom .NET</h2></a>

            </section>

           

            <hr className="divider"></hr>

        </>

    )
}


export default Edu