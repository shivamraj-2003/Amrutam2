import React from 'react'
import p1 from "../components/p1.png"
import p2 from "../components/p2.png"
import p3 from "../components/p3.png"
import p4 from "../components/p4.png"
export default function Content2() {
    return (
        <div className='mt-6'>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 space-x-0 sm:space-x-4'>
                <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-gray-500 font-bold bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base sm:text-lg px-3 sm:px-5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Expertise
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 ms-2 sm:ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>
                <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-gray-500 font-bold bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base sm:text-lg px-3 sm:px-5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Gender
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 ms-2 sm:ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>
                <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-gray-500 font-bold bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base sm:text-lg px-3 sm:px-5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Fees
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 ms-2 sm:ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>
                <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-gray-500 font-bold bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base sm:text-lg px-3 sm:px-5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Languages
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 ms-2 sm:ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>
                <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-green-700 font-bold bg-green-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base sm:text-lg px-3 sm:px-5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    All filters
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 ms-2 sm:ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>
            </div>

            <div className='mt-4 border-t-2'>
                <div className='justify-end mt-16 sm:mt-24 md:mt-32 text-center flex flex-wrap space-y-4 sm:space-y-0 space-x-4 sm:space-x-8 mx-auto sm:mx-0 max-w-screen-lg'>
                    <h1 className='border rounded-3xl font-normal p-2 bg-gray-100 text-lg sm:text-xl md:text-lg lg:text-xl w-full sm:w-auto'>Hair Care <i className="text-gray-500 fa-solid fa-xmark"></i></h1>
                    <h1 className='border rounded-3xl bg-gray-100 text-lg sm:text-xl md:text-lg lg:text-xl p-2 w-full sm:w-auto'>Female <i className="mx-1 text-gray-500 fa-solid fa-xmark"></i></h1>
                    <h1 className='border rounded-3xl bg-gray-100 text-lg sm:text-xl md:text-lg lg:text-xl p-2 w-full sm:w-auto'>Rs.0-Rs.500 <i className="mx-1 text-gray-500 fa-solid fa-xmark"></i></h1>
                    <h1 className='border rounded-3xl bg-gray-100 text-lg sm:text-xl md:text-lg lg:text-xl p-2 w-full sm:w-auto'>Hindi <i className="mx-1 text-gray-500 fa-solid fa-xmark"></i></h1>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-center mt-16 space-y-10 md:space-y-0 md:space-x-10 '>
                <div className='bg-amber-50 mx-8 items-center justify-center border rounded-3xl  h-full p-10'>
                    {/* Content for the second component */ }<div className="relative">
                        <div className="flex items-center justify-center"> {/* Center the image */ }
                            <img className="w-44 h-56" src={ p1 } alt="Product Image" />
                        </div>

                        <div className="absolute top-0 left-0 mt-48 ml-48">
                            <div className="flex border text-center items-center bg-black rounded-2xl h-10 w-20 ">
                                <p className='font-bold mx-2 mt-1 text-white text-xl'>4.5</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className=" h-8 w-10 fill-current text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 1l2.45 6.36 6.54.36-5 4.36 1.82 6.23L10 15.54l-5.82 4.41 1.82-6.23-5-4.36 6.54-.36L10 1z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <h1 className='mt-4 text-center font-semibold text-5xl'>Dr. Prerna Narang</h1>
                    <div className='flex space-x-2 items-center justify-center'>
                        <img className='w-6' src={ p3 } />
                        <h1 className='mt-4 text-gray-600 font-light text-2xl text-center'>Male-female Infertility</h1>
                    </div>
                    <div className='flex space-x-2 items-center justify-center'>
                        <img className='w-8' src={ p2 } />

                        <h1 className='mt-1 text-gray-600 font-light text-2xl text-center'>7 years of Experience</h1>
                    </div>
                    <div className='space-x-2 flex items-center justify-center'>
                        <img className='w-6 h-6' src={ p4 } />

                        <h1 className='mt-1 text-gray-600 font-light text-2xl  text-center'>Speaks:English,Hindi,Marathi</h1>
                    </div>
                    <div className='flex mt-4 space-x-6 text-center'>
                        <h1 className='border-2  rounded-xl w-44 border-gray-300 mx-10 text-lg'>Video Consulatition<span className='text-green-800'><br /><i class="fa-solid fa-indian-rupee-sign"></i>800</span>
                        </h1>
                        <h1 className='text-lg border-2  rounded-xl w-44 border-gray-300'>Chat Consulatition<span className='text-green-800'><br />Free</span></h1>
                    </div>
                    <div class="mt-8 flex flex-col">
                        <button class="border-2 bg-white text-green-800 font-medium text-2xl border-green-700 h-16 rounded-xl">View Profile</button>
                        <button class="mt-4 border-2 bg-green-800 text-2xl font-medium text-white h-20 rounded-xl">Book a Consultation</button>
                    </div>
                </div>
                <div className='bg-amber-50 mx-8 items-center justify-center border rounded-3xl  h-full p-10'>
                    {/* Content for the second component */ }<div className="relative">
                        <div className="flex items-center justify-center"> {/* Center the image */ }
                            <img className="w-44 h-56" src={ p1 } alt="Product Image" />
                        </div>

                        <div className="absolute top-0 left-0 mt-48 ml-48">
                            <div className="flex border text-center items-center bg-black rounded-2xl h-10 w-20 ">
                                <p className='font-bold mx-2 mt-1 text-white text-xl'>4.5</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className=" h-8 w-10 fill-current text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 1l2.45 6.36 6.54.36-5 4.36 1.82 6.23L10 15.54l-5.82 4.41 1.82-6.23-5-4.36 6.54-.36L10 1z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <h1 className='mt-4 text-center font-semibold text-5xl'>Dr. Prerna Narang</h1>
                    <div className='flex space-x-2 items-center justify-center'>
                        <img className='w-6' src={ p3 } />
                        <h1 className='mt-4 text-gray-600 font-light text-2xl text-center'>Male-female Infertility</h1>
                    </div>
                    <div className='flex space-x-2 items-center justify-center'>
                        <img className='w-8' src={ p2 } />

                        <h1 className='mt-1 text-gray-600 font-light text-2xl text-center'>7 years of Experience</h1>
                    </div>
                    <div className='space-x-2 flex items-center justify-center'>
                        <img className='w-6 h-6' src={ p4 } />

                        <h1 className='mt-1 text-gray-600 font-light text-2xl  text-center'>Speaks:English,Hindi,Marathi</h1>
                    </div>
                    <div className='flex mt-4 space-x-6 text-center'>
                        <h1 className='border-2  rounded-xl w-44 border-gray-300 mx-10 text-lg'>Video Consulatition<span className='text-green-800'><br /><i class="fa-solid fa-indian-rupee-sign"></i>800</span>
                        </h1>
                        <h1 className='text-lg border-2  rounded-xl w-44 border-gray-300'>Chat Consulatition<span className='text-green-800'><br />Free</span></h1>
                    </div>
                    <div class="mt-8 flex flex-col">
                        <button class="border-2 bg-white text-green-800 font-medium text-2xl border-green-700 h-16 rounded-xl">View Profile</button>
                        <button class="mt-4 border-2 bg-green-800 text-2xl font-medium text-white h-20 rounded-xl">Book a Consultation</button>
                    </div>
                </div>
                <div className='bg-amber-50 mx-8 items-center justify-center border rounded-3xl h-full p-10'>
                    {/* Content for the second component */ }<div className="relative">
                        <div className="flex items-center justify-center"> {/* Center the image */ }
                            <img className="w-44 h-56" src={ p1 } alt="Product Image" />
                        </div>

                        <div className="absolute top-0 left-0 mt-48 ml-48 ">
                            <div className="flex border text-center items-center bg-black rounded-2xl h-10 w-20 ">
                                <p className='font-bold mx-2 mt-1 text-white text-xl'>4.5</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className=" h-8 w-10 fill-current text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 1l2.45 6.36 6.54.36-5 4.36 1.82 6.23L10 15.54l-5.82 4.41 1.82-6.23-5-4.36 6.54-.36L10 1z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <h1 className='mt-4 text-center font-semibold text-5xl'>Dr. Prerna Narang</h1>
                    <div className='flex space-x-2 items-center justify-center'>
                        <img className='w-6' src={ p3 } />
                        <h1 className='mt-4 text-gray-600 font-light text-2xl text-center'>Male-female Infertility</h1>
                    </div>
                    <div className='flex space-x-2 items-center justify-center'>
                        <img className='w-8' src={ p2 } />

                        <h1 className='mt-1 text-gray-600 font-light text-2xl text-center'>7 years of Experience</h1>
                    </div>
                    <div className='space-x-2 flex items-center justify-center'>
                        <img className='w-6 h-6' src={ p4 } />

                        <h1 className='mt-1 text-gray-600 font-light text-2xl  text-center'>Speaks:English,Hindi,Marathi</h1>
                    </div>
                    <div className='flex mt-4 space-x-6 text-center'>
                        <h1 className='border-2  rounded-xl w-44 border-gray-300 mx-10 text-lg'>Video Consulatition<span className='text-green-800'><br /><i class="fa-solid fa-indian-rupee-sign"></i>800</span>
                        </h1>
                        <h1 className='text-lg border-2  rounded-xl w-44 border-gray-300'>Chat Consulatition<span className='text-green-800'><br />Free</span></h1>
                    </div>
                    <div class="mt-8 flex flex-col">
                        <button class="border-2 bg-white text-green-800 font-medium text-2xl border-green-700 h-16 rounded-xl">View Profile</button>
                        <button class="mt-4 border-2 bg-green-800 text-2xl font-medium text-white h-20 rounded-xl">Book a Consultation</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
