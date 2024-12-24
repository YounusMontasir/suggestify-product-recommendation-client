import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyQuery = () => {
    const [myQuery, setMyQuery] = useState([])
    const {user} = useContext(AuthContext)
    useEffect(()=>{
        axios.get(`http://localhost:5000/queries/${user.email}`, {withCredentials: true})
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
          fetch(`http://localhost:5000/queries/${id}`,{
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
        <div className='grid grid-cols-3 w-10/12 mx-auto mt-20 mb-24'>
           {
            myQuery.map(query=>
                <div key={query._id} className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={query.productImageURL}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{query.productName}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
     <Link to={`/queryupdate/${query._id}`}><button className='btn'>Update</button></Link>
     <Link to={`/querydetails/${query._id}`}><button class="btn btn-primary">Details</button></Link>
     <Link><button onClick={()=>handleDeleteQuery(query._id)} className='btn'>Delete</button></Link>
    </div>
  </div>
</div>
            )
           } 
           
        </div>
    );
};

export default MyQuery;