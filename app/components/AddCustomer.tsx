"use client"
import React from 'react'
import { toast } from 'react-toastify'
import { useRef } from 'react'
import addCustomer from '../actions/addCustomer';
const AddCustomer = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const clientAction = async (formData: FormData) => {
        const result = await addCustomer(formData);
        if (result.error) {
            toast.error(result.error);
        }
        else {
            toast.success(`Customer Added`);
            formRef.current?.reset();
        }
    }
    return (
        <main className=' border items-center py-10 lg:mx-[10%] xl:mx-[20%] md:mx-[8%] mx-[6%] px-5 mt-[12%] mb-[40px] bg-gray-50 rounded-lg shadow-md'>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Add New Customer</h3>
            <form className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4' ref={formRef} action={clientAction}>
                <div className="form-control">
                    <label htmlFor="text">First Name</label>
                    <input type="text" id='firstName' name='firstName' placeholder='Enter firstName...' />
                </div>
                <div className="form-control">
                    <label htmlFor="text">Last Name</label>
                    <input type="text" id='lastName' name='lastName' placeholder='Enter lastName...' />
                </div>
                <div className="form-control">
                    <label htmlFor="text">Email</label>
                    <input type="email" id='email' name='email' placeholder='Enter email...' />
                </div>
                <div className="form-control">
                    <label htmlFor="text">Home Address</label>
                    <input type="text" id='homeAddress' name='homeAddress' placeholder='Enter homeAddress...' />
                </div>
                <div className="form-control">
                    <label htmlFor="text">Phone Number</label>
                    <input type="text" id='phoneNumber' name='phoneNumber' placeholder='Enter phoneNumber...' />
                </div>
                <div className="form-control">
                    <label htmlFor="text">Connected Splitter</label>
                    <input type="text" id='connectedSplitter' name='connectedSplitter' placeholder='Enter connectedSplitter...' />
                </div>
                <div className="form-control">
                    <label htmlFor="customerType">Customer Type</label>
                    <select id='customerType' name='customerType' className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full" defaultValue="">
                        <option value="" disabled>Choose</option>
                        <option value="NEW">New</option>
                        <option value="MIGRATION">Migration</option>
                    </select>
                </div>

                <div className="form-control">
                    <label htmlFor="radioStatus">Radio Status</label>
                    <select id='radioStatus' name='radioStatus' className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full" defaultValue="">
                        <option value="" disabled>Choose</option>
                        <option value="NOT_RETRIEVED">Not Retrieved</option>
                        <option value="RETRIEVED">Retrieved</option>
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="text">MAC ID</label>
                    <input type="text" id='macId' name='macId' placeholder='Enter macId...' />
                </div>
                <div className="form-control">
                    <label htmlFor="text">Payment Ref</label>
                    <input type="text" id='PaymentRef' name='PaymentRef' placeholder='Enter PaymentRef...' />
                </div>
                <button className="form-button">Add Customer</button>
            </form>
        </main>
    )
}

export default AddCustomer;