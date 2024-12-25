import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from './../components/Navbar';

const UpdateQuery = () => {
    const {id} =useParams()
    const navigate = useNavigate()
   
    const [updateQuery, setUpdateQuery] = useState([])
    const {user} = useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/queryupdate/${id}`)
        .then(res=> res.json())
        .then(data=>{
           setUpdateQuery(data)
        })
    } ,[])
    const handleUpdateQuery = e =>{
        e.preventDefault(); // Prevent default form submission behavior
        const form = e.target;
        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const productImageURL = form.productImageURL.value;
        const queryTitle = form.queryTitle.value;
        const boycottingReason = form.boycottingReason.value;
        const queryUpdate = {productName,productImageURL, productBrand, queryTitle, boycottingReason}
        // console.log(queryUpdate);
        
        axios.patch(`http://localhost:5000/queryupdate/${id}`, queryUpdate)
        .then(res=>{
                
                Swal.fire({
                  icon: 'success',
                  title: 'Query updated successfully!',
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/myqueries");

        })
        navigate("/myqueries");

    }
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
      } = updateQuery
    return (
       <div>
        <Navbar></Navbar>
         <div className='w-5/12 mx-auto mt-20 mb-20'>
         <div className='relative inline-block w-full'>
         <h3 className='text-3xl mb-4 relative'>Update Your Query
          <span class="absolute left-0 top-12 t-4 h-0.5 bg-blue-500 w-2/12"></span>
          </h3>
          <div class="absolute top-12 bottom-0 w-full h-px bg-gray-300"></div>
         </div>
            <form method="" className=" shadow-xl p-6" onSubmit={handleUpdateQuery}>
          {/* Form Fields */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Product Name</span>
            </label>
            <input
              type="text"
              defaultValue={productName}
              placeholder="Product Name"
              name="productName"
              className="input input-bordered rounded-md border-gray-200"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Product Brand</span>
            </label>
            <input
              type="text"
              defaultValue={productBrand}
              placeholder="Product Brand"
              name="productBrand"
              className="input input-bordered rounded-md border-gray-200"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Product ImageURL</span>
            </label>
            <input
              type="text"
              defaultValue={productImageURL}
              placeholder="Product ImageURL"
              name="productImageURL"
              className="input input-bordered rounded-md border-gray-200"
              required
            />
          </div>
          <div className="form-control">
            
            <label className="label">
              <span className="label-text font-semibold">Query Title</span>
            </label>
            <input
              type="text"
              defaultValue={queryTitle}
              placeholder="Query Title"
              name="queryTitle"
              className="input input-bordered rounded-md border-gray-200"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Boycotting Reason</span>
            </label>
            <textarea
              className="textarea textarea-bordered rounded-md border-gray-200"
              defaultValue={boycottingReason}
              placeholder="Boycotting Reason"
              name="boycottingReason"
            ></textarea>
          </div>

          {/* Modal Action */}
          <div className="">
            <button type="submit" className="btn btn-md w-full bg-[#2D86EB] text-white rounded-md mt-4">
              Add
            </button>
          </div>
        </form>
        </div>
       </div>
    );
};

export default UpdateQuery;