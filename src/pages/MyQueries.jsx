import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const MyQueries = () => {
    const {user} = useContext(AuthContext)
    const {email, displayName, photoURL} = user;
    
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
        currentDateTime: formattedDate, userEmail: email, userName: displayName, userProfileImage: photoURL, recommendationCount  }
        axios.post("http://localhost:5000/queries", query)
        .then(res=>{
            console.log(res.data);
            
        })
        .catch(err => {
            console.error(err);
          });

    document.getElementById('my_modal_5').close();
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="h-[600px] bg-[url('https://i.ibb.co.com/d0DchtF/add-query-bg.jpg')] bg-cover bg-center flex items-center justify-center">
        <button
          onClick={() => {
            document.getElementById('my_modal_5').showModal();
          }}
          className="btn btn-accent"
        >
          Add Query
        </button>
      </div>


      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box" onSubmit={handleAddQuery}>
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
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default MyQueries;
