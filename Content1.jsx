import React from 'react';

export default function Content1() {
    return (
        <div className='items-center border h-auto bg-gray-100 py-10 md:py-20'>
            <h1 className='font-poppins text-center text-black text-3xl md:text-5xl lg:text-6xl font-normal'>Find Expert Doctors For An In-Clinic Session Here</h1>

            <form className="max-w-lg mt-10 mx-auto">
                <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                    <label htmlFor="search-dropdown" className="sr-only">Your Email</label>
                    <div className="relative md:w-48">
                        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex items-center justify-between w-full py-4 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100">
                            <span>Select Location</span>
                            <svg className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div id="dropdown" className="absolute z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-48 md:w-auto">
                            <ul className="py-2 font-bold text-gray-700">
                                <li>
                                    <button type="button" className="w-full px-4 py-2 hover:bg-gray-100">Mockups</button>
                                </li>
                                <li>
                                    <button type="button" className="w-full px-4 py-2 hover:bg-gray-100">Templates</button>
                                </li>
                                <li>
                                    <button type="button" className="w-full px-4 py-2 hover:bg-gray-100">Design</button>
                                </li>
                                <li>
                                    <button type="button" className="w-full px-4 py-2 hover:bg-gray-100">Logos</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative flex-1">
                        <input type="search" id="search-dropdown" className="block w-full p-4 font-semibold text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="eg. Doctor, specialization, clinic name" required />
                    </div>
                </div>
            </form>
        </div>
    );
}
