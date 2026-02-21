import React, { useState } from 'react';

function Moyenne() {
  const [etudiants, setEtudiants] = useState([
    { nom: 'sara', note: 14 },
    { nom: 'yassine', note: 12 },
    { nom: 'imane', note: 16 }
  ]);

  const [moyenne, setMoyenne] = useState(0);

  const moyenn = () => {
    let total = 0;
    for (let i = 0; i < etudiants.length; i++) {
      total += etudiants[i].note;
    }
    const result = total / etudiants.length;
    setMoyenne(result.toFixed(2)); // Pour arrondir à 2 chiffres
  };

  return (
    <>
      <h1 style={{color:'red'}}>Liste des étudiants :</h1>
      <ul >
        {etudiants.map((etudiant, index) => (
          <li style={{color:'pink'}} key={index}>
            {etudiant.nom} --- {etudiant.note}/20
          </li>
        ))}
      </ul> {/*commeeeent */} 

      <button onClick={moyenn}>Calculer la moyenne</button>
      <h2>Moyenne : {moyenne}/20</h2>
    </>
  );
}

export default Moyenne;
