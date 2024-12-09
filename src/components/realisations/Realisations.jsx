import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '../partials/card/Card'
import Categorie from '../partials/categorie/Categorie'
import './Realisations.scss'
import { faEye } from '@fortawesome/free-regular-svg-icons'

function Realisations() {
  return (
    <div>
        <Categorie />
        <Card />
        <div className="card-btn"><FontAwesomeIcon icon={faEye} className='icon' /> Voir plus</div>

    </div> 
  )
}

export default Realisations
