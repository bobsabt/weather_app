import React from 'react';
import ReactCardFlip from 'react-card-flip';
import BackCard from './BackCard';
import FrontCard from './FrontCard';
import SearchContent from './SearchContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Card = ({  location, icon, temp, text, feels, nextdays, handleDelete, cardId, apikey, isSearchShown, setCards, cards, country, setIsAddCardActive}) => {

    const [isFlipped, setIsFlipped] = React.useState(false);

    const handleClick = (e)=> {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    };
    return(
        <>
            <FontAwesomeIcon className="delete" icon={faTimesCircle} onClick={()=>handleDelete(cardId)}/> 
            {isSearchShown ?
                <SearchContent 
                    cards={cards} 
                    setCards={setCards} 
                    cardId={cardId} 
                    setIsAddCardActive={setIsAddCardActive}
                    apikey={apikey}
                />
            :  
                <>
                    <p className='city'>{location}</p>
                    <p className='country'>{country}</p>
                    <div>
                        <ReactCardFlip isFlipped ={isFlipped} flipDirection="vertical">
                            <FrontCard 
                                icon={icon} 
                                temp={temp} 
                                text={text} 
                                feels={feels} 
                            />
                            <div className='backcard-container'>
                                {nextdays.map((nextday, index) => 
                                <BackCard key={index} 
                                    nextday={nextday.nextDay}  
                                    nexticon={nextday.day.condition.icon} 
                                    nextavgtemp={nextday.day.avgtemp_c} 
                                    nextmaxtemp={nextday.day.maxtemp_c} 
                                    nextmintemp={nextday.day.mintemp_c} 
                                    nexttext={nextday.day.condition.text}
                                />
                                )}
                            </div>
                        </ReactCardFlip >
                        <button className='btn-toggle'onClick={handleClick}>{!isFlipped ? "Show more" : "Show Today"}</button>
                    </div>
                </>
            }
        </>
    );
};

// Define prop types
Card.propTypes = {
    location: PropTypes.string, 
    icon: PropTypes.string, 
    temp: PropTypes.number, 
    text: PropTypes.string, 
    feels: PropTypes.number, 
    nextdays: PropTypes.array, 
    handleDelete: PropTypes.func, 
    cardId: PropTypes.number, 
    apikey: PropTypes.string, 
    isSearchShown: PropTypes.bool, 
    setCards: PropTypes.func, 
    cards: PropTypes.array, 
    country: PropTypes.string, 
    setIsAddCardActive: PropTypes.func
};

export default Card;