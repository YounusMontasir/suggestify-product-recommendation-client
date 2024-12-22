import React from 'react';
import { Link } from 'react-router-dom';

const QueryCard = ({query}) => {
    const {
        _id,
        productName,
        productBrand,
        productImageURL,
        queryTitle,
        boycottingReason,
        userEmail,
        userName,
        userProfileImage,
        currentDateTime,
        recommendationCount
      } = query
    return (
        <div>
            <div class="card bg-base-100  shadow-xl">
  <figure class="px-10 pt-10">
    <img 
      src={productImageURL}
      alt=""
      class="rounded-xl h-56" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{productName}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <p>Recommendation Count: {recommendationCount}</p>
    <div class="card-actions">
      <Link to={`/querydetails/${_id}`}><button class="btn btn-primary">Recommend</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default QueryCard;