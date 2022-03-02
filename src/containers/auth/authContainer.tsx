import React, { useCallback } from 'react';
import { useMutation } from 'react-query';
import { handleSignupRequest } from '../../api/auth/authAPI';

import Signup from '../../components/auth/signup';
import { ISignupForm } from '../../models/auth/authModel';
import { HTTPError } from '../../models/error/httpError';



const AuthContainer = () => {
    const { mutate: signup, isLoading, isError, error } = useMutation(handleSignupRequest, {
        onSuccess: async (data) => {
            console.log(data);
        },
        onError: async (err) => {
            console.log(err);
        }
    })

    // const mutation = useMutation(handleSignupRequest);
    // const handleSignup = useCallback(
    //     async (signupFormData: ISignupForm) => {
    //         try {
    //             await mutation.mutateAsync(signupFormData)
    //         } catch (error) {
    //             console.log(error)
    //         }

    //     }, [mutation]
    // )
    const handleSignup = (singupFormData: ISignupForm) => {
        signup(singupFormData);
    }

    return (
        <div>
            {/* <Signin/> */}
            <Signup handleSignup={handleSignup} />
        </div>
    );
};

export default AuthContainer;