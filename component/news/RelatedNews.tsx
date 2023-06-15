import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
type RelatedNews = {
    headline: string,
    category: string,
    date: string,
    poster:string
}
const RelatedNews = () => {

    const RelatedNews: RelatedNews[] = [
        {
            headline: 'বান্দরবানে অপহরণ : দুজনের মুক্তি, দুজনের খোঁজ নেই বান্দরবানে অপহরণ',
            category: 'সারাবাংলা',
            date: '2023-06-09T23:03:00.000Z',
            poster:'/news/news1.webp'
        }, {
            headline: 'বান্দরবানে অপহরণ : দুজনের মুক্তি, দুজনের খোঁজ',
            category: 'সারাবাংলা',
            date: '2023-06-09T23:03:00.000Z',
            poster:'/news/news2.webp'
        },
        {
            headline: 'তত্ত্বাবধায়কের দাবিতে রাজপথে নামার ঘোষণা জামায়াতের',
            category: 'বাণিজ্য',
            date: '2023-06-09T23:03:00.000Z',
            poster:'/news/news4.webp'
        },
        {
            headline: 'জামায়াতকে মাঠে নামিয়েছে বিএনপি : সেতুমন্ত্রী',
            category: 'রাজনীতি',
            date: '2023-06-09T23:03:00.000Z',
            poster:'/news/news2.webp'
        },
        {
            headline: 'জামায়াতকে মাঠে নামিয়েছে বিএনপি : সেতুমন্ত্রী',
            category: 'রাজনীতি',
            date: '2023-06-09T23:03:00.000Z',
            poster:'/news/news3.webp'
        },
        {
            headline: 'জামায়াতকে মাঠে নামিয়েছে বিএনপি : সেতুমন্ত্রী',
            category: 'রাজনীতি',
            date: '2023-06-09T23:03:00.000Z',
            poster:'/news/news4.webp'
        },
        {
            headline: 'জামায়াতকে মাঠে নামিয়েছে বিএনপি : সেতুমন্ত্রী',
            category: 'রাজনীতি',
            date: '2023-06-09T23:03:00.000Z',
            poster:'/news/news2.webp'
        },
        {
            headline: 'জামায়াতকে মাঠে নামিয়েছে বিএনপি : সেতুমন্ত্রী',
            category: 'রাজনীতি',
            date: '2023-06-09T23:03:00.000Z',
            poster:'/news/news3.webp'
        },
    ]

    return (
        <>
            {RelatedNews.map((n, i) => (
                <Link key={i} href='/asdg/asdg'>
                    <div className='bg-slate-100 rounded my-2'> 
                        <div className='relative h-60 md:h-40 w-full'>
                            <Image alt='dd' src={n.poster} fill className='absoulte rounded-t' />
                        </div>
                        <p className='line-clamp-2 hover:line-clamp-none my-2 text-gray-700 p-2 text-md'>{n.headline}</p>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default RelatedNews