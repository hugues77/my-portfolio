import './Footer.scss'
import imgHugues from '../../assets/images/logo_hugues.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,  faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='footer'>
        
        <div className="user-info">
            <img src={imgHugues} alt="" />
            <span>© Hugues EYONG, Tous droits réservés.</span>

        </div>
        <div className="info-rx">
            <div className='icon'><FontAwesomeIcon icon={faLinkedinIn}  /></div>
            <div className='icon'><FontAwesomeIcon icon={faGithub}  /></div>
            <div className='icon'><FontAwesomeIcon icon={faWhatsapp}  /></div>

        </div>
      
    </div>
  )
}

export default Footer
