import React from 'react'

function Sec3() {
  return (
    <div>
        <div className="mx-6 bg-black rounded-lg px-16 py-8"> 
        <div className="grid grid-cols-2 ">
          <div className=" text-yellow-300">
            <h1 className="text-5xl font-bold">Unusual Gifts</h1>
            <h3 className="text-xl py-5">Our unique gifts collection</h3>
            <button className='py-2 px-3 text-xl border border-yellow-300 text-white rounded-xl'>
            Shop now
            </button>
          </div>
          <div className="text-yellow-50 flex flex-wrap">
          {/* <Image alt='adey photo ' src={items.imageSrc} className='' /> */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Sec3