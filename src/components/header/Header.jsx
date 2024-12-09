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
        <h1>Bonjour !  Je suis Hugues EYONG</h1>
        <h2>Developpeur web <span>{text} <Cursor/></span></h2>
        <p>Passionné du développement web et ses technologies. je suis en reconversion professionnelle et à la recherche des nouvelles opportunités pour concilier mes acquis en frontend et backend ayant déjà réaliser des projets concrets en PHP, React, Javascript et Nodejs(Express).</p>
        <div className="btn-group">
           <a className='voir' href="https://github.com/hugues77" target='blank'><FontAwesomeIcon icon={faGithub} className='icon' /> Voir mon github </a>
           <a className='download' href={cvHugues} download= 'Cv_hugues_EYONG'><FontAwesomeIcon icon={faDownload} className='icon' />Télécharger mon CV </a>
        </div>
      </div> 
    </div>
  )
}

export default Header
