import React from 'react';
import getTotalInstallations from '../actions/getTotalInstallations';
import Link from 'next/link';

const Total = async () => {
    // Await the result of getTotalInstallations
    const { total, error } = await getTotalInstallations(); // Notice the parentheses

    // Check for errors
    if (error) {
        return (
            <main className='border items-center text-2xl py-6 lg:mx-[10%] xl:mx-[20%] md:mx-[8%] mx-[6%] px-5 mt-[12%] mb-[40px] bg-gray-50 rounded-lg shadow-md flex flex-col '>
                <h2 className='text-center'>Error: {error}</h2>
            </main>
        );
    }

    return (
        <main className='border items-center justify-between text-2xl py-6 lg:mx-[10%] xl:mx-[20%] md:mx-[8%] mx-[6%] px-5 mt-[12%] mb-[40px] bg-gray-50 rounded-lg shadow-md flex flex-row '>
            <div className='flex flex-col '>
            <h2 className='text-center'>Customers</h2>
            <h2 className='text-4xl text-center border shad rounded-full'>{total}</h2>
            </div>
            <Link href={'/add'} className='text-lg shadow p-2 rounded-full bg-gray-500 text-white'>{'Add Customer >'}</Link>
        </main>
    );
};

export default Total;
