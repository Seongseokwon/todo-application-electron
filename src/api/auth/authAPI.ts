import { ISignupForm } from "../../models/auth/authModel"

class AuthAPI {
    private AUTH_API_URL = 'http://localhost:5000/api/auth'

    handleSignupRequest = async (data: ISignupForm) => {
        let response = await fetch(`${this.AUTH_API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return response.json();
    }

}

export default new AuthAPI();