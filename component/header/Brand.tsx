import React from 'react'
import Logo from './Logo'
import { HeaderSponsor } from './HeaderSponsor'
const Brand = () => {
    return (
        <div className='container mt-2 mb-4 flex justify-between'>
            <Logo/>
            <HeaderSponsor/>
        </div>
    )
}

export default Brand