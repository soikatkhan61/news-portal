'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { FiCopy } from 'react-icons/fi'
import { SlPrinter } from 'react-icons/sl'
import { SiFacebook } from 'react-icons/si'
import Image from 'next/image'
import CurrentNews from '@/component/CurrentNews'
import SquareAd from '@/component/ad/SquareAd'
import RelatedNews from '@/component/news/RelatedNews'
import AmarElaka from '@/component/AmarElaka'

const Page = () => {
    const pathname = useParams()
    console.log(pathname)
    return (
        <div className='container py-2'>
            <div className="grid md:grid-cols-4 gap-2">
                <div className="md:col-span-3">
                    <div className='flex justify-between bg-slate-200 p-2 rounded-t '>
                        <span>১৫ জুন, ২০২৩ ২২:৫৯</span>
                        <div className='flex'>
                            <button className='flex align-start border border-slate-300 px-1 rounded mx-1'> <FiCopy className='mx-1 mt-1 text-sm' /> কপি লিংক </button>
                            <button className='hidden md:inline-flex flex align-start border border-slate-300 px-1 rounded '> <SlPrinter className='mx-1 mt-1 text-sm' /> প্রিন্ট </button>
                            <button className='flex align-start border border-slate-300 px-1 rounded '> <SiFacebook className='mx-1 mt-1 text-sm text-[#1877F2]' /> শেয়ার </button>
                        </div>
                    </div>
                    <div className='bg-slate-100 p-2 pb-4'>
                        <h1 className='text-4xl'>পঞ্চায়েত নির্বাচনের আগে ফের সহিংসতা পশ্চিমবঙ্গে, নিহত ৩</h1>
                        <p className='mt-3'> প্রকাশকঃ দীপক দেবনাথ, কলকাতা</p>
                    </div>
                    <div className="thumbnail relative w-full h-60 md:h-[500px]">
                        <Image alt='hi' src='/news/news5.jpg' fill className='absolute w-full h-full' />
                    </div>

                    <div className='flex justify-center mt-2'>
                        <Image alt='hi' src='/ad/led.png' width={728} height={90}  />
                    </div>

                    <div className='news-body my-4 md:my-6 text-lg md:text-xl text-gray-800'>
                        আগামী ৮ জুলাই পশ্চিমবঙ্গে পঞ্চায়েত নির্বাচন। তার আগে বৃহস্পতিবার ছিল মনোনয়ন পত্র জমা দেওয়ার শেষ দিন। শেষ দিনেও সহিংসতার সাক্ষী থাকলো গোটা রাজ্যবাসী।

                        গুলিবিদ্ধ হয়ে মৃত্যু হয়েছে তিনজনের, আহত হয়েছে বেশ কয়েকজন। এছাড়া বিরোধীদলের প্রার্থীদের বাস থেকে টেনে নামানো, মারধর করা, বিরোধীদের মনোনয়নপত্র জমা দিতে বাধা দেওয়া, হুমকি দেওয়াসহ একাধিক অভিযোগ উঠেছে ক্ষমতাসীন দল তৃণমূল কংগ্রেসের বিরুদ্ধে।

                        তৃণমূলের হাত থেকে রেহাই পায়নি শিক্ষার্থীরাও। পঞ্চায়েত নির্বাচনের প্রার্থী ভেবে বিশ্বভারতীর এক নারী শিক্ষার্থীকেও মারধরের অভিযোগ উঠেছে তৃণমূলের বিরুদ্ধে।
                        বৃহস্পতিবার সকালটা শুরু হয় বোমা, গুলি আর মৃত্যু দিয়ে। উত্তর দিনাজপুর জেলার চোপড়ার বিডিও অফিসে মনোনয়নপত্র জমা দিতে যাওয়ার সময় কংগ্রেস এবং বামফ্রন্টের জোট প্রার্থীদের লক্ষ্য করে তৃণমূলের দুর্বৃত্তরা এই গুলি চালায় বলে অভিযোগ। বাম ও কংগ্রেস নেতারা যখন মিছিল করে যাচ্ছিলেন ঠিক তখনই কাঠালবাড়ি এলাকায় এলোপাথাড়ি গুলি হয় মিছিলের ওপর। এতে গুলিবিদ্ধ হন চোপড়ার বেশ কয়েকজন বাম ও কংগ্রেস জোটের কর্মী। আহতদের দলুয়া স্বাস্থ্য কেন্দ্রে নিয়ে যাওয়া হয়। সেখানে এক সিপিআইএম কর্মীর মৃত্যু হয়।

                        ঘটনার পরেই পুলিশ ঘটনাস্থলে পৌঁছায়। এই ঘটনার জেরে এলাকায় ব্যাপক উত্তেজনা সৃষ্টি হয়েছে।

                        দুইটি মৃত্যুর ঘটনা ঘটেছে দক্ষিণ ২৪ পরগনা জেলার ভাঙ্গড়ে। ক্ষমতাসীন দল তৃণমূল কংগ্রেস এবং বিরোধী দল ‘ইন্ডিয়ান সেক্যুলার ফ্রন্ট’ (আইএসএফ) কর্মী সমর্থকদের মধ্যে গোলাবর্ষণ শুরু হলে হতাহতের এই ঘটনা ঘটে। নিহত আইএসএফ কর্মীর নাম মহিউদ্দিন মোল্লা, নিহত তৃণমূল কর্মী রশিদ মোল্লা। গুলিবিদ্ধ অবস্থায় আরও একাধিক ব্যক্তি ভর্তি রয়েছেন কলকাতার হাসপাতালে। পাশাপাশি ভাঙ্গড়ের বিজয়গঞ্জ বাজারে একাধিক গাড়িতে অগ্নিসংযোগ হয়েছে। এছাড়া বোমা গুলি চালানো হয় বলে অভিযোগ।

                        এছাড়াও এদিন সকাল থেকেই ভাঙ্গড়-২ বিডিও অফিসের বাইরে দলীয় পতাকা, লাঠি নিয়ে জমায়েত করে তৃণমূলের কর্মী সমর্থকরা। অন্যদিকে পাল্টা প্রতিরোধ গড়ে তোলে আইএসএফ কর্মীরাও। এক সময় দু’পক্ষের মধ্যেই বোমাবর্ষণ শুরু হয়। আর এই ঘটনায় চরম উত্তেজনায় ছড়িয়ে পড়ে এলাকায়। তবে পুলিশ থাকলেও কোনো কার্যকরী ভূমিকা নিতে দেখা যায়নি।

                        এদিকে কোচবিহার জেলার দিনহাটায় মনোনয়ন জমা দিতে আসা বিজেপি প্রার্থীদের অন্তত চারটি গাড়ি ভাঙচুর করার অভিযোগ উঠেছে তৃণমূলের বিরুদ্ধে। ত্রিমোহনী এলাকায় বিজেপি কর্মীরা তাতে বাধা দিতে গেলে তাদের মারধর করা হয়।
                    </div>

                    <div>
                        <p className='my-2 text-xl text-red-500'>এই টপিকে আরো পড়ুন</p>
                        <div className='grid md:grid-cols-4 gap-2'>
                            <RelatedNews />
                        </div>
                    </div>

                </div>
                <div>
                    <div className='border rounded mb-4'>
                        <CurrentNews />
                    </div>
                    <div className='p-2'>
                        <p className='text-gray-500 text-center md:text-start mb-2' >Sponsored</p>
                        <div className='flex justify-center'>
                            <SquareAd />
                        </div>
                    </div>
                    <div className='border rounded my-4'>
                        <CurrentNews />
                    </div>

                    <div className='border rounded my-4 px-5 py-5'>
                        <p className='text-center text-xl text-primary-500 mb-2'>আমার এলাকার খবর</p>
                        <AmarElaka />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Page