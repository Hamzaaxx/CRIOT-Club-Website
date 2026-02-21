import React from 'react';
import { Link } from 'react-router-dom';
import './Indx.css'
import Alert from './alert';

function Indx({ setPage }) {
return (
<> 
<div className='indx.body'>
  <div className='indx-nav-logo'>



  <nav className='indx.nav'>
  <Link to="/Indx">HOME</Link>
  <Link to="/about">ABOUT</Link>
  <Link to="/members">MEMBERS</Link>
  <Link to="/activities">ACTIVITIES</Link>
  <Link to="/join">JOIN US</Link>
    <Link to="/moyenne">moyenne</Link>

  </nav></div>

  <hr className='indx-hr'/>

  <header className="indx-header">
    <div className="indx-div1">
      <img src="/pics/pics/set.png" className="indx-set" alt="Club Logo" />
      <h1 className='indx-h1'>Bienvenue à CRiot FSBM</h1>
      <img src="/pics/pics/set.png" className="indx-set" alt="Club Logo" />
    </div>
  </header>

  <hr className='indx-hr'/>

  <div>
    <div className="indx-div1">
      <div className="indx-div2">
        <p className="indx-sp">| Robotics Club</p>
        <h1 className='indx-div-h1'>
          <span>Le club du Robotiques</span> est destiné aux étudiants passionnés par la technologie, la construction et la programmation de robots.
          <span> Join us</span> pour innover, apprendre et créer des projets de pointe qui inspirent !
        </h1>
        <p className="indx-hp">
          À CRiot FSBM, notre mission est d'autonomiser les étudiants grâce à une expérience pratique en robotique et en IoT, en favorisant la créativité et le travail d'équipe. Nous croyons en la possibilité de repousser les limites et d'explorer de nouvelles perspectives dans le domaine de la robotique et de l'automatisation.
        </p>
      </div>
      <img src="/pics/pics/robot.png" width="400px" className="indx-img" alt="Robot Image" />
    </div>
  </div>

  <div className="indx-div3">
    <h2 className='indx-div3-h2'>CRiot FSBM s'engage à faire progresser les connaissances en robotique et en IoT grâce à un apprentissage pratique et à l'innovation.</h2>
    <p className="indx-p">Notre club se concentre sur la conception et la programmation de robots autonomes tout en participant à des compétitions nationales et internationales. Nous visons à connecter les étudiants aux dernières avancées en robotique et en Internet des objets (IoT).</p>
  </div>

  <div>
    <div className="indx-div1">
      <img src="/pics/pics/hand3.png" width="500px" alt="Team Collaboration" style={{marginLeft:30}}/>
      <div className="indx-div2">
        <p className="indx-sp" id="indx-sp">| Ce que nous offrons</p>
        <h3 className='indx-ol-h3'>Pourquoi nous rejoindre ?</h3>
        <ol >
          <li >Expérience pratique en robotique et en IoT.</li>
          <li>Participation à des compétitions passionnantes.</li>
          <li>Opportunités de réseautage avec des professionnels.</li>
          <li>Accès à des ateliers et des séminaires.</li>
        </ol>
      </div>
    </div>
  </div>

  <h1 className="indx-sp" id="indx-h1">| Découvrez-nous</h1>
  <div className="indx-div1">
    <img src="/pics/pics/a.png" alt="Project A" width="200px" className="indx-content" />
    <img src="/pics/pics/m.png" alt="Project B" width="200px" className="indx-content" />
    <img src="/pics/pics/p1.png" alt="Project C" className="indx-content" height="150px" />
    <img src="/pics/pics/jup.png" alt="Project D" width="200px" className="indx-content" />
  </div>

  <div className="indx-div1">
    <div className="indx-div2">
      <h4 className='art-h4'>À Propos de Nous</h4>
      <article className='indx-article'>Nous sommes une équipe d'étudiants innovants à FSBM, dédiés à repousser les limites de la robotique et de l'IoT. Notre club offre une plateforme d'apprentissage collaboratif et de développement technique.</article>
    </div>

    <div className="indx-div2">
      <h4 className='art-h4'>Membres</h4>
      <article className='indx-article'>Nos membres viennent de divers horizons académiques, unis par une passion commune pour la technologie et la résolution de problèmes. Tout le monde est bienvenu, quel que soit le niveau d'expérience !</article>
    </div>

    <div className="indx-div2">
      <h4 className='art-h4'>Projets</h4>
      <article className='indx-article'>Nos projets vont des véhicules autonomes aux systèmes d'automatisation domestique basés sur l'IoT. Découvrez nos dernières innovations et réalisations sur la page des projets.</article>
    </div>

    <div className="indx-div2">
      <h4 className='art-h4'>Rejoignez-nous</h4>
      <article className='indx-article'>Prêt à construire, apprendre et participer ? Devenez membre de CRiot FSBM dès aujourd'hui et faites le premier pas vers votre aventure en robotique !</article>
    </div>
  </div>

  <footer className="indx-footer">
    <p>&copy; 2025 CRIoT FSBM</p>
    <p>
      Connectez-vous avec nous sur{" "}
      <a href="https://www.linkedin.com/in/club-robotique-et-iot-fsbm-0b692623a" onClick={Alert}>LinkedIn</a> |
      <a href="https://www.instagram.com/criot.fsbm" onClick={Alert}> Instagram</a> |
      <a href="https://www.facebook.com/share/19eN3zqAho/" onClick={Alert}> Facebook</a>
    </p>
  </footer></div>
</>


);
}

export default Indx;