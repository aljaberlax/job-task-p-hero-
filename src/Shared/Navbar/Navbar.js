import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.config';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
       
    };
    return (
        <div className="">         
           
                <ul className="flex justify-center m-5">
                    <li className='mr-5'><Link to={'/'}>Home</Link></li>
                    <li className='mr-5'><Link to={'/media'}>Media</Link></li>
                    <li className='mr-5'><Link to={'/message'}>Message</Link></li>
                    <li className='mr-5'><Link to={'/about'}>About</Link></li>
                    <li >{user ? <Link onClick={logout} >SignOut</Link> : <Link to='/login'>Login</Link>}</li>
                </ul>      
            
        </div>
    );
};

export default Navbar;