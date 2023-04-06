import React from 'react';
import bio from '../../Assets/1663559013790.jpg'
const About = () => {
    return (
        <div className='flex justify-center py-20'>

            <div className="">
                <div className="w-48 h-48 rounded-lg">
                    <img src={bio} />
                </div>
                <div>
                    <p>Name : AL JABER</p>
                    <p>Email: aljaberlax@gmail.com</p>
                    <p>University : </p>
                    <p>Address:  </p>
                </div>
            </div>
            <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-secondary py-2 text-lg">Booking For:</h3>
                    <form className='grid grid-cols-1 gap-5 justify-items-center'>
                        <input type="text" disabled  class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                           
                        </select>
                        <input type="name" name='name' disabled  class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone No" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' class="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
        </div >
    );
};

export default About;