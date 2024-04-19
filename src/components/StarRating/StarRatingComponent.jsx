import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }) => {
    const maxRating = 5;
    const stars = [];

    for (let i = 0; i < maxRating; i++) {
        stars.push(
            <FontAwesomeIcon
                key={i}
                icon={faStar}
                style={{ color: i < rating ? "#f1c40f" : "#ccc" }}
            />
        );
    }

    return (
        <div className="rating_adidas">
            {stars}
        </div>
    );
};

export default StarRating;