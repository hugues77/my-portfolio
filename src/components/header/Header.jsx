import './Header.scss';
import  { Cursor, useTypewriter } from 'react-simple-typewriter'
import cvHugues from '../../assets/pdf/cv_hugues_eyong_dev.pdf'

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
            <button className='voir'><a href="https://github.com/hugues77" target='blank'>Voir mon github </a></button>
            <button className='download' ><a href={cvHugues} download= 'Cv_hugues_EYONG'>Télécharger mon CV </a></button>
        </div>
      </div>
    </div>
  )
}

export default Header
