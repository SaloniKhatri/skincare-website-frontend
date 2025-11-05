import React from 'react'
import { useCart } from '../context/cartContext';


import Image1 from '../assets/images/Acne4.jpg'
import Image2 from '../assets/images/BestsellerProduct5.png'
import Image3 from '../assets/images/DryProduct22.png'

import { AiFillStar } from "react-icons/ai";

const SensitiveProducts = () => {
  return (
    <>
      <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto gap-y-8'>
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75 '>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image1} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Barrier Repair Gentle Hydrating Face Wash</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold '>Normal, Dry & Sensitive Skin</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.5</p></div>
              <div><p className='text-gray-600 font-semibold'>(342)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-18 mt-2 font-semibold text-center'>175ml</p>
            <p className='font-bold mt-5 text-lg'>Rs.375</p>
            <button
              onClick={() => {
                addToCart({
                  id: 92,
                  name: "Barrier Repair Gentle Hydrating Face Wash ",
                  price: 375,
                  image: Image1,
                });
                alert("✅ Item added to cart!");
              }}
              type="button"
              className="text-sm text-center text-white bg-rose-500 py-2 px-5 border rounded-lg font-bold w-full cursor-pointer mt-3"
            >
              ADD TO CART
            </button>
          </div>
        </div>
        {/* id10 */}
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image2} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Barrier Repair Moisturizer (Hyaluronic + Ceramides)</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>Dry and Sensitive Skin</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.7</p></div>
              <div><p className='text-gray-600 font-semibold'>(635)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>175g</p>
            <p className='font-bold mt-5 text-lg'>Rs. 599</p>
            <button
              onClick={() => {
                addToCart({
                  id: 10,
                  name: "Barrier Repair Moisturizer (Hyaluronic + Ceramides) ",
                  price: 599,
                  image: Image2,
                });
                alert("✅ Item added to cart!");
              }}
              type="button"
              className="text-sm text-center text-white bg-rose-500 py-2 px-5 border rounded-lg font-bold w-full cursor-pointer mt-3"
            >
              ADD TO CART
            </button>
          </div>
        </div>

        {/* id58 */}
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image3} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Barrier Repair Hyaluronic Acid Body Lotion</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>Normal, Dry & Sensitive Skin </p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.7</p></div>
              <div><p className='text-gray-600 font-semibold'>(61)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-18 mt-2 font-semibold'>250ml</p>
            <p className='font-bold mt-5 text-lg'>Rs.395</p>
            <button
              onClick={() => {
                addToCart({
                  id: 58,
                  name: "Barrier Repair Hyaluronic Acid Body Lotion ",
                  price: 395,
                  image: Image3,
                });
                alert("✅ Item added to cart!");
              }}
              type="button"
              className="text-sm text-center text-white bg-rose-500 py-2 px-5 border rounded-lg font-bold w-full cursor-pointer mt-3"
            >
              ADD TO CART
            </button>
          </div>
        </div>

      </div>

    </>
  )
}

export default SensitiveProducts