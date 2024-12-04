import {PropTypes} from 'prop-types';
import './Title.scss';
function Title({title, subtitle}) {
  return (
    <div className='title'>
      <h2>{title} </h2>
      <p>{subtitle} </p>
      <div className="line"></div>
    </div>
  )
}
Title.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default Title
