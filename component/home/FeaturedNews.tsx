import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type newsData = {
    poster: string,
    headline: string,
    link: string
}


const FeaturedNews = () => {
    const newsData: newsData[] = [
        {
            poster: '/news/news1.webp',
            headline: 'বান্দরবানে অপহরণ : দুজনের মুক্তি, দুজনের খোঁজ',
            link: '/'
        },
        {
            poster: '/news/news2.webp',
            headline: 'তত্ত্বাবধায়কের দাবিতে রাজপথে নামার ঘোষণা জামায়াতের',
            link: '/'
        },
        {
            poster: '/news/news4.webp',
            headline: 'জামায়াতকে মাঠে নামিয়েছে বিএনপি : সেতুমন্ত্রী',
            link: '/'
        },
        {
            poster: '/news/news2.webp',
            headline: 'বান্দরবানে অপহরণ : দুজনের মুক্তি, দুজনের খোঁজ',
            link: '/'
        },
        {
            poster: '/news/news3.webp',
            headline: 'তত্ত্বাবধায়কের দাবিতে রাজপথে নামার ঘোষণা জামায়াতের',
            link: '/'
        }
    ]
    return (
        <div>
            <ul>
                {newsData.map((news, index) => (
                    <li key={index} className='mb-2 bg-slate-100 rounded'>
                        <Link href={news.link}>
                            <div className='grid grid-cols-6'>
                                <div className='relative col-span-2 w-full h-20'>
                                    <Image src={news.poster} fill className='absoulte rounded' alt={news.headline} />
                                </div>
                                <div className='col-span-4 mx-2 text-lg'>{news.headline}</div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FeaturedNews