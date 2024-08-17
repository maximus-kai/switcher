import React from 'react'

const SearchInstallation = () => {
  return (
    <form className='border flex flex-row  w-fit justify-between h-full relative rounded-full '>
          <input className=' border text-cente rounded-full p-[10px]' type='text' id='search' name='search' placeholder='Search Customer' />
      <button className="px-4 py-2 bg-indigo-600 text-xl absolute right-[4px] top-[8%] text-white rounded-full  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 border-white shadow">Find</button>
    </form>
  )
}

export default SearchInstallation