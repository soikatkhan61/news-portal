import React from 'react'
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className='container'>
            <div className='border border-secondary-400 flex'>
                <div className='bg-secondary-800 text-white py-2 px-2 text-center'>
                    ব্রেকিং 
                </div>
                <div className='flex align-items-center'>
                    <Marquee className='' pauseOnHover={true} speed={35}>
                        ১২ অঞ্চলে ৬০ কি. মি. বেগে ঝোড়ো হাওয়াসহ বজ্রবৃষ্টির সম্ভাবনা | ভুয়া জন্মদিন পালনসহ দুই মামলায় খালেদার অভিযোগ গঠন শুনানি ২৭ জুন
                    </Marquee>
                </div>
            </div>
            
        </div>
    )
}

export default BreakingNews