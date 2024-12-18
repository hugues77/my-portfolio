import Card from '../partials/card/Card';
import {AnimatePresence} from "motion/react";

function Realisations() {
  return (
    <div className='realisation'>
      <AnimatePresence>
  
        <Card />
      </AnimatePresence>
    </div> 
  )
}

export default Realisations
