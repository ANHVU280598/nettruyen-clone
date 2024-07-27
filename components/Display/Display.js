'use client'
import { fetchCsvData } from '@/redux/slice/csvDataSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Display() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.csvData.data);
    const status = useSelector((state) => state.csvData.status);
    const error = useSelector((state) => state.csvData.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCsvData());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div className='text-white'>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }
    console.log(data);
    return (
        <div className='text-white'>
   
        </div>
    );
};
