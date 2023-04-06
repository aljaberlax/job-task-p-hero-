import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.config';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loadig from '../../Shared/Loading/Loadig';


const Signup = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    let signInError;
    if (loading || gLoading || updating) {
        return <Loadig></Loadig>
    }
    if (error || gError || UpdateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || UpdateError?.message}</small></p>
    }

    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        navigate('/')
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-2xl text-center font-bold">SignUp</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>

                            </label>
                            <input  {...register("name",
                                {
                                    required: {
                                        value: true,
                                        message: 'name is required'
                                    },
                                })} type="text"
                                placeholder="Your Name" name='name'
                                class="input input-bordered w-full max-w-xs" />
                            <label class="label">

                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input  {...register("email",
                                {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide e valid email address'
                                    }
                                })} type="email"
                                placeholder="Your Email" name='email'
                                class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                            {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>
                            <input {...register("password",
                                {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'must be 6 character or longer'
                                    }
                                })} type="password"
                                placeholder="password" name='password'
                                class="input input-bordered w-full max-w-xs" />
                            <label class="label">

                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs' value='SignUp' type="submit" />
                    </form>
                    <p>Already Have an account? <Link className='text-primary' to='/login'>Login</Link></p>
                    <div class="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} class="btn btn-primary">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;