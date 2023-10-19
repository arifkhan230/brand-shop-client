
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRout = ({children}) => {
    const {loading,user} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
        
        return  children
    }
    return <Navigate to="/login"></Navigate>;
};

PrivateRout.propTypes = {
    children: PropTypes.node
};

export default PrivateRout;