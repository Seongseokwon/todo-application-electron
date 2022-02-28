import React from 'react';
import authAPI from '../../api/auth/authAPI';
import Signup from '../../components/auth/signup';
import { ISignupForm } from '../../models/auth/authModel';


const AuthContainer = () => {
    const handleSignup = async (data: ISignupForm) => {
      const result = await authAPI.handleSignupRequest(data);
      console.log(result);
      
    };


    return (
        <div>
            {/* <Signin/> */}
            <Signup handleSignup={handleSignup} />
        </div>
    );
};

export default AuthContainer;