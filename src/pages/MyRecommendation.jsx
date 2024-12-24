import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyRecommendation = () => {
    const {user} = useContext(AuthContext)
    const [myRecommendations, setMyRecommendations] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/recommendations?recommenderEmail=${user.email}`)
        .then(res=>{
           setMyRecommendations(res.data)
            
        })
    },[user?.email])
    return (
        <div>
            {myRecommendations.length}
        </div>
    );
};

export default MyRecommendation;