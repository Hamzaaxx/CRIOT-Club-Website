import React from 'react';
import styles from './About.css'; 
import { Link } from 'react-router-dom';
import Alert from './alert';

function About({ setPage }) {
  return (
    <>
      <header className="about-header">
        <nav className="about-nav">
          <Link to="/Indx">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/members">MEMBERS</Link>
          <Link to="/activities">ACTIVITIES</Link>
          <Link to="/join">JOIN US</Link>
        </nav>

        <div className="about-lead">
          <img src="/pics/pics/logooo.png" alt="logo de Criot" />
          <h1 className="about-title">À propos de nous</h1>
        </div>
      </header>

      <section id="about-us">
        <div className="about-content">
          <div className="about-text-section">
            <center>
              <p data-aos="fade-up">
                Fondée en <strong>2021</strong> au sein du département de physique par le Professeur Mohamed Talea, responsable du laboratoire TI, notre communauté est née de la passion d’un groupe d’étudiants pour la technologie. Nous nous consacrons à rassembler les esprits curieux autour de la robotique et de l’Internet des Objets (IoT).
              </p>
              <p data-aos="fade-up" data-aos-delay="200">
                Notre mission est de créer une communauté dédiée à l’innovation technologique, réunissant des étudiants passionnés par la robotique avancée et l’intelligence artificielle, d’inspirer, d’innover et de développer des compétences techniques grâce à des ateliers pratiques, des projets collaboratifs et des compétitions, tout en préparant nos membres à relever les défis des industries technologiques en plein essor.
              </p>
            </center>
          </div>

          <div className="about-cards-section">
            <div className="about-card" data-aos="flip-left">
              <i className="fas fa-brain"></i>
              <h3>Intelligence Artificielle</h3>
              <p>Nos robots apprennent et s'adaptent pour répondre aux besoins uniques de chaque utilisateur.</p>
            </div>
            <div className="about-card" data-aos="flip-right" data-aos-delay="200">
              <i className="fas fa-tools"></i>
              <h3>Ingénierie de pointe</h3>
              <p>Chaque détail est conçu avec précision pour garantir des performances exceptionnelles.</p>
            </div>
            <div className="about-card" data-aos="flip-left" data-aos-delay="400">
              <i className="fas fa-leaf"></i>
              <h3>Durabilité</h3>
              <p>Nous créons des solutions écologiques qui respectent la planète tout en innovant.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <p>&copy; 2025 CRIoT FSBM</p>
        <p>
          Follow us on{" "}
          <a href="https://www.linkedin.com/in/club-robotique-et-iot-fsbm-0b692623a"onClick={Alert}>LinkedIn</a> |
          <a href="https://www.instagram.com/criot.fsbm"onClick={Alert}> Instagram</a> |
          <a href="https://www.facebook.com/share/19eN3zqAho/"onClick={Alert}> Facebook</a>
        </p>
      </footer>
    </>
  );
}

export default About;