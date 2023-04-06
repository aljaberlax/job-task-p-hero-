import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MediaDetails from './MediaDetails';

const Media = () => {
    const [media, setmedia] = useState([]);
    const { description, filename} = media;
    
    useEffect(()=>{
        fetch('http://localhost:5000/media')
        .then(res => res.json())
        .then(data => setmedia(data))
    },[media])

    

    return (
       <div>
        <div>
            <h1 className='text-center text-5xl text-blue-700'>All Blogs</h1>
        </div>
         <div className='grid grid-cols-3 gap-5 mx-auto justify-center items-center px-10 py-10'>
            
            {
                media.map(blog => <MediaDetails
                blog={blog}                
                ></MediaDetails>)
            }
        </div>
       </div>
    );
};

export default Media;