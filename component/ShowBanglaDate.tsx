import React from 'react';
import { getCurrentDateInGMTPlus6 } from '../lib/convertToBangla'
const Topbar = () => {
    const { day, month, year } = getCurrentDateInGMTPlus6();
    return (
        <>
            {day} {month}, {year}
        </>
    )
}

export default Topbar