import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
    return (
        <div>
            <Link href='/'>
                <div className='relative h-7 md:h-12 md:h w-36 md:w-60	 mr-2'>
                    <Image
                        src="/logo.webp"
                        fill
                        className='absoulte'
                        alt='xtensoft_logo'
                    />
                </div>
            </Link>
        </div>

    )
}

export default Logo