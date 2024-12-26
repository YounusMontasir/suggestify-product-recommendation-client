import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import MyQuery from '../components/MyQuery';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyQueries = () => {
    const {user} = useContext(AuthContext)
    


  return (
    <div>
      {/* Banner Section */}
      <div className="h-[600px] bg-[url('https://i.ibb.co.com/10f7g5Z/my-query-banner.jpg')] bg-cover bg-center flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center md:text-4xl lg:text-6xl text-[#F9B851] font-bold mb-6 ">Have a Question? Let Us Help!</h1>
    <p className="text-xl max-w-xl text-white text-center mb-6">
    "Submit your query about any product, and we'll provide the answers you need!"
    </p>
       <Link to='/addquery'> <button className="btn btn-md text-white bg-[#2D86EB] rounded-md border-none"
>
          Add Query
        </button></Link>
      </div>
      <div>
        <MyQuery></MyQuery>
        </div>
    </div>
  );
};

export default MyQueries;
