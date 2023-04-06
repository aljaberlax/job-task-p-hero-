import React from 'react';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom';

const MostLiked = ({ blog }) => {
    // const isliked = false;
    let [likes,setLikes] = useState(true);
    const url = 'http://localhost:5000/'
    const { _id, description, image } = blog;
    const navigate = useNavigate();
    const navigateToBlogDetail = id => {
        navigate(`/blog/${_id}`);
    }
    // const handleLikeReact = () => {
    //        if(likes===0){
    //         setLikes(1);
    //         document.getElementById('love').classList.add('text-red-600')
    //         document.getElementById('love').classList.remove('text-black')
    //        }
    //        else{
    //         setLikes(0);
    //         document.getElementById('love').classList.add('text-black')
    //         document.getElementById('love').classList.remove('text-red-600')
    //        }
    // }
    return (
        <div className=''>
            <div className="card   bg-base-100 shadow-xl">
                <figure><img className='w-96 h-72' src={url + image} alt="Shoes" /></figure>
                <div className="card-body">
                    <p>{description.slice(0, 180)}</p>
                    <div className="card-actions justify-between">
                        <div className='text-start flex gap-2'>
                           { likes ? <button onClick={()=>setLikes(false)}> <FaHeart id='love' className='text-black'></FaHeart></button> :  <button onClick={()=>setLikes(true)}> <FaHeart id='love' className='text-red-600'></FaHeart></button>}
                            <p>{likes} {likes>1 ? 'likes' :'like'}</p>
                        </div>
                        <button onClick={() => navigateToBlogDetail(_id)}>Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostLiked;