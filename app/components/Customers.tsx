"use client"
import React, { useEffect, useState } from 'react';
import getInstallations from '@/app/actions/getInstallations';
import { Installation } from '@/types/Installations';

const Customers = () => {
    const [installations, setInstallations] = useState<Installation[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchInstallations() {
            const result = await getInstallations();
            if (result.error) {
                setError(result.error);
            } else if (result.installations) {
                setInstallations(result.installations);
            }
        }

        fetchInstallations();
    }, []);

    return (
        <main className='items-center py-10 lg:mx-[10%] xl:mx-[8%] md:mx-[8%] mx-[6%] px-5 mt-[2%] mb-[40px]'>
            <div className='flex justify-between items-center mb-6'>
                <h3 className="text-center md:text-2xl font-semibold text-gray-800">
                    All Customers
                </h3>
            </div>
            <div className='overflow-x-auto'>
                {error && <div>Error: {error}</div>}
                {installations && (
                    <table className='table table-bordered min-w-full bg-white border rounded-lg shadow-md'>
                        <thead>
                            <tr>
                                <th className='py-2 px-4 border-b text-orange-700 '>First Name</th>
                                <th className='py-2 px-4 border-b text-orange-700 '>Last Name</th>
                                <th className='py-2 px-4 border-b text-orange-700 '>Email</th>
                                <th className='py-2 px-4 border-b text-orange-700 '>Home Address</th>
                                <th className='py-2 px-4 border-b text-orange-700 '>Phone Number</th>
                                <th className='py-2 px-4 border-b text-orange-700 '>Connected Splitter</th>
                                <th className='py-2 px-4 border-b text-orange-700 '>Customer Type</th>
                                <th className='py-2 px-4 border-b text-orange-700 '>Radio Status</th>
                                <th className='py-2 px-4 border-b text-orange-700 '>MAC ID</th>
                                <th className='py-2 px-4 border-b text-orange-700 '>Payment Ref</th>
                            </tr>
                        </thead>
                        <tbody>
                            {installations.map((installation: Installation, index: number) => (
                                <tr key={index}>
                                    <td className='py-2 px-4 border-b'>{installation.customer.firstName}</td>
                                    <td className='py-2 px-4 border-b'>{installation.customer.lastName}</td>
                                    <td className='py-2 px-4 border-b'>{installation.customer.email}</td>
                                    <td className='py-2 px-4 border-b'>{installation.customer.homeAddress}</td>
                                    <td className='py-2 px-4 border-b'>{installation.customer.phoneNumber}</td>
                                    <td className='py-2 px-4 border-b'>{installation.customer.connectedSplitter}</td>
                                    <td className='py-2 px-4 border-b'>{installation.customer.customerType}</td>
                                    <td className='py-2 px-4 border-b'>{installation.customer.radioStatus}</td>
                                    <td className='py-2 px-4 border-b'>{installation.macId}</td>
                                    <td className='py-2 px-4 border-b'>{installation.PaymentRef}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </main>
    );
};

export default Customers;


// before

{/* <main className=' items-center py-10 lg:mx-[10%] xl:mx-[8%] md:mx-[8%] mx-[6%] px-5 mt-[2%] mb-[40px]  '>
    <div className='flex justify-between items-center mb-6'>
        <h3 className="text-center md:text-2xl font-semibold text-gray-800">
            All Customers
        </h3>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
        {error && <div>Error: {error}</div>}
        {installations && installations.map((installation: Installation, index: number) => (
            <div className='border rounded-lg shadow-md text-[13px] px-[80px] py-[30px] bg-gray-50' key={index}>
                <h2 className="">Installation ID: {installation.id}</h2>
                <h2 className="">First Name: {installation.customer.firstName}</h2>
                <h2 className="">Last Name: {installation.customer.lastName}</h2>
                <h2 className="">Email: {installation.customer.email}</h2>
                <h2 className="">Home Address: {installation.customer.homeAddress}</h2>
                <h2 className="">Phone Number: {installation.customer.phoneNumber}</h2>
                <h2 className="">Connected Splitter: {installation.customer.connectedSplitter}</h2>
                <h2 className="">Customer Type: {installation.customer.customerType}</h2>
                <h2 className="">Radio Status: {installation.customer.radioStatus}</h2>
                <h2 className="">MAC ID: {installation.macId}</h2>
                <h2 className="">Payment Ref: {installation.PaymentRef}</h2>
                <h2 className="">Installation Date: {installation.installationDate}</h2>
            </div>
        ))}
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
        {error && <div>Error: {error}</div>}
        {installations && installations.map((installation: Installation, index: number) => (
            <div className='border rounded-lg shadow-md text-[13px] px-[80px] py-[30px] bg-gray-50' key={index}>
                <h2 className="">Installation ID: {installation.id}</h2>
                <h2 className="">First Name: {installation.customer.firstName}</h2>
                <h2 className="">Last Name: {installation.customer.lastName}</h2>
                <h2 className="">Email: {installation.customer.email}</h2>
                <h2 className="">Home Address: {installation.customer.homeAddress}</h2>
                <h2 className="">Phone Number: {installation.customer.phoneNumber}</h2>
                <h2 className="">Connected Splitter: {installation.customer.connectedSplitter}</h2>
                <h2 className="">Customer Type: {installation.customer.customerType}</h2>
                <h2 className="">Radio Status: {installation.customer.radioStatus}</h2>
                <h2 className="">MAC ID: {installation.macId}</h2>
                <h2 className="">Payment Ref: {installation.PaymentRef}</h2>
                <h2 className="">Installation Date: {installation.installationDate}</h2>
            </div>
        ))}
    </div>
</main> */}