import React from 'react';

const Review = ({ title, img_url }) => (
    <div className="review">
        <img src={img_url} alt={title} />
        <h3>{title}</h3>
    </div>
)

export default Review;