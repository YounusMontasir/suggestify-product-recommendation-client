import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import SpecificRecommendation from '../components/SpecificRecommendation';
import Navbar from './../components/Navbar';

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
       <div>
        <Navbar></Navbar>
        <div className='w-10/12 mx-auto mt-10'>
        {/* query Authors */}
        <div className='mb-10'> 
          <h3 className='text-3xl font-bold mb-4'>Query Authors:</h3>
          <div className='flex gap-6 items-center ml-3'>
            <img className='h-24 w-24 rounded-2xl' src={userProfileImage} alt="" />
            <div>
              <h4 className='text-2xl font-semibold'>{userName}</h4>
              <p className='text-[#6C727C]'>{userEmail}</p>
            </div>
          </div>
        </div>
         <div className='grid grid-cols-2  border rounded-md p-6'>
          {/* query data */}
          <div className="flex flex-col items-center p-6   bg-white w-full mx-auto">
  {/* Product Image */}
  <img className="h-80 w-80 object-cover mb-4" src={productImageURL} alt={`${productName}`} />
  
  {/* Product Details */}
  <div className=" space-y-3">
    <h3 className="text-2xl text-black">
      <strong>Product Name:</strong> {productName}
    </h3>
    <p className="text-[#6C727C]">
      <strong className='text-black'>Brand:</strong> {productBrand}
    </p>
    <h4 className=" font-medium text-[#6C727C]">
      <strong className='text-black'>Query Title:</strong> {queryTitle}
    </h4>
    <p className="text-[#6C727C]">
      <strong className='text-black'>Reason for Boycotting:</strong> {boycottingReason}
    </p>
   
    
    <p className="text-blue-600 font-semibold">
      <strong>Recommendations:</strong> {recommendationCount}
    </p>
  </div>
</div>

          {/* recommendation form */}
          <div className=''>
          <div className='relative inline-block w-full'>
         <h3 className='text-3xl mb-4 relative'>Recommend For This Product:
          <span class="absolute left-0 top-12 t-4 h-0.5 bg-blue-500 w-2/12"></span>
          </h3>
          <div class="absolute top-12 bottom-0 w-full h-px bg-gray-300"></div>
         </div>
          <form method="" className="mt-10" onSubmit={handleRecommendation}>
          {/* Form Fields */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Recommendation Title</span>
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
              <span className="label-text font-semibold">Recommended Product Name</span>
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
              <span className="label-text font-semibold">Recommended Product Image</span>
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
              <span className="label-text font-semibold">Recommendation Reason</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Recommendation reason"
              name="recommendationReason"
            ></textarea>
          </div>

          {/* Modal Action */}
          <div className="w-full">
            <button type="submit" className="btn bg-[#2D86EB] text-white w-full mt-6">
              Recommend
            </button>
          </div>
        </form>
          </div>
        </div>
        <div >
          <SpecificRecommendation id={_id}></SpecificRecommendation>
        </div>
       </div>
       </div>
    );
};

export default QueryDetails;