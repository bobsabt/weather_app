import PropTypes from 'prop-types';

const FrontCard = ({ icon, temp, text, feels }) => {
    return (
        <div className='frontcard-container'>
            <p className='today'>Today</p>
            <p className='skytext'>{text}</p>
            <img className='icon'src={icon} alt="icon"/> 
            <p className='temp'>{temp} <sup>o</sup>C</p>
            <p className='feels'>Feels like: {feels} <sup>o</sup>C</p>  
        </div>
    );
};

// Define prop types
FrontCard.propTypes = {
    icon: PropTypes.string, 
    temp: PropTypes.number, 
    text: PropTypes.string, 
    feels: PropTypes.number
  };

export default FrontCard;