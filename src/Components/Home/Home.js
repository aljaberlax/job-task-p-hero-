import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MostLiked from './MostLiked';
import { Link } from 'react-router-dom';


const Home = () => {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [open, setOpen] = useState(null)
    const [media, setmedia] = useState([]);
    let [likes,setLikes] = useState(0);

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
        setOpen(true);
    };


    const handleDescription = (event) => {
        setDescription(event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('description', description);
        formData.append('image', image);

        console.log(formData)
        const options = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        await axios.post('http://localhost:5000/addPost', formData, options)
            .then((data) => {
                console.log('inserted', data.status);
                if (data.status === 200) {
                    window.alert('data posted successfully')
                    setDescription('');
                    setImage('')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetch('http://localhost:5000/media')
            .then(res => res.json())
            .then(data => setmedia(data))
    }, [media])
    return (
        <div className='text-center'>
            <div>
                <h1 className='text-xl py-5'>Uploade Blogs Here</h1>
            </div>
            <div className="bg-base-300">
                <div className=" mx-auto py-10 flex justify-center gap-10">

                    <form onSubmit={handleSubmit}>

                        <div>
                            <label htmlFor="">Blog Description</label>
                            <textarea
                                name='description'
                                value={description}
                                onChange={handleDescription}
                                className='border-2 border-purple-400 p-2 rounded-md w-full'
                                placeholder='write here' required></textarea>
                        </div>
                        <div>
                            {open && <img className={"w-56 h-56" + (image === "" ? "hidden" : "block")} src={image === "" ? "" : URL.createObjectURL(image)} alt="" />}
                        </div>
                        <div className='py-3'>
                            <label htmlFor="">Upload Image</label>
                            <input
                                type="file"
                                name='image'
                                onChange={handleImageChange}
                                className='border-2  border-purple-400 p-2 rounded-md w-full' required
                            />
                        </div>
                        <button
                            className='border-2 border-purple-400 p-2 rounded-md w-full hover:bg-purple-500'
                            type='submit'
                        >Post Blog</button>
                    </form>
                </div>
            </div>

            <section>
                <div>
                    <h1 className='text-3xl py-5'>Most likes / most favorate Posts</h1>
                    <div className='grid grid-cols-3 gap-5 mx-auto py-10'>
                        {media.slice(0,3).map(blog => <MostLiked
                            blog={blog}
                            key={blog._id}
                            likes={likes}
                        >

                        </MostLiked>)}
                    </div>
                </div>
            </section>
            <div className='py-5'><Link className='bg-base-300 text-blue-800 text-3xl p-2 rounded-xl' to={'/media'}>Show More</Link></div>
        </div>
    );
};

export default Home;