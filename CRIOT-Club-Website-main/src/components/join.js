import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Join.css';

function Join({ setPage }) {
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isPending) {
      const timer = setTimeout(() => {
        navigate('/thank');
      }, 5000);

      return () => clearTimeout(timer); 
    }
  }, [isPending, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
  };

  return (
    <div className='body'>
      <header className="header">
        <h1>Rejoignez notre communauté</h1>
        <p>
          Nous sommes ravis d'accueillir des esprits passionnés dans notre famille de recherche IoT.
          Venez faire la différence avec nous !
        </p>
      </header>

      <div className="mains">
        <div className="sinfo">
          <h2>Pourquoi nous rejoindre ?</h2>
          <ul>
            <li>Explorez les dernières avancées en recherche IoT.</li>
            <li>Connectez-vous avec des professionnels de renom dans le domaine.</li>
            <li>Participez à des ateliers et conférences exclusifs.</li>
            <li>Engagez-vous dans des projets qui vous stimulent et vous inspirent.</li>
            <li>Ouvrez des portes à la croissance professionnelle et aux opportunités.</li>
          </ul>
        </div>

        <div className="sjoin">
          <h2>Contactez-nous</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nom complet" required />
            <input type="email" name="email" placeholder="Adresse e-mail" required />
            <select name="major" required defaultValue="">
              <option value="" disabled>Sélectionnez votre filière</option>
              <option value="MIP">MIP</option>
              <option value="PC">PC</option>
              <option value="BCG">BCG</option>
              <option value="IA">IA</option>
            </select>
            <select name="semesters" required defaultValue="">
              <option value="" disabled>Sélectionnez votre semestre</option>
              <option value="S1">S1</option>
              <option value="S2">S2</option>
              <option value="S3">S3</option>
              <option value="S4">S4</option>
              <option value="S5">S5</option>
              <option value="S6">S6</option>
            </select>
            <textarea
              name="message"
              rows="5"
              placeholder="Pourquoi vous souhaitez nous rejoindre !"
              required
            ></textarea>
            <input
              type="submit"
              id="buttonnn"
              className="submit"
              value={isPending ? "Pending..." : "Soumettre la candidature"}
              disabled={isPending}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Join;