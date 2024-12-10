import './Header.scss';
import  { Cursor, useTypewriter } from 'react-simple-typewriter'
import cvHugues from '../../assets/pdf/cv_hugues_eyong_dev.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [text] = useTypewriter({
    words: ['Fullstack','PHP'],
    loop:0,
    typeSpeed:120
  })

  return (
    <div className="header">
      <div className="header-content">
        <div className="main">
          <h1>Bonjour !  Je suis Hugues EYONG</h1>
          <h2>Developpeur web <span>{text} <Cursor/></span></h2>
          <p>Passionné du développement<span> web et ses technologies</span>. je suis en reconversion <span>professionnelle et à la recherche des nouvelles</span> opportunités pour <span> concilier mes acquis en frontend et backend </span> ayant déjà réaliser <span>des projets concrets en PHP, React, Javascript </span> et Nodejs(Express).</p>
        
          <div className="btn-group">
            <a className='voir' href="https://github.com/hugues77" target='blank'><FontAwesomeIcon icon={faGithub} className='icon' /> Voir mon github </a>
            <a className='download' href={cvHugues} download= 'Cv_hugues_EYONG'><FontAwesomeIcon icon={faDownload} className='icon' />Télécharger mon CV </a>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Header
