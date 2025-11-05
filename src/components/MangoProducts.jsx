import React from 'react'

import { useCart } from '../context/cartContext';

import Image16 from '../assets/images/BSectionMango6.png'
import Image20 from '../assets/images/BSectionMango10.png'

import { AiFillStar } from "react-icons/ai";

const MangoProducts = () => {
  const { addToCart } = useCart();
  return (
    <>

      <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto gap-y-8'>
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image20} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Mango Detan Gel Face Wash</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>All Skin Types</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.6</p></div>
              <div><p className='text-gray-600 font-semibold'>(68)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>100ml</p>
            <p className='font-bold mt-5 text-lg'>Rs.249</p>
            <button
              onClick={() => {
                addToCart({
                  id: 190,
                  name: "Mango Detan Gel Face Wash",
                  price: 249,
                  image: Image20,
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
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image16} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Mango + Detan Gel Sunscreen (Oil Free), SPF 50+ PA++++</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>For all Skin Types</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.4</p></div>
              <div><p className='text-gray-600 font-semibold'>(276)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>80g</p>
            <p className='font-bold mt-5 text-lg'>Rs.595</p>
            <button
              onClick={() => {
                addToCart({
                  id: 191,
                  name: "Mango + Detan Gel Sunscreen (Oil Free), SPF 50+ PA++++",
                  price: 595,
                  image: Image16,
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

export default MangoProducts