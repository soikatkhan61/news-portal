"use client"
import React, { useCallback, useRef } from 'react';
import { toJpeg } from 'html-to-image';
import localFont from 'next/font/local'
import Image from 'next/image';
const bangla = localFont({src:'../../public/fonts/LiShamim.woff2'})

const Page = () => {
  const ref = useRef<HTMLDivElement>(null)

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toJpeg(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.jpeg'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  return (
    <>
      <div className='container py-5'>
        <div  ref={ref} className={`w-96 relative bg-red-100`}>
          <div className='flex justify-center'>
            <Image src='/news/news3.webp' alt='ss' width={320} height={160} quality={100} className='absolute left-8 top-16 border border-8 border-white' />
          </div>
          <div className='bg-red-600 h-48'>
          </div>
          <div className='bg-zinc-100 h-36 flex items-end'>
            <p className='text-center text-slate-900 text-xl py-5 px-10 liShamim'>১২ অঞ্চলে ৬০ কি. মি. বেগে ঝোড়ো হাওয়াসহ <span className='text-red-500'>বজ্রবৃষ্টির সম্ভাবনা</span> </p>
          </div>
          <div className='bg-zinc-100 h-10 text-center text-white text-sm' >
              <span className='bg-red-700 p-1'>বিস্তারিত কমেন্টে</span>
          </div>
          
        </div>

        <button onClick={onButtonClick} className='bg-green-500 p-2 rounded mt-4'>Download</button>
      </div>
      
    </>
  )
}

export default Page