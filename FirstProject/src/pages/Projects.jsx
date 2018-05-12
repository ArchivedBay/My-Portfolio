import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Footer from '../components/Footer.jsx';
import './Projects.css';

class Projects extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Hero title="Projects" subtitle="The projects page of this site"/>
                <div className="container contentContainer">
                    <h2>Welcome</h2>
                    <p>
                        Lorem ipsum dolor sit amet, in utroque instructior vis, quis 
                        nonumy interesset sit ea. Id his soleat putent vulputate, mei 
                        sumo semper eu. Graeci nonumes in eum. Probo malorum moderatius eu 
                        has, ad populo commune consequat nec. Nam oratio appareat 
                        voluptatum ei.
                    </p>
                    <p>
                        Delenit officiis vel et. Velit gloriatur id sea. In probo oratio 
                        nusquam vix, no tota errem suscipiantur duo. Albucius pertinax vel at, 
                        reque velit ei est. Eu eam rebum utamur, id qui nostro antiopam 
                        conclusionemque.
                    </p>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Projects;