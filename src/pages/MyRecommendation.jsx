import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyRecommendation = () => {
    const {user} = useContext(AuthContext)
    const [myRecommendations, setMyRecommendations] = useState([])
    const axiosSecure = useAxiosSecure()
    useEffect(()=>{
        axiosSecure.get(`/recommendations?recommenderEmail=${user.email}`)
        .then(res=>{
           setMyRecommendations(res.data)
            
        })
    },[user?.email])
    const handleDeleteQuery = (id) =>{
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/recommendations/${id}`,{
                method: 'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data);
                
                if(data.deletedCount>0){
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your recommendation has been deleted.",
                    icon: "success"
                  });
                  const exist = myRecommendations.filter(recommendation=> recommendation._id !== id)
                  setMyRecommendations(exist)
                }
              })
            }
          });
        }
    return (
       <div className='w-10/12 mx-auto mb-20'>
                  <h2 className='text-3xl text-center mb-10 mt-10 font-bold'> My Recommendation</h2>
                   <div class="border-2 border-gray-200 rounded-lg shadow-sm">
         <table className="w-full">
          
           <thead className=''>
             <tr className='font-bold text-[16px] text-black'>
               <th className="py-4 px-6"></th>
               <th className="py-4 px-6  text-start">Query Product</th>
               <th className="py-4 px-6  text-start">Recommended Product</th>
               <th className="py-4 px-6  text-start">Favorite Color</th>
               <th className="py-4 px-6  text-start">View Details</th>
             </tr>
           </thead>
           <tbody className=''>
             {
                myRecommendations.map((recommendation,index)=>
       
                       <tr class="hover p-4">
               <th className="py-4 px-6">{index+1}</th>
               <td className="py-4 px-6">{recommendation.productName}</td>
               <td className="py-4 px-6">{recommendation.recommendedProductName}</td>
               <td className="py-4 px-6">{recommendation.recommenderEmail}</td>
               <td className="py-4 px-6"> <Link><button onClick={()=>handleDeleteQuery(recommendation._id)} className='btn btn-md text-white bg-[#2D86EB] rounded-md'>Delete</button></Link></td>
             </tr>
                  
               )
             }
           </tbody>
         </table>
       </div>
               </div>
           );
};

export default MyRecommendation;