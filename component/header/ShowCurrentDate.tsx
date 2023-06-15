"use client"
import React from 'react'
import { getDate } from 'bangla-calendar';
const ShowCurrentDate = () => {
    const date1 = new Date();
    let banglaDate = getDate(date1);
    return <>{banglaDate}</>;
}

export default ShowCurrentDate