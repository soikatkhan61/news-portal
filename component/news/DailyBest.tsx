import React from 'react'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { toBanglaDate } from '@/lib/convertToBangla'
import { SlClock } from 'react-icons/sl'
type DailyBest = {
    headline:string,
    category:string,
    date:string
}
const DailyBest = () => {

    const DailyBest : DailyBest[] = [
        {
            headline:'কয়লা নিয়ে মোংলা বন্দরে চীনা জাহাজ',
            category:'সারাবাংলা',
            date:'2023-06-09T23:03:00.000Z'
        },{
            headline:'রাজধানীতে সমাবেশের অনুমতি পেল জামায়াত',
            category:'সারাবাংলা',
            date:'2023-06-09T23:03:00.000Z'
        },
        {
            headline:'নির্দলীয় নিরপেক্ষ সরকারের রূপরেখা এখনই নয়',
            category:'বাণিজ্য',
            date:'2023-06-09T23:03:00.000Z'
        },
        {
            headline:'সংলাপ নিয়ে আশার প্রদীপ এখনো নিভে যায়নি : কাদের',
            category:'রাজনীতি',
            date:'2023-06-09T23:03:00.000Z'
        },
        {
            headline:'ন্যূনতম আয়কর দুই হাজার টাকা প্রত্যাহার করা প্রয়োজন',
            category:'রাজনীতি',
            date:'2023-06-09T23:03:00.000Z'
        },
    ]

    return (
        <div className='w-50'>
            <ul>
                {DailyBest.map((n,i)=>(
                     <li className={`py-2 ${i !== DailyBest.length -1 && 'border-b' }`}>
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

export default DailyBest