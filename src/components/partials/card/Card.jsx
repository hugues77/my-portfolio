import './Card.scss';
import dataCard from '../../../data/Cards';
import dataCateg from '../../../data/Categorie'
import { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEye } from '@fortawesome/free-regular-svg-icons'
import {  faClose, faCode, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import imgPreview from '../../../assets/card/preview/sophie_projet_3.png';
import { motion } from "motion/react";


function Card() {


//state pour nombre des cards a afficher 
// const [nCard, setnCard] = useState(3);

// const loadMore = () => {
//     setnCard(nCard + nCard);
//     // setItems(dataCard);
//     setItems(dataCard.slice(0, nCard))
// }
//state pour background filter categ
const [activeButton, setActiveButton] = useState(false);


// const exp = dataCard.filter((data) => data.categ.toLowerCase().includes('react'))
// console.log(exp);

//state pour modal
const [modalpreview, setModalpreview] = useState(false);

const modalButton = () =>{
    setModalpreview(!modalpreview);
}

// useEffect(() => {
//     setnCard(3);
// }, [] )


// const tabCard = dataCard.slice(0, nCard);
// console.log(nCard);

//filter des card
const [items, setItems] = useState(dataCard);

const filterItems = (categ) =>{
    if(categ === 'tous'){
        setItems(dataCard);
        
    }else{
        const newItems = dataCard.filter((data) => data.categ.toLowerCase() === categ)
        setItems(newItems);
    }
    

    //change background button
    setActiveButton(categ);
}

  return (
    <div>
        
        {/* les boutons pour categorie */}
        <div className='btn-categorie'>

            {
                dataCateg.map((cat) =>(
                    <div key={cat.id}>
                        <button  onClick={() => filterItems(cat.title.toLowerCase())} className={activeButton === cat.title.toLowerCase() ? 'active':''}>{cat.title} </button>
                    </div>
                ))
            }
        
        </div>
        <div className='card'>
        {

        }
            {
                items.map((res) => (
                    
                   
                    <motion.div 
                    layout
                    initial={{opacity: 0, y:50}}
                    animate={{opacity: 1, y:0}}
                    exit={{ opacity: 0 }}
                    transition={{duration: 0.4}}
                    className="card-content" key={res.id} >
                        <div className="card-header">
                            <img src={res.urlImage} alt="" /> 
                            <div className="caption">
                                <FontAwesomeIcon  icon={faCode} className='icon_caption' />
                                <div className="buttons">
                                    <a href={res.urlGithub} target='_blank'><FontAwesomeIcon icon={faGithub} className='icon'/> Github</a>
                                    <button onClick={() => modalButton()} className='modal-btn'><FontAwesomeIcon icon={faGlobe} className='icon'/>Preview</button>
                                    {/* creation du modal pour preview */}
                                    {modalpreview && (<div className="modal" onClick={() => modalButton()} >
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h2>{res.title} </h2>
                                                <div><FontAwesomeIcon onClick={() => modalButton()} icon={faClose} className='icon' /></div>
                                            </div><hr />
                                            <div className="modal-body">
                                                <img src={res.urlImagePreview} alt="" />
                                            </div>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                        <div className="card-text">
                            <p>{res.description.substring(0, 250)} </p>
                            <div className='categ'><FontAwesomeIcon icon={faCode} /> {res.categ.toUpperCase()}</div>
                                
                        </div>
                        

                    </motion.div>
    
                ))
                
            }

        </div>

        {/* {(nCard < 7) && <div className="card-btn" onClick={() => loadMore()}><FontAwesomeIcon icon={faEye} className='icon' /> Voir plus</div>} */}
       

    </div>
    
  )
}

export default Card
