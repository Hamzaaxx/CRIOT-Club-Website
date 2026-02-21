import React from 'react';
import './Activities.css';
import { Link } from 'react-router-dom';
import Alert from './alert';

function Activities({ setPage }) {
  return (
    <>
      <header className="activities-header">
        <nav className="activities-nav">
          <Link to="/Indx" className="activities-link">HOME</Link>
          <Link to="/about" className="activities-link">ABOUT</Link>
          <Link to="/members" className="activities-link">MEMBERS</Link>
          <Link to="/activities" className="activities-link">ACTIVITIES</Link>
          <Link to="/join" className="activities-link">JOIN US</Link>
        </nav>

        <div className="activities-lead">
          <img src="/pics/pics/logooo.png" alt="Logo" className="activities-logo" />
          <h1 className="activities-title">Nos Activités</h1>
        </div>
      </header>

      <main className="activities-main">
        <section className="activities-titre1">
          <h1 className="activities-h1">Be Part Of Our Club's Activities!</h1>
        </section>

        <div className="activities-div1">
          <div className="activities-div2">
            <h2 className="activities-h2"><span className="activities-span">Ateliers de découverte :</span> <br /> Des ateliers ludiques et interactifs pour initier les débutants aux bases de la robotique, de la programmation et de l'électronique.</h2>
            <h2 className="activities-h2"><span className="activities-span">Projets collaboratifs :</span> <br /> Encourager les étudiants à travailler ensemble sur des projets concrets, renforçant ainsi l'esprit d'équipe et les compétences en gestion de projet.</h2>
            <h2 className="activities-h2"><span className="activities-span">Formations spécialisées :</span> <br /> Offrir des formations structurées aux étudiants pour acquérir une compréhension approfondie et progressive des technologies IoT et robotiques.</h2>
            <h2 className="activities-h2"><span className="activities-span">Visites d’entreprises :</span> <br /> Des visites de sites industriels et de centres de recherche pour découvrir les applications concrètes de la robotique.</h2>
          </div>
          <div className="activities-images">
            <img src="/pics/pics/p1.png" width="400" alt="Activity 1" className="activities-img" />
            <img src="/pics/pics/p2.png" width="400" alt="Activity 2" className="activities-img" />
          </div>
        </div>

        <div>
          <h1 id="activities-ea" className="activities-h1">Explore Upcoming & Past Activities & Events!</h1>
        </div>

        <input type="checkbox" className="activities-rr" id="activities-toggle" />

        <div className="activities-good">
          {/* Sample Card */}
          <a href="#" className="activities-card-link">
            <section className="activities-box">
              <img src="/pics/pictures/events/formation2.jpg" alt="Event" className="activities-card-img" />
              <div className="activities-ticket"><span className="activities-span">Évènement 1</span></div>
              <h2 className="activities-card-title">InnovBots : Explorez l'Avenir de la Robotique</h2>
            </section>
          </a>
          <a href="#" className="activities-card-link">
            <section className="activities-box">
              <img src="/pics/pictures/events/formation3.jpg" alt="Event" className="activities-card-img" />
              <div className="activities-ticket"><span className="activities-span">Évènement 1</span></div>
              <h2 className="activities-card-title">InnovBots : Explorez l'Avenir de la Robotique</h2>
            </section>
          </a>
          <a href="#" className="activities-card-link">
            <section className="activities-box">
              <img src="/pics/pictures/events/evenement3.jpg" alt="Event" className="activities-card-img" />
              <div className="activities-ticket"><span className="activities-span">Évènement 1</span></div>
              <h2 className="activities-card-title">InnovBots : Explorez l'Avenir de la Robotique</h2>
            </section>
          </a>
        </div>
      </main>

      <footer className="activities-footer">
        <p>&copy; 2024 CRIoT FSBM</p>
        <p>
          Follow us on
          <a href="https://www.linkedin.com/in/club-robotique-et-iot-fsbm-0b692623a" onClick={Alert}> LinkedIn</a> |
          <a href="https://www.instagram.com/criot.fsbm" onClick={Alert}> Instagram</a> |
          <a href="https://www.facebook.com/share/19eN3zqAho/" onClick={Alert}> Facebook</a>
        </p>
      </footer>
    </>
  );
}

export default Activities;