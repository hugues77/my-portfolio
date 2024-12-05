import './outils.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faHtml5, faJsSquare,  faPhp, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons/faNode'
import { faDatabase} from '@fortawesome/free-solid-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons/faVuejs'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons/faGitAlt'

function Outils() {
  return (
    <div className='outils'>
      <div className="outils-content">
          <div className="first-group">
            <FontAwesomeIcon icon={faReact} className='icon' />
            <FontAwesomeIcon icon={faPhp} className='icon' />
            <FontAwesomeIcon icon={faHtml5} className='icon' />
            <FontAwesomeIcon icon={faCss3} className='icon' />
            <FontAwesomeIcon icon={faJsSquare} className='icon' />
            <FontAwesomeIcon icon={faNode} className='icon' />
            <FontAwesomeIcon icon={faDatabase} className='icon' />
            <FontAwesomeIcon icon={faSass} className='icon' />
            <FontAwesomeIcon icon={faGitAlt} className='icon' />
            <FontAwesomeIcon icon={faBootstrap} className='icon' />
            <FontAwesomeIcon icon={faVuejs} className='icon' />
          </div>
      </div>
    </div>
  )
}

export default Outils
