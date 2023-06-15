'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Image from 'next/image';
import { Autoplay } from 'swiper';

const FeatureSlider = () => {

    return (
        <div className='bg-red-100'>
            <Swiper
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
            >
                <SwiperSlide className='bg-green-300 w-full'>
                    <div className='relative h-96'>
                        <Image src='/news/news1.webp' className='absolute w-full h-full' fill alt='1' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-green-300 w-full'>
                    <div className='relative h-96'>
                        <Image src='/news/news2.webp' className='absolute w-full h-full' fill alt='1' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-green-300 w-full'>
                    <div className='relative h-96'>
                        <Image src='/news/news3.webp' className='absolute w-full h-full' fill alt='1' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-green-300 w-full'>
                    <div className='relative h-96'>
                        <Image src='/news/news4.webp' className='absolute w-full h-full' fill alt='1' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>


    )
}

export default FeatureSlider