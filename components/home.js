// import React from 'react'
// import Image from 'next/image'
// import Img1 from "@/public/images/notebook.png"
// import Img2 from "@/public/images/glass.jpg"
// import Img3 from "@/public/images/wedding.png"

// const OurProduct = [
//   {
//     id: 1,
//     imageSrc: Img1,
//     Title:'NoteBook',
//   },
//   {
//     id: 2,
//     imageSrc: Img2,
//     Title:'Photo Phrames',
//   },
//   {
//     id: 3,
//     imageSrc: Img3,
//     Title:'Lether...',
//   },
//   {
//     id: 6,
//     imageSrc: Img3,
//     Title:'NoteBook',
//   },
//   {
//     id: 4,
//     imageSrc: Img1,
//     Title:'Photo Phrames',
//   },
//   {
//     id: 5,
//     imageSrc: Img3,
//     Title:'Lether...',
//   },
// ];

// function Home() {
//   return (
//     <div className="mt-10">
//     <div
//     className='mx-40 bg-cover bg-center w-fit h-96 rounded-3xl'
//       style={{
//         backgroundImage: `url("/images/bg.png")`, 
//       }}>
//        <div className='pl-10 pt-10'>
//        <h1 className="text-8xl text-white">Welcome to <span className="text-yellow-300">Adey Gifts</span></h1>
//        <h1 className='h-1 w-12 bg-white md:mt-6 mt-1'></h1>
//        <h3></h3>
//     </div>
//     </div>

//     <div className="mx-20 mt-12 mb-14">
//     <h1 className="text-center font-bold text-3xl">Our Products</h1>
//     <h1 className='h-1 md:w-14 w-10 bg-yellow-300 md:mt-4 mt-2 mx-auto my-auto'></h1>
//     </div>


//     <div className="mx-20 mt-5 mb-10">
//       <div className="grid grid-cols-3 gap-5 ">
//       {OurProduct.map((items) => (
//         <div 
//         key={items.id}
//         >
//         <div className="rounded">
//         <Image alt='adey photo ' src={items.imageSrc} className='h-full w-fit' />
//         <h1 className="text-center">{items.Title}</h1>
//         </div>
//         {/* <div className="border border-gray-900 rounded-3xl">
//         <Image alt='adey photo' src={Img2} className='h-80 w-60' />
//         <h1 className="text-center">NoteBook</h1>
//         </div>
//         <div className="border border-gray-900 rounded-3xl">
//         <Image alt='adey photo' src={Img1} className='h-80 w-60' />
//         <h1 className="text-center">NoteBook</h1>
//         </div> */}
//         </div>
//       ))}
//       </div>

//       <div className="mt-10 mb-16 mx-auto">
//         <button className='px-8 py-2 text-xl font-semibold border-yellow-300 border text-center text-black '>
//               See More
//         </button>
//       </div>

//       </div>

//       <div className="mx-6 bg-black rounded-lg px-16 py-8"> 
//         <div className="grid grid-cols-2 gap-">
//           <div className=" text-yellow-300">
//             <h1 className="text-5xl font-bold">Unusual Gifts</h1>
//             <h3 className="text-xl py-5">Our unique gifts collection</h3>
//             <button className='py-2 px-3 text-xl border border-yellow-300 text-white rounded-xl'>
//             Shop now
//             </button>
//           </div>
//           <div className="text-yellow-50 flex flex-wrap">
//           {/* <Image alt='adey photo ' src={items.imageSrc} className='' /> */}
//           </div>
//         </div>

//       </div>

//     <div className="mx-20 mt-14 mb-14">
//       <h1 className="text-center font-bold text-3xl">Relevant Gifts</h1>
//       <h1 className='h-1 md:w-14 w-10 bg-yellow-300 md:mt-4 mt-2 mx-auto my-auto'></h1>
//     </div>

//     <div className="">
//       <div className='grid grid-cols-2'>

//       </div>
//       <div className="grid grid-cols-2">

//       </div>
//     </div>

  
//     </div>
//   )
// }

// export default Home