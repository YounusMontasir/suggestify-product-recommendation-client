import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const SpecificRecommendation = () => {
  const { id } = useParams();
  const [specificQuery, setSpecificQuery] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/recommendations?id=${id}`).then((res) => {
      setSpecificQuery(res.data);
    });
  }, [id]);
  // const {recommendationTitle, recommendationReason,recommendedProductImage,recommendedProductName, queryId, queryTitle, productName, userEmail, userName, recommenderEmail, recommenderName,
  //     currentDateTime } = specificQuery;
  console.log(specificQuery);

  return (
    <div className="mt-24 mb-20">
      <h3 className="text-center text-3xl font-semibold mb-10">
        Recommendations For This product
      </h3>
    
    <div className="grid lg:grid-cols-2 gap-6"> 
    {specificQuery.map((query) => (
        <div key={query._id} className=" border-2 border-gray-200 rounded-md p-4">
          <div className="flex gap-6">
            <img className="h-32 w-32 rounded-md" src={query.recommendedProductImage} alt="" />
            <div>
              <h3 className="text-2xl font-semibold mb-3">{query.recommendedProductName}</h3>
              <p className="text-[#6C727C]">{query.recommendationReason}</p>
              
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SpecificRecommendation;
