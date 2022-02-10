/* eslint-disable @next/next/no-img-element */

export default function Hero() {
  return (
    <div className='flex mx-auto relative items-center py-5 lg:py-0'>
      <img src='/hero.jpg' alt='Travel hero Image' className='w-full h-auto' />{" "}
      <div className='bg-red-300 w-1/2 h-1/2 absolute top-1/4 left-1/4 rounded-lg p-4'>
        div
      </div>
    </div>
  );
}

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
