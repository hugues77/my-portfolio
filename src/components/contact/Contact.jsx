import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import './Contact.scss'
import { faEnvelope, faGlobe, faHome, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("En cours d'envoie...");
      const formData = new FormData(event.target);

      formData.append("access_key", "75cbe45b-e9c4-48fe-beab-9cdcc2070eca");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message envoyé avec succès !");
        event.target.reset();
      } else {
        // console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
      <div className="contact-content">
        <div className="column contact-left">
            <div className='text-head'>
              N&#39;hésitez pas de m&#39;ecrire via le formulaire de contact  ou me téléphoner par le biais de mon numéro direct, je reste disponible pour toutes demandes, questions ou suggestions y égard de mon portfolio; car je désire vivement monter en compétences et de vous offrir une expérience exceptionnel pour des prochaines opportunités.
              </div>
            <p><FontAwesomeIcon icon={faHome} className='icon'/><a href="https://maps.app.goo.gl/Hjou9cXaoesVTtDP6" target='_blank'> 15 rue des framboises, 57050 Metz </a></p>
            <p><FontAwesomeIcon icon={faGlobe} className='icon'/><a href="" > France </a></p>
            <p><FontAwesomeIcon icon={faPhone} className='icon'/><a href="tel:+33651294692">+33 6 51 29 46 92 </a></p>
            <p><FontAwesomeIcon icon={faEnvelope} className='icon'/><a href="mailto:hugues777@outlook.com">hugues777@outlook.com </a></p>
            {/* <p><FontAwesomeIcon icon={faCar} className='icon'/>Permis B + voiture</p> */}
        </div>
        <div className="column contact-right">
            <form onSubmit={onSubmit}>
                <div className="field">
                    <input type="email" name="email" id="" required />
                    <label htmlFor="email">Adresse mail</label>
                </div>
                <div className="field">
                    <input type="text" name="name" id="" required />
                    <label htmlFor="name">Nom & Prenom</label>
                </div>
                <div className="field"> 
                    <span>Message</span>
                    <textarea name="message" id=""></textarea>
                </div>
                <div className="field">
                  <button type='submit'><FontAwesomeIcon icon={faPaperPlane} className='icon' />Envoyer Maintenant </button>
                  {/* <span className='btn'>Message envoyé avec succès !</span> */}
                  {result && <span className='btn'>{result} !</span>}
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
