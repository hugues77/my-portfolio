import './Card.scss';
// import cardNina from '../../../assets/card/nina_projet_4.jpg'
import cardKasa from '../../../assets/card/kasa_projet_5.jpg'
import cardBooki from '../../../assets/card/booki_projet_2.jpg'
import cardSecours from '../../../assets/card/secours_projet_php.jpg'
// import cardVgrimoire from '../../../assets/card/vGrimoire_projet_6.jpg'
// import cardPortfolio from '../../../assets/card/portfolio_projet_8.jpg'
// import cardSophie from '../../../assets/card/sophie_projet_3.jpg'

function Card() {
  return (
    <div>
        <div className='card'>
            <div className="card-content">
                <div className="card-header">
                    <img src={cardBooki} alt="image application réalisée" />
                </div>
                <div className="card-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sit animi id repellendus. Voluptatibus dolorem deleniti sit, totam ad adipisci sequi laudantium incidunt tempore dolores ipsa nemo quod architecto asperiores!</p>
                    <div className="categ">SEO</div>
                </div>
            </div>
            <div className="card-content">
                <div className="card-header">
                    <img src={cardSecours} alt="image application réalisée" />
                </div>
                <div className="card-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sit animi id repellendus. Voluptatibus dolorem deleniti sit, totam ad adipisci sequi laudantium incidunt tempore dolores ipsa nemo quod architecto asperiores!</p>
                    <div className="categ">SEO</div>
                </div>
            </div>
            <div className="card-content">
                <div className="card-header">
                    <img src={cardKasa} alt="image application réalisée" />
                </div>
                <div className="card-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sit animi id repellendus. Voluptatibus dolorem deleniti sit, totam ad adipisci sequi laudantium incidunt tempore dolores ipsa nemo quod architecto asperiores!</p>
                    <div className="categ">SEO</div>
                </div>
            </div>
            {/* <div className="card-content">
                <div className="card-header">
                    <img src={cardPortfolio} alt="image application réalisée" />
                </div>
                <div className="card-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sit animi id repellendus. Voluptatibus dolorem deleniti sit, totam ad adipisci sequi laudantium incidunt tempore dolores ipsa nemo quod architecto asperiores!</p>
                    <div className="categ">SEO</div>
                </div>
            </div>
            <div className="card-content">
                <div className="card-header">
                    <img src={cardSophie} alt="image application réalisée" />
                </div>
                <div className="card-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sit animi id repellendus. Voluptatibus dolorem deleniti sit, totam ad adipisci sequi laudantium incidunt tempore dolores ipsa nemo quod architecto asperiores!</p>
                    <div className="categ">SEO</div>
                </div>
            </div>
            <div className="card-content">
                <div className="card-header">
                    <img src={cardNina} alt="image application réalisée" />
                </div>
                <div className="card-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sit animi id repellendus. Voluptatibus dolorem deleniti sit, totam ad adipisci sequi laudantium incidunt tempore dolores ipsa nemo quod architecto asperiores!</p>
                    <div className="categ">SEO</div>
                </div>
            </div>
            <div className="card-content">
                <div className="card-header">
                    <img src={cardVgrimoire} alt="image application réalisée" />
                </div>
                <div className="card-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sit animi id repellendus. Voluptatibus dolorem deleniti sit, totam ad adipisci sequi laudantium incidunt tempore dolores ipsa nemo quod architecto asperiores!</p>
                    <div className="categ">SEO</div>
                </div>
            </div> */}
        
        </div>
    </div>
    
  )
}

export default Card
