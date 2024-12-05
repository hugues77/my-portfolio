import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Contact.scss'
import { faCar, faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className='contact'>
      <div className="contact-content">
        <div className="column contact-left">
            <p><FontAwesomeIcon icon={faHome} className='icon'/> 15 rue des framboises, 57050 Metz</p>
            <p><FontAwesomeIcon icon={faPhone} className='icon'/>+33 6 51 29 46 92</p>
            <p><FontAwesomeIcon icon={faEnvelope} className='icon'/>hugues777@outlook.com</p>
            <p><FontAwesomeIcon icon={faCar} className='icon'/>Permis B + voiture</p>
        </div>
        <div className="column contact-right">
            <form action="">
                <div className="field">
                    <label htmlFor="email">Adresse mail</label>
                    <input type="email" name="" id="" />
                </div>
                <div className="field">
                    <label htmlFor="name">Nom & Prenom</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="" id=""></textarea>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
