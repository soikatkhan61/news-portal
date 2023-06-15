'use client'
import React, { useState, useEffect } from 'react';
import district from '../lib/district.json'
import upazillaData from '../lib/upazilla.json'

type district = {
    value: string,
    label: string
}
type upazilla = {
    value: string,
    label: string
}

const AmarElaka = () => {
    const [region, setRegion] = useState('');
    const [zilla, setZilla] = useState('');
    const [upazilla, setUpazilla] = useState('');
    const [zillaOptions, setZillaOptions] = useState<district[]>([]);
    const [upazillaOptions, setUpazillaOptions] = useState<upazilla[]>([]);

    useEffect(() => {
        const districts = district
            .filter((item) => item.division_id === region)
            .map((item) => ({ value: item.name, label: item.bn_name }));
        setZillaOptions(districts)
    }, [region]);

    useEffect(() => {
        const options = upazillaData
          .filter((item) => item.district_id === zilla)
          .map((item) => ({ value: item.bn_name, label: item.bn_name }));
        setUpazillaOptions(options);
      }, [zilla]);
    


    const handleRegionChange = (event: any) => {
        setRegion(event.target.value);
        setZilla('');
        setUpazilla('');
        setZillaOptions([]);
        setUpazillaOptions([]);
    };

    const handleZillaChange = (event: any) => {
        setZilla(event.target.value);
        setUpazilla('');
        setUpazillaOptions([]);
    };
    
    const handleUpazillaChange = (event: any) => {
        setUpazilla(event.target.value);
    };
    return (
        <div>
            <select value={region}
                onChange={handleRegionChange} id="countries" className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 ">
                <option disabled value="">
                    বিভাগ
                </option>
                <option value="Dhaka">ঢাকা</option>
                <option value="Rajshahi">রাজশাহী</option>
                <option value="Chattagram">চট্টগ্রাম</option>
                <option value="Khulna">খুলনা</option>
                <option value="Barisal">বরিশাল</option>
                <option value="Sylhet">সিলেট</option>
                <option value="Rangpur"> রংপুর </option>
                <option value="Mymensingh">ময়মনসিংহ</option>
            </select>

            <select value={zilla}
                onChange={handleZillaChange} className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 ">
                <option disabled value="">
                    জেলা
                </option>
                {zillaOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <select value={upazilla}
                onChange={handleUpazillaChange} className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 ">
                <option disabled value="">
                    উপজেলা
                </option>
                {upazillaOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

           <button className='px-2 p-1 text-center bg-secondary-600 hover:bg-secondary-800 w-full rounded text-white'>অনুসন্ধান</button>
        </div>
    )
}

export default AmarElaka