import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const RecommendationForYou = () => {
    const {user} = useContext(AuthContext)
    const [recommendations, setRecommendations] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/recommendations?userEmail=${user.email}`,{withCredentials: true})
        .then(res=>{
            setRecommendations(res.data)
            
        })
    },[user?.email])
    return (
        <div>
            {recommendations.length}
        </div>
    );
};

export default RecommendationForYou;