import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Contact.scss'
import { faEnvelope, faGlobe, faHome, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className='contact'>
      <div className="contact-content">
        <div className="column contact-left">
            <p><FontAwesomeIcon icon={faHome} className='icon'/><a href="https://maps.app.goo.gl/Hjou9cXaoesVTtDP6" target='_blank'> 15 rue des framboises, 57050 Metz </a></p>
            <p><FontAwesomeIcon icon={faGlobe} className='icon'/><a href="" > France </a></p>
            <p><FontAwesomeIcon icon={faPhone} className='icon'/><a href="tel:+33651294692">+33 6 51 29 46 92 </a></p>
            <p><FontAwesomeIcon icon={faEnvelope} className='icon'/><a href="mailto:hugues777@outlook.com">hugues777@outlook.com </a></p>
            {/* <p><FontAwesomeIcon icon={faCar} className='icon'/>Permis B + voiture</p> */}
        </div>
        <div className="column contact-right">
            <form action="">
                <div className="field">
                    <input type="email" name="" id="" required />
                    <label htmlFor="email">Adresse mail</label>
                </div>
                <div className="field">
                    <input type="text" name="" id="" required />
                    <label htmlFor="name">Nom & Prenom</label>
                </div>
                <div className="field"> 
                    <span>Message</span>
                    <textarea name="" id=""></textarea>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
