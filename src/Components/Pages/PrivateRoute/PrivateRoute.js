import { Skeleton } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../CustomHooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { isLoading, user } = useAuth();
    const location = useLocation();
    isLoading && <Skeleton variant="rectangular" width={210} height={118} />;
    return user.auth? children : <Navigate to='sign-in' state={{from: location}}></Navigate>
};

export default PrivateRoute;