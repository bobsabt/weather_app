import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const CreateCard = ({ addCard }) => {
  return (
    <div className="card-container add-card-container">
        <h1 className="addcity">Add city</h1>    
        <FontAwesomeIcon className="plus" icon={faPlusCircle} onClick={addCard}/>      
    </div>
  );
};

// Define prop types
CreateCard.propTypes = {
  addCard: PropTypes.func,
};


export default CreateCard;