import React, { useState } from 'react'
import Link from 'next/link'
import { HiMenu } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
type NewsLink = {
    cat: string;
    link: string
}
const NewsMenu = () => {
    const NewsLink: NewsLink[] = [
        {
            cat: 'জাতীয়',
            link: 'asgd'
        },
        {
            cat: 'আন্তর্জাতিক',
            link: 'asgd'
        },
        {
            cat: 'রাজনীতি',
            link: 'asgd'
        },
        {
            cat: 'আন্তর্জাতিক',
            link: 'asgd'
        },
        {
            cat: 'খেলাধুলা',
            link: 'asgd'
        },
        {
            cat: 'বিজ্ঞান প্রযুক্তি',
            link: 'asgd'
        },
        {
            cat: 'অর্থ ও বাণিজ্য',
            link: 'asgd'
        },
        {
            cat: 'আইন-আদালত',
            link: 'asgd'
        },
        {
            cat: 'বিনোদন',
            link: 'asgd'
        },
        {
            cat: 'বিনোদন',
            link: 'asgd'
        },
        {
            cat: 'বিনোদন',
            link: 'asgd'
        },

    ]
    const [openMenu, setopenMenu] = useState<Boolean>(false)
    const handleOpenMenu = () => {
        setopenMenu(!openMenu)
    }
    return (
        <div className='container my-2'>

            <div onClick={handleOpenMenu} className='block lg:hidden text-white bg-primary-600 rounded p-2 flex justify-between align-items-center' style={{ fontSize: 18 }}>
                <span> সকল পাতা </span>
                <button className='text-white'> {openMenu ? <IoMdClose /> : <HiMenu />}  </button>
            </div>

            <div className='block lg:hidden'>
                {openMenu &&
                    <div>
                        <ul className=" text-sm font-medium text-gray-900 bg-white border border-gray-200">
                            <li className="w-full border-b border-gray-200">
                                {NewsLink.map((n, i) => (
                                    <Link key={i} href={n.link} className="block w-full px-4 py-2 border-b border-gray-200 hover:bg-slate-800 hover:text-white">
                                        {n.cat}
                                    </Link>
                                ))}
                            </li>
                        </ul>
                    </div>
                }
            </div>

            <nav className='hidden lg:block'>
                <div className='flex text-white bg-primary-600 rounded' style={{ fontSize: 18 }}>
                    {NewsLink.map((n, i) => (
                        <Link key={i} href='test' className={` ${i == 0 && 'rounded-l'} p-2 bg-primary-600 border-r hover:bg-slate-900`}>{n.cat}</Link>
                    ))}
                </div>
            </nav>

        </div>
    )
}
export default NewsMenu