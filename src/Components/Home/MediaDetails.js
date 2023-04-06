import React from 'react';
import { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const MediaDetails = ({ blog }) => {
    let [likes, setLikes] = useState(0);
    const url = 'http://localhost:5000/'
    const { _id, description, image } = blog;
    const navigate = useNavigate();
    const navigateToBlogDetail = id => {
        navigate(`/blog/${_id}`);
    }

    const handleLikeReact = () => {
        if (likes === 0) {
            setLikes(1);
            document.getElementById('love').classList.add('text-red-600')
            document.getElementById('love').classList.remove('text-black')
        }
        else {
            setLikes(0);
            document.getElementById('love').classList.add('text-black')
            document.getElementById('love').classList.remove('text-red-600')
        }
    }
    return (
        <div className=''>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='w-96 h-72' src={url + image} alt="Shoes" /></figure>
                <div className="card-body">
                    <p>{description.slice(0, 150)}</p>
                    <div className="card-actions justify-between">
                        <div className='text-start flex gap-2'>
                            <button onClick={handleLikeReact}> <FaHeart id='love' className='outline-none  '></FaHeart></button>
                            <p>{likes} {likes > 1 ? 'likes' : 'like'}</p>
                        </div>
                        <button onClick={() => navigateToBlogDetail(_id)}>Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MediaDetails;