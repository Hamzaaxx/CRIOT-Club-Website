import React, { useState } from 'react';
import './Members.css';
import { Link } from 'react-router-dom';
import Alert from './alert';

const membersData = [
   {
    name: 'Bouchra BOUGA',
    role: 'Présidente',
    image: '/pics/pics/bouchra-bouga.png',
    bio: "Leader passionnée, Bouchra dirige notre club avec engagement et vision."
  },
  {
    name: 'Abdessamad MORAD',
    role: 'Vice-président',
    image: '/pics/pics/abdessamad-morad.png',
    bio: "Toujours prêt à soutenir l'équipe, il apporte rigueur et enthousiasme."
  },
  {
    name: 'Latifa MOUJAHID',
    role: "Cellule d'évènement",
    image: '/pics/pics/latifa-moujahid.png',
    bio: "Latifa est le moteur de nos événements les plus réussis."
  },
  {
    name: 'Aziza NASYF',
    role: "Cellule d'évènement",
    image: '/pics/pics/aziza.nasyf.png',
    bio: "Créative et organisée, Aziza rend chaque événement mémorable."
  },
  {
    name: 'Soufiane ARYBOU',
    role: 'Trésorier',
    image: '/pics/pics/soufiane-arybou.png',
    bio: "Soufiane gère les finances du club avec transparence et efficacité."
  },
  {
    name: 'Myriem BENHADDOU',
    role: 'Secrétaire centrale',
    image: '/pics/pics/myriem-benhaddou.png',
    bio: "Organisée et minutieuse, Myriem assure la bonne circulation des informations."
  },
  {
    name: 'EL HANSALI AYMAN',
    role: 'Responsable de matériel',
    image: '/pics/pics/ayman-elhansali.png',
    bio: "Ayman veille à ce que tout le matériel soit toujours prêt à l'emploi."
  },
  {
    name: 'Boutaina SOULTANA',
    role: 'Responsable de media',
    image: '/pics/pics/boutaina-soultana.png',
    bio: "Boutaina gère avec talent notre image sur les réseaux sociaux."
  },
  {
    name: 'Nouhaila KHACHTAOUI',
    role: 'Secrétaire générale',
    image: '/pics/pics/nouhaila-khachtaoui.png',
    bio: "Nouhaila assure la coordination générale du bureau avec brio."
  },
  {
    name: 'Hartal SANAA',
    role: 'Responsable de communication',
    image: '/pics/pics/sanaa-hartal.png',
    bio: "Sanaa est notre lien avec le monde extérieur."
  },
  {
    name: 'El Haouzi SALMA',
    role: 'Responsable de communication',
    image: '/pics/pics/salma-elhaouzi.png',
    bio: "Salma contribue activement à la communication du club."
  },
  {
    name: 'Walid RACHID',
    role: 'Responsable du matériel',
    image: '/pics/pics/walid-rachid.png',
    bio: "Walid veille au bon fonctionnement de notre matériel."
  },
  {
    name: 'Metahi IMAD',
    role: 'Cellule des évènements',
    image: '/pics/pics/imad-metahi.png',
    bio: "Imad participe activement à l'organisation des événements."
  },
  {
    name: 'Aymen ABID',
    role: 'Cellule des événements',
    image: '/pics/pics/aymen-abid.png',
    bio: "Aymen apporte dynamisme et idées nouvelles à nos projets."
  },
  {
    name: 'Mounir BOUGUI',
    role: 'Designer',
    image: '/pics/pics/mounir-bougui.png',
    bio: "Mounir donne vie à nos idées à travers ses designs."
  },
  {
    name: 'Nait ILYAS',
    role: 'Responsable RSE',
    image: '/pics/pics/ilyas-nait.png',
    bio: "Ilyas est en charge de nos engagements en responsabilité sociale."
  },
  {
    name: 'Chtaini YASSINE',
    role: 'Designer',
    image: '/pics/pics/yassine-chtaini.png',
    bio: "Yassine sublime notre communication avec ses créations visuelles."
  }
];

function Members({ setPage }) {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div lang="fr">
      <nav>
        <Link to="/Indx">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/members">MEMBERS</Link>
        <Link to="/activities">ACTIVITIES</Link>
        <Link to="/join">JOIN US</Link>
      </nav>

      <div className="members-lead">
        <img src="/pics/pics/logooo.png" className="members-logo" alt="Logo" />
        <h1>Les membres de Bureau</h1>
      </div>

      <p className="members-intro">
        Nous sommes fiers de vous présenter les membres de notre bureau...
      </p>

      <div className="members-members-container">
        {membersData.map((member, idx) => (
          <div key={idx} className="members-member-card" onClick={() => setSelectedMember(member)}>
            <div className="members-member-photo">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="members-member-name">{member.name}</div>
            <div className="members-member-role">{member.role}</div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="member-popup-card">
          <div className="popup-content">
            <button className="close-button" onClick={() => setSelectedMember(null)}>×</button>
            <img src={selectedMember.image} alt={selectedMember.name} className="popup-photo" />
            <h2>{selectedMember.name}</h2>
            <h4>{selectedMember.role}</h4>
            <p>{selectedMember.description}</p>
          </div>
        </div>
      )}

      <footer>
        <p>&copy; 2025 CRIoT FSBM</p>
        <p>
          Connect with us on{' '}
          <a href="https://www.linkedin.com/in/club-robotique-et-iot-fsbm-0b692623a"onClick={Alert}>LinkedIn</a> |{' '}
          <a href="https://www.instagram.com/criot.fsbm"onClick={Alert}>Instagram</a> |{' '}
          <a href="https://www.facebook.com/share/19eN3zqAho/"onClick={Alert}>Facebook</a>
        </p>
      </footer>
    </div>
  );
}

export default Members;