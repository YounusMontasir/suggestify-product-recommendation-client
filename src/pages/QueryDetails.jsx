import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QueryDetails = () => {
    const query = useLoaderData()
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
        <div className='grid grid-cols-2'>
          <div>
            
          </div>
        </div>
    );
};

export default QueryDetails;