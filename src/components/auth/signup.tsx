import React from 'react';
import { useForm } from 'react-hook-form';
import { ISignupForm } from '../../models/auth/authModel';



type signupProps = {
    handleSignup: (data: ISignupForm) => void
}



const Signup = (props: signupProps) => {
    const { handleSignup } = props;
    const { register, handleSubmit, formState: { errors } } = useForm<ISignupForm>();


    return (
        <section>
            <form onSubmit={handleSubmit(handleSignup)}>
                <div className='signup-info'>
                    <label htmlFor="email">이메일</label>
                    <input id='email' type="text" {...register('email', { required: true })} />
                </div>
                <div className='signup-info'>
                    <label htmlFor="password">비밀번호</label>
                    <input id='password' type="password" {...register('password', { required: true })} />
                </div>
                <div className='signup-info'>
                    <label htmlFor="username">이름</label>
                    <input id='username' type="text" {...register('username', { required: true })} />
                </div>
                <div className='signup-info'>
                    <label htmlFor="nickname">별명</label>
                    <input id='nickname' type="text" {...register('nickname', { required: true })} />
                </div>
                <div className='signup-info'>
                    <button type='button'>취소</button>
                    <button type="submit">가입</button>
                </div>
            </form>
        </section>
    );
};

export default Signup;