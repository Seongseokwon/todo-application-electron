import { ISignupForm } from "../../models/auth/authModel"
import axios from "axios"

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_API_URL}/api/auth`
})

// export const handleSignupRequest = (signupData: ISignupForm) => instance.post('/signup', signupData);
export const handleSignupRequest = async (signupData: ISignupForm) => {
    const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(signupData)
    })
    
    if(!response.ok) {
        const error = await response.json();
        throw new Error(JSON.stringify(error));
    }
    return response.json();
    
    

    
    
};

