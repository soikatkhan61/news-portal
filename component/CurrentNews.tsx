"use client"
import React, { useState } from 'react'
import LastNews from './news/LastNews'
import DailyBest from './news/DailyBest'
import WeeklyBest from './news/WeeklyBest'

const CurrentNews = () => {
    const [selectedTab, setSelectedTab] = useState<Number>(1)
    const handleSelect = (button:Number) =>{
        setSelectedTab(button)
    }
    return (
        <>
            <div className="py-2 flex justify-evenly border-b bg-slate-100">
                <button onClick={()=>handleSelect(1)} className={`${selectedTab == 1 && 'text-primary-600'}`}>সর্বশেষ</button>
                <button onClick={()=>handleSelect(2)} className={`${selectedTab == 2 && 'text-primary-600'}`}>দিনের সেরা</button>
                <button onClick={()=>handleSelect(3)} className={`${selectedTab == 3 && 'text-primary-600'}`}>সপ্তাহের সেরা</button>
            </div>
            <div className="px-2">
                {selectedTab === 1 ? <LastNews /> :
                selectedTab === 2 ? <DailyBest /> :
                selectedTab === 3 ? <WeeklyBest /> :
                null
                }
            </div>
        </>
    )
}

export default CurrentNews