import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SpecificRecommendation = () => {
    const {id} = useParams()
    const [specificQuery, setSpecificQuery] = useState([])

    
    useEffect(()=>{
        axios.get(`http://localhost:5000/recommendations?id=${id}`)
        .then(res=>{
            setSpecificQuery(res.data)
            
        })
    },[id])
    // const {recommendationTitle, recommendationReason,recommendedProductImage,recommendedProductName, queryId, queryTitle, productName, userEmail, userName, recommenderEmail, recommenderName, 
    //     currentDateTime } = specificQuery;
    console.log(specificQuery);
    
    return (
        <div className='mt-24 mb-20'>
            <p>{specificQuery.length}</p>
            {
                specificQuery.map((query)=>(
                    <div key={query._id}>
                        <p>{query.recommendationTitle}</p>
                        <p>dsfsd</p>
                    </div>
                
                ))
            }
        </div>
    );
};

export default SpecificRecommendation;