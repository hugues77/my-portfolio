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
            <a href="https://www.linkedin.com/in/hugues-eyong-ebun-939b41337/"><div className='icon'><FontAwesomeIcon icon={faLinkedinIn}  /></div></a>
            <a href="https://github.com/hugues77" target='_blank'><div className='icon'><FontAwesomeIcon icon={faGithub}  /></div></a>
            <a href="https://wa.me/+33651294692"><div className='icon'><FontAwesomeIcon icon={faWhatsapp}  /></div></a>

        </div>
      
    </div>
  )
}

export default Footer
