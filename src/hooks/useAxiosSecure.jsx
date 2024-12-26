import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const axiosInstance = axios.create({
    baseURL: 'https://suggestify-product-recommendation-server.vercel.app',
    withCredentials: true,
})
const useAxiosSecure = () => {
    const {signOutUser} = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response=>{
            return response;
        }, error =>{
            
            if(error.status === 401 || error.status === 403){
                signOutUser()
                .then(()=>{
                
                    navigate('/auth/login')
                })
                
            }
            
            return Promise.reject(error);
        })
    },[])
   return axiosInstance;
};

export default useAxiosSecure;