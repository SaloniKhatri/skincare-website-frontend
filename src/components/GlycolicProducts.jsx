
import React from 'react'

import { useCart } from '../context/cartContext';

import Image1 from '../assets/images/WatermelonToner.png'
import Image2 from '../assets/images/WatermelonSerummm.png'
import Image3 from '../assets/images/GylcolicshowerGel.png'
import Image4 from '../assets/images/WatermelonRollon.png'


import { AiFillStar } from "react-icons/ai";

const GlycolicProducts = () => {
  const { addToCart } = useCart();

  return (
    <>
      <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 mx-auto'>
        {/* id401 */}
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image1} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Watermelon + Glycolic Acid Pore Tightening Toner</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>Oily, Combination & Normal Skin </p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.5</p></div>
              <div><p className='text-gray-600 font-semibold'>(101)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>150ml</p>
            <p className='font-bold mt-5 text-lg'>Rs.395</p>
            <button
              onClick={() => {
                addToCart({
                  id: 401,
                  name: "Watermelon + Glycolic Acid Pore Tightening Toner",
                  price: 395,
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
        {/* id402 */}
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75 '>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image2} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Watermelon & 10% Gylcolic Serum</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold '>Normal, Oil & combination Skin</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.4</p></div>
              <div><p className='text-gray-600 font-semibold'>(61)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>30ml</p>
            <p className='font-bold mt-5 text-lg'>Rs.599</p>
            <button
              onClick={() => {
                addToCart({
                  id: 402,
                  name: "Watermelon & 10% Gylcolic Serum ",
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
        {/* id403 */}
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image3} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Watermelon Cooling Glycolic Acid Shower Gel</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>All Skin Types</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.6</p></div>
              <div><p className='text-gray-600 font-semibold'>(61)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>250ml</p>
            <p className='font-bold mt-5 text-lg'>Rs.349</p>
            <button
              onClick={() => {
                addToCart({
                  id: 403,
                  name: "Watermelon Cooling Glycolic Acid Shower Gel",
                  price: 349,
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
        {/* id404 */}
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image4} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Watermelon Underarm Roll On</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>All Skin Types</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.2</p></div>
              <div><p className='text-gray-600 font-semibold'>(58)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>50ml</p>
            <p className='font-bold mt-5 text-lg'>Rs.299</p>
            <button
              onClick={() => {
                addToCart({
                  id: 404,
                  name: "Watermelon Underarm Roll On ",
                  price: 299,
                  image: Image4,
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

export default GlycolicProducts
