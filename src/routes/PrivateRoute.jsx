import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {loading, user} = useContext(AuthContext)
    if(loading){
       return <Loading></Loading>
    }
    if(user){
        return children
    }
    return (
        <Navigate state={location.pathname} to="/auth/login"></Navigate>
    );
};

export default PrivateRoute;