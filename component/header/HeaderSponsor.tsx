import React from 'react'
import Image from 'next/image'

export const HeaderSponsor = () => {
  return (
    <div className='hidden md:block relative h-16  w-7/12	 lg:w-1/2'>
            <Image
                src="/corona.jpg"
                fill
                className='absoulte'
                alt='xtensoft_logo'
            />
        </div>
  )
}
