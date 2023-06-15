import React from 'react'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { toBanglaDate } from '@/lib/convertToBangla'
import { SlClock } from 'react-icons/sl'
type WeeklyBest = {
    headline:string,
    category:string,
    date:string
}
const WeeklyBest = () => {

    const WeeklyBest : WeeklyBest[] = [
        {
            headline:'তীব্র গরমে সব সরকারি প্রাথমিক বিদ্যালয়ে ছুটি ঘোষণা',
            category:'সারাবাংলা',
            date:'2023-06-09T23:03:00.000Z'
        },{
            headline:'কোরআনের চিরন্তন ১০টি নিষিদ্ধ বিষয়',
            category:'সারাবাংলা',
            date:'2023-06-09T23:03:00.000Z'
        },
        {
            headline:'চিড়িয়াখানায় শিশুর হাত ছিঁড়ে নিয়ে গেল হায়েনা',
            category:'বাণিজ্য',
            date:'2023-06-09T23:03:00.000Z'
        },
        {
            headline:'জন্মদিনের ছবিতে তানজিন তিশাকে তীব্র ভাষায় আক্রমণ',
            category:'রাজনীতি',
            date:'2023-06-09T23:03:00.000Z'
        },
        {
            headline:'বাসররাতেই বর-কনের মৃত্যু, রহস্য খুলল ময়নাতদন্তে',
            category:'রাজনীতি',
            date:'2023-06-09T23:03:00.000Z'
        },
    ]

    return (
        <div className='w-50'>
            <ul>
                {WeeklyBest.map((n,i)=>(
                     <li className={`py-2 ${i !== WeeklyBest.length -1 && 'border-b' }`}>
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
                ))}
            </ul>
        </div>
    )
}

export default WeeklyBest