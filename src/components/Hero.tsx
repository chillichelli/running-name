/* eslint-disable @next/next/no-img-element */

// export default function Hero() {
//   return (
//     <div className='flex mx-auto relative items-center py-5 lg:py-0'>
//       <img src='/hero.jpg' alt='Travel hero Image' className='w-full h-auto' />{" "}
//       <div className='bg-red-300 w-1/2 h-1/2 absolute top-1/4 left-1/4 rounded-lg p-4'>
//         div
//       </div>
//     </div>
//   );
// }

//  {/* <div className='flex justify-between'>
//       <div className='px-10 space-y-5'>
//         <h1 className='text-6xl max-w-xl font-serif text-white'>
//           Feel inspired to travel the world with Terra Travels.
//         </h1>
//       </div>
//      <img
//        src='/hero.jpg'
//        alt='Travel hero Image'
//        className='px-10 space-y-5'
//      />
//     </div> */}

import React, { useState } from "react";
function Index() {
  const [show, setShow] = useState(false);
  return (
    <div className='py-6 px-20 bg-gray-100 overflow-y-hidden'>
      <nav className='w-full'>
        <div className='container mx-auto px-6 flex items-center justify-between'>
          <div className='flex items-center group' aria-label='Home' role='img'>
            <img
              className='group-hover:cursor-pointer w-8 sm:w-auto'
              src='https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg1.svg'
              alt='logo'
            />
            <p className='group-hover:cursor-pointer ml-2 lg:ml-4 text-base lg:text-2xl font-thin font-mono text-gray-800'>
              terra travels
            </p>
          </div>
          <div>
            <button
              onClick={() => setShow(!show)}
              className='sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500'
            >
              <img
                className='h-8 w-8'
                src='https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg4.svg'
                alt='show'
              />
            </button>
            <div
              id='menu'
              className={`md:block lg:block ${show ? "" : "hidden"}`}
            >
              <button
                onClick={() => setShow(!show)}
                className='block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white md:bg-transparent z-30 top-0 mt-3'
              >
                <img
                  className='h-8 w-8'
                  src='https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg5.svg'
                  alt='hide'
                />
              </button>
              <ul className='flex text-3xl md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent  z-20'>
                <li className='text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0'>
                  <a>Get Started</a>
                </li>
                <li className='text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0'>
                  <a>Log in</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className='flex flex-col relative space-y-2 w-full h-full overflow-x-hidden border-2 border-black items-center'>
        <h1 className='border-2 border-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center leading-tight text-yellow-400 font-extrabold font-serif'>
          Your online travel planner
        </h1>
        <h3 className='border-2 border-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center leading-tight text-black font-serif'>
          Feel inspired at the click of a button.
        </h3>
        <div className='flex mx-auto text-black'>
          <button className='text-white bg-black border rounded-md shadow-md hover:bg-gray-700 hover:border-white lg:text-xl  transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-yellow-700	focus:ring-white px-4 sm:px-8 py-1 sm:py-3 text-sm'>
            Search Flights
          </button>
          <button className='text-white bg-black border rounded-md shadow-md hover:bg-gray-700 hover:border-white lg:text-xl  transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-yellow-700	focus:ring-white px-4 sm:px-8 py-1 sm:py-3 text-sm'>
            Inspire me
          </button>
        </div>
        <h1>This will be the flight search box</h1>
        <img src='hero.jpg' className='absolute bottom-0 opacity-20'></img>
      </div>

      {/* <div className="container mx-auto relative bg-yellow-500 p-5 border-2 border-black">
        <div className="p-10 bg-blue-300 flex flex-col mx-auto items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center leading-tight text-blue-800 font-bold">
            Travel anywhere, anytime
          </h1>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center leading-tight font-extrathin text-orange-500 ">
            Click the button!
          </h3>
          <div className="flex justify-center items-center mb-10 sm:mb-20 bg-blue-900">
            <button className="hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">
              Search Flights
            </button>
            <button className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">
              Inspire me!
            </button>
          </div>
          <img
            src="camp-4363073.svg"
            alt="banner"
            className="absolute bottom-0 left-0 max-w-screen-2xl max-h-96 border-8 border-black object-fill opacity-50"
          />
        </div>
      </div> */}
    </div>
  );
}

export default Index;
