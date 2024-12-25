import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';

const RecommendationForYou = () => {
    const {user} = useContext(AuthContext)
    const [recommendations, setRecommendations] = useState([])
    const axiosSecure = useAxiosSecure()
    useEffect(()=>{
        axiosSecure.get(`/recommendations?userEmail=${user.email}`)
        .then(res=>{
            setRecommendations(res.data)
            
        })
    },[user?.email])
    // const recommendation = {recommendationTitle, recommendationReason,recommendedProductImage,recommendedProductName, queryId: _id, queryTitle, productName, userEmail, userName, recommenderEmail: user?.email, recommenderName: user?.displayName, 
    // currentDateTime: formattedDate };
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mb-20'>
           <h2 className='text-3xl text-center mb-10 mt-10 font-bold'>Recommendation For Me</h2>
            <div class="border-2 border-gray-200 rounded-lg shadow-sm">
  <table className="w-full">
   
    <thead className=''>
      <tr className='font-bold text-[16px] text-black'>
        <th className="py-2 md:py-4 px-3 md:px-6"></th>
        <th className="py-2 md:py-4 px-3 md:px-6  text-start">Query Product</th>
        <th className="py-2 md:py-4 px-3 md:px-6  text-start">Recommended Product</th>
        <th className="py-2 md:py-4 px-3 md:px-6  text-start hidden md:block">Recommendar Name</th>
        <th className="py-2 md:py-4 px-3 md:px-6  text-start">View Details</th>
      </tr>
    </thead>
    <tbody className=''>
      {
        recommendations.map((recommendation,index)=>

                <tr class="hover p-4">
        <th className="py-2 md:py-4 px-3 md:px-6">{index+1}</th>
        <td className="py-2 md:py-4 px-3 md:px-6">{recommendation.productName}</td>
        <td className="py-2 md:py-4 px-3 md:px-6">{recommendation.recommendedProductName}</td>
        <td className="py-2 md:py-4 px-3 md:px-6 hidden md:block">{recommendation.recommenderName}</td>
        <td className="py-2 md:py-4 px-3 md:px-6"> <Link to={`/querydetails/${recommendation.queryId}`}><button class="btn btn-md text-white bg-[#2D86EB]  rounded-md">Details</button></Link></td>
      </tr>
           
        )
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default RecommendationForYou;