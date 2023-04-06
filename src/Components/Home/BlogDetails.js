import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const [blogDetails, setblogDetails] = useState('');

    const url = 'http://localhost:5000/'
    const { description, image } = blogDetails;

    useEffect(() => {
        const url = `http://localhost:5000/blog/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setblogDetails(data));

    }, []);
    return (
        <div className=''>
        <div className="card   bg-base-100 shadow-xl">
            <figure><img className='w-2/3 lg:max-h-96' src={url + image} alt="blog" /></figure>
            <div className="card-body">
                <p className='px-40 mx-auto text-center '>{description}</p>
                
                <div className='pl-40 '>
                    <a href=""><FaRegHeart></FaRegHeart></a>
                </div>
            </div>
        </div>
    </div>
    );
};

export default BlogDetails;