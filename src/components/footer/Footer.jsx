import './Footer.scss'
import imgHugues from '../../assets/images/logo_hugues.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,  faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='footer'>
        
        <div className="user-info">
            <img src={imgHugues} alt="" />
            <span>© Hugues EYONG</span>

        </div>
        <div className="info-rx">
            <FontAwesomeIcon icon={faLinkedinIn} className='icon' />
            <FontAwesomeIcon icon={faGithub} className='icon' />
            <FontAwesomeIcon icon={faWhatsapp} className='icon' />

        </div>
      
    </div>
  )
}

export default Footer
