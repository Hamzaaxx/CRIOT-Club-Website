import React from 'react';
import './Thank.css';
import {Link} from 'react-router-dom';

function Thank(){
    return(
        <>
        <div className="tnx">
        <h1>Merci!</h1>
        <p>Votre candidature a été soumise avec succès. Nous vous contacterons bientôt !</p>
        <Link to="/Indx" className="buttom">Retour à l'accueil</Link>
    </div>
        </>
    );
}export default Thank;