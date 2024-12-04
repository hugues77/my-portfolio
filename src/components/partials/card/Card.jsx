import './Card.scss';
import imageCard from '../../../assets/card/joe.jpg'
import imageCardHandy from '../../../assets/card/handy.png'

function Card() {
  return (
    <div>
        <div className='card'>
            <div className="card-content">
                <div className="card-header">
                    <img src={imageCard} alt="image application réalisée" />
                </div>
                <div className="card-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sit animi id repellendus. Voluptatibus dolorem deleniti sit, totam ad adipisci sequi laudantium incidunt tempore dolores ipsa nemo quod architecto asperiores!</p>
                    <div className="categ">SEO</div>
                </div>
            </div>
            <div className="card-content">
                <div className="card-header">
                    <img src={imageCardHandy} alt="image application réalisée" />
                </div>
                <div className="card-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sit animi id repellendus. Voluptatibus dolorem deleniti sit, totam ad adipisci sequi laudantium incidunt tempore dolores ipsa nemo quod architecto asperiores!</p>
                    <div className="categ">SEO</div>
                </div>
            </div>
            <div className="card-content">
                <div className="card-header">
                    <img src={imageCard} alt="image application réalisée" />
                </div>
                <div className="card-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sit animi id repellendus. Voluptatibus dolorem deleniti sit, totam ad adipisci sequi laudantium incidunt tempore dolores ipsa nemo quod architecto asperiores!</p>
                    <div className="categ">SEO</div>
                </div>
            </div>
        
        </div>
        <div className="card-btn">Voir plus</div>
    </div>
    
  )
}

export default Card
