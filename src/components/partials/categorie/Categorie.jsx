import './Categorie.scss'
import dataCateg from '../../../data/Categorie.json'

function Categorie() {
  return (
    <div className='btn-categorie'>
        {
            dataCateg.map((cat) =>(
                <div key={cat.id}>
                    <button>{cat.title} </button>
                </div>
            ))
        }
      
    </div>
  )
}

export default Categorie
