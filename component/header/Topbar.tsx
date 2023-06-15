import ShowCurrentDate from './ShowCurrentDate';
import ShowBanglaDate from '../ShowBanglaDate';
import React from 'react';
const Topbar = () => {
    return (
        <div className='bg-secondary-800'>
            <div className='container text-white flex justify-between'>
                <div>
                    <ShowCurrentDate /> | <ShowBanglaDate/>
                </div>
                বিজ্ঞাপন দিন
            </div>
        </div>
    )
}

export default Topbar