import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyQuery = () => {
    const [myQuery, setMyQuery] = useState([])
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    useEffect(()=>{
        axiosSecure.get(`/queries/${user.email}`)
        .then(res=>{
            setMyQuery(res.data);
            
    },[user?.email])

        
    })
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
          fetch(`https://suggestify-product-recommendation-server.vercel.app/queries/${id}`,{
            method: 'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.deletedCount>0){
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const exist = myQuery.filter(query=> query._id !== id)
              setMyQuery(exist)
            }
          })
        }
      });
    }
    
    return (
     
        <div>
          {myQuery.length ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 lg:w-10/12 mx-auto mt-20 mb-24'>
        
        {
         myQuery.map(query=>
             <div key={query._id} className="card bg-base-100 border border-gray-200 shadow-xl">
<figure className="pt-6">
 <img
   src={query.productImageURL}
   alt="Shoes"
   className="rounded-xl h-56" />
</figure>
<div className="card-body">
<h2 class="card-title">{query.productName}</h2>
 <p className='text-[#6C727C]'><strong>Query</strong>: {query.queryTitle}</p>
 <p className='text-[#6C727C] mb-4'><strong>Recommendation Count:</strong> {query.recommendationCount}</p>
 <div className="flex justify-evenly">
  <Link to={`/queryupdate/${query._id}`}><button className='btn btn-md text-white bg-[#2D86EB] rounded-md'>Update</button></Link>
  <Link to={`/querydetails/${query._id}`}><button class="btn btn-md text-black  rounded-md">Details</button></Link>
  <Link><button onClick={()=>handleDeleteQuery(query._id)} className='btn btn-md text-white bg-[#2D86EB] rounded-md'>Delete</button></Link>
 </div>
</div>
</div>
         )
        } 
        
     </div> : 
     <div className='mt-10 mx-auto flex justify-center flex-col items-center mb-10'>
      <h2 className='text-2xl mb-5 font-semibold'>There is no Query of Yours</h2>
       <Link to='/addquery'> <button className="btn btn-md text-white bg-[#2D86EB] rounded-md border-none"
      >
                Add Query
              </button></Link>
     </div>
     }
        </div>
    );
};

export default MyQuery;