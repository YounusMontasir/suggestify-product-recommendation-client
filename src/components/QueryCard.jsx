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
      const date = new Date(currentDateTime).toLocaleDateString();
    return (
        <div>
            <div class="card bg-base-100 border border-gray-200 shadow-xl">
  <figure class="pt-6">
    <img 
      src={productImageURL}
      alt=""
      class="rounded-xl h-56" />
  </figure>
  <div class="card-body ">
    <h2 class="card-title">{productName}</h2>
    <p className='text-[#6C727C]'><strong>Query</strong>: {queryTitle}</p>
    <p className='text-[#6C727C] mb-4'><strong>Recommendation Count:</strong> {recommendationCount}</p>
     <div className='flex justify-between items-center'>
     <div className='flex gap-4 items-center '>
        <div>
          <img className='h-10 w-10 rounded-full' src={userProfileImage} alt="" />
        </div >
        <div >
          <h4 className='font-semibold'>{userName}</h4>
          <p className='text-[#6C727C]'>{date}</p>
        </div>
      </div>
    <div class="">
      <Link to={`/querydetails/${_id}`}><button class="btn btn-md text-white bg-[#2D86EB] rounded-md">Recommend</button></Link>
    </div>
     </div>
  </div>
</div>
        </div>
    );
};

export default QueryCard;