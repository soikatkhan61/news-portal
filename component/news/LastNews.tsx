import React from 'react'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { toBanglaDate } from '@/lib/convertToBangla'
import { SlClock } from 'react-icons/sl'
import Link from 'next/link'
type lastNews = {
    headline: string,
    category: string,
    date: string
}
const LastNews = () => {

    const lastNews: lastNews[] = [
        {
            headline: 'বান্দরবানে অপহরণ : দুজনের মুক্তি, দুজনের খোঁজ নেই বান্দরবানে অপহরণ',
            category: 'সারাবাংলা',
            date: '2023-06-09T23:03:00.000Z'
        }, {
            headline: 'বান্দরবানে অপহরণ : দুজনের মুক্তি, দুজনের খোঁজ',
            category: 'সারাবাংলা',
            date: '2023-06-09T23:03:00.000Z'
        },
        {
            headline: 'তত্ত্বাবধায়কের দাবিতে রাজপথে নামার ঘোষণা জামায়াতের',
            category: 'বাণিজ্য',
            date: '2023-06-09T23:03:00.000Z'
        },
        {
            headline: 'জামায়াতকে মাঠে নামিয়েছে বিএনপি : সেতুমন্ত্রী',
            category: 'রাজনীতি',
            date: '2023-06-09T23:03:00.000Z'
        },
        {
            headline: 'জামায়াতকে মাঠে নামিয়েছে বিএনপি : সেতুমন্ত্রী',
            category: 'রাজনীতি',
            date: '2023-06-09T23:03:00.000Z'
        },
    ]

    return (
        <div className='w-50'>
            <ul>
                {lastNews.map((n, i) => (
                    <Link key={i} href='/asdg/asdg'>
                        <li className={`py-2 ${i !== lastNews.length - 1 && 'border-b'}`}>
                            <div className='flex items-start text-gray-600'>
                                <BsFillCaretRightFill className='mt-1 text-secondary-700' style={{ fontSize: 14 }} />
                                <div>
                                    <p className='ml-1'>{n.headline}</p>
                                    <div className='flex items-start' style={{ fontSize: 13 }}>
                                        <SlClock className='text-secondary-700' style={{ marginTop: 2 }} />
                                        <div>
                                            <span className='ml-1'>{toBanglaDate(n.date)}
                                            </span> | <span className='text-primary-600'>{n.category}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default LastNews