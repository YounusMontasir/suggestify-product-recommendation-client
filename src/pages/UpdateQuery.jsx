import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

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
                console.log("Update successful:", res.data);
                Swal.fire({
                  icon: 'success',
                  title: 'Query updated successfully!',
                  showConfirmButton: false,
                  timer: 1500,
                });
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
        <div className='w-5/12 mx-auto mt-20 mb-20'>
            <form method="" className=" shadow-xl p-6" onSubmit={handleUpdateQuery}>
          {/* Form Fields */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              defaultValue={productName}
              placeholder="Product Name"
              name="productName"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Brand</span>
            </label>
            <input
              type="text"
              defaultValue={productBrand}
              placeholder="Product Brand"
              name="productBrand"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product ImageURL</span>
            </label>
            <input
              type="text"
              defaultValue={productImageURL}
              placeholder="Product ImageURL"
              name="productImageURL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            
            <label className="label">
              <span className="label-text">Query Title</span>
            </label>
            <input
              type="text"
              defaultValue={queryTitle}
              placeholder="Query Title"
              name="queryTitle"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Boycotting Reason</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              defaultValue={boycottingReason}
              placeholder="Boycotting Reason"
              name="boycottingReason"
            ></textarea>
          </div>

          {/* Modal Action */}
          <div className="">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
        </div>
    );
};

export default UpdateQuery;