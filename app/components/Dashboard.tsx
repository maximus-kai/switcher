"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { AiOutlineDingding } from "react-icons/ai";
const Dashboard = () => {
    const currentpath = usePathname()
    const link = [
        { label: 'Dashboard', href: '/' },
        { label: 'Add Customer', href: '/add' }
        
    ]
    return (

        <main className='px-[40px]  items-center py-[10px] flex space-x-10 border-b '>
            <AiOutlineDingding className='text-6xl py-[10px] text-orange-700 ' />
            {
                link.map((eachlink) => (
                    <Link href={eachlink.href} className={`${eachlink.href === currentpath ? 'text-orange-900' : 'text-gray-600'} cursor-pointer  hover:text-slate-400`}>{eachlink.label}</Link>
                ))
            }
        </main>
    )
}

export default Dashboard;