"use client";
import React from 'react'
import Topbar from '@/component/header/Topbar';
import NewsMenu from '@/component/header/NewsMenu';
import BreakingNews from '@/component/header/BreakingNews';
import Brand from '@/component/header/Brand';

const page: React.FC = () => {
    return (
        <>
            <Topbar />
            <Brand/>
            <NewsMenu />
            <BreakingNews />
        </>

    )
}

export default page