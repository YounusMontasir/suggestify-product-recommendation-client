import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AddQuery = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleAddQuery = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const form = e.target;
        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const productImageURL = form.productImageURL.value;
        const queryTitle = form.queryTitle.value;
        const boycottingReason = form.boycottingReason.value;
        const isoDate = new Date(Date.now()).toISOString();
        const formattedDate = isoDate.slice(0, -5) + 'Z';
        let recommendationCount = 0;
    
        const query = {productName, productBrand, productImageURL, queryTitle, boycottingReason, 
            currentDateTime: formattedDate, userEmail: user?.email, userName: user?.displayName, userProfileImage: user?.photoURL, recommendationCount  }
            axios.post("http://localhost:5000/queries", query)
            .then(res=>{
                 Swal.fire({
                                  icon: 'success',
                                  title: 'Query updated successfully!',
                                  showConfirmButton: false,
                                  timer: 1500,
                                });
                                navigate("/queries");
                
                
            })
            .catch(err => {
                console.error(err);
              });
    
        
      };
    return (
        <div>
            <Navbar></Navbar>
            
            <div className='mx-auto w-11/12 md:w-8/12 lg:w-5/12 mt-10 border border-gray-200 rounded-md p-6'>
            <h1 className='text-3xl text-center'>Add Your Query</h1>
            <form method="" className="" onSubmit={handleAddQuery}>
          {/* Form Fields */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
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
              placeholder="Boycotting Reason"
              name="boycottingReason"
            ></textarea>
          </div>

          {/* Modal Action */}
          <div className="modal-action">
            <button type="submit" className="btn bg-[#2D86EB] text-white w-full">
              Add Query
            </button>
          </div>
        </form>
            </div>
        </div>
    );
};

export default AddQuery;