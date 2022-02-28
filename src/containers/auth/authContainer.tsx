import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Signin from '../../components/auth/signin';
import Signup from '../../components/auth/signup';
import { ISignupForm } from '../../models/auth/authModel';


const AuthContainer = () => {
    const handleSignup = (data: ISignupForm) => {
        fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err))
    };


    return (
        <div>
            {/* <Signin/> */}
            <Signup handleSignup={handleSignup} />
        </div>
    );
};

export default AuthContainer;