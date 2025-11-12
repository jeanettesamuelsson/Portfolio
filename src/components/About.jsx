import React from 'react'
import about from '../assets/about.png'

function About() {
    return (
        <section id="about">

            <p>Mitt namn är Jeanette Samuelsson, jag är 31 år gammal och bor i Uddevalla tillsammans med min familj. Jag är tidigare biomedicinsk analytiker och har arbetat inom yrket sedan jag blev klar med utbildningen 2016. Jag har då arbetat på NÄL i Trollhättan, på Klinisk kemi och Klinisk patologi. </p>

            <div id="about-wrapper">

                <div>

            <p> Under vårterminen 2024 tog jag tjänstledigt och började studera kurser inom IT och programmering på egen hand. Jag läste då webbutveckling, objektorienterad programmering i Java, introduktion till Linux, cybersäkerhet samt dataanalys med R. Under den tiden upptäckte jag att det är systemutveckling jag vill ägna mig åt. Jag tog en paus i studierna och var föräldraledig i ett år, under den tiden läste jag lite kurser i webbutveckling i den mån jag hade tid. När det började bli dags att ta upp studierna igen bestämde jag mig för att läsa en YH-utbildning istället, eftersom praktiken man får under en YH är så värdefull. Jag påbörjade programmet Webbutveckling inom .NET hösten 2025 och är väldigt nöjd med mitt val!</p>

            
                <p>  För övrigt är jag en väldigt analyserande person, grottar gärna ner mig i ämnen och är ständigt på jakt efter nya, intressanta saker att lära mig. Jag skulle säga att jag är en problemlösare och tar mig gärna an utmaningar.
                    På min fritid umgås jag mycket med min familj, tycker om styrketräning och att vara ute i naturen.  </p>

                <p>   Hoppas vi hörs!   </p> </div>

                <img id="about-img" src={about} alt="" />

            </div>

            <hr className="divider"></hr>


        </section>
    )
}

export default About