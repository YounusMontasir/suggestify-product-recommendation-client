import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import SpecificRecommendation from '../components/SpecificRecommendation';

const QueryDetails = () => {
    const query = useLoaderData()
    const {user} = useContext(AuthContext)
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
    const handleRecommendation = e =>{
      e.preventDefault();
      const form = e.target;
      const recommendationTitle = form.recommendationTitle.value;
      const recommendedProductName = form.recommendedProductName.value;
      const recommendedProductImage = form.recommendedProductImage.value;
      const recommendationReason = form.recommendationReason.value;
      const isoDate = new Date(Date.now()).toISOString();
      const formattedDate = isoDate.slice(0, -5) + 'Z';
      const recommendation = {recommendationTitle, recommendationReason,recommendedProductImage,recommendedProductName, queryId: _id, queryTitle, productName, userEmail, userName, recommenderEmail: user?.email, recommenderName: user?.displayName, 
        currentDateTime: formattedDate };
        console.log(recommendation);
        
      axios.post("http://localhost:5000/recommendations", recommendation)
      .then(res=>{
        console.log(res.data);
        
      })

    }
    
    
    

    return (
       <div className='w-10/12 mx-auto mt-20'>
         <div className='grid grid-cols-3 '>
          <div className='bg-gray-300 rounded-lg'>
            <img src={userProfileImage} alt="" />
            <h3>{userName}</h3>
          </div>
          {/* recommendation form */}
          <div className='col-span-2'>
          <form method="" className=" shadow-xl p-6" onSubmit={handleRecommendation}>
          {/* Form Fields */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recommendation Title</span>
            </label>
            <input
              type="text"
              placeholder="Recommendation Title"
              name="recommendationTitle"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recommended Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Recommended Product Name"
              name="recommendedProductName"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recommended Product Image</span>
            </label>
            <input
              type="text"
              
              placeholder="Recommended Product Image"
              name="recommendedProductImage"
              className="input input-bordered"
              required
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recommendation reason</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Recommendation reason"
              name="recommendationReason"
            ></textarea>
          </div>

          {/* Modal Action */}
          <div className="w-full">
            <button type="submit" className="btn btn-primary w-full mt-6">
              Recommend
            </button>
          </div>
        </form>
          </div>
        </div>
        <div>
          <SpecificRecommendation id={_id}></SpecificRecommendation>
        </div>
       </div>
    );
};

export default QueryDetails;