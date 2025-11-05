import React from 'react'

import { useCart } from '../context/cartContext';

import Image1 from '../assets/images/WatermelonSunscreen.png'
import Image2 from '../assets/images/DryProduct13.png'
import Image3 from '../assets/images/WatermelonFaceWash.png'
import Image17 from '../assets/images/BSectionWatermelon7.png'


import { AiFillStar } from "react-icons/ai";


const WatermelonProducts = () => {
  const { addToCart } = useCart();

  return (
    <>
      <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto gap-y-8'>
        {/* id2 */}
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75 '>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image1} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Watermelon Cooling Hylauronic Sunscreen SPF 50+</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold '>Oily and Combination Skin</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.7</p></div>
              <div><p className='text-gray-600 font-semibold'>(583)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>80g</p>
            <p className='font-bold mt-5 text-lg'>Rs. 595</p>
            <button

              onClick={() => {
                addToCart({
                  id: 2,
                  name: "Watermelon Cooling Hylauronic Sunscreen SPF 50+",
                  price: 595,
                  image: Image1
                })
                alert("✅ Item added to cart!");

              }}
              type="button" className=' text-sm text-center text-white bg-rose-500 py-2 px-5 border rounded-lg font-bold w-full cursor-pointer mt-3'>ADD TO CART</button>

          </div>
        </div>
        {/* id52 */}
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image2} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Watermelon Cooling Hydrogel Eye Patches</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>All Skin Types</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.5</p></div>
              <div><p className='text-gray-600 font-semibold'>(270)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-21 mt-2 font-semibold'>30 Pairs</p>
            <p className='font-bold mt-5 text-lg'>Rs.895</p>
            <button
              onClick={() => {
                addToCart({
                  id: 52,
                  name: "Watermelon Cooling Hydrogel Eye Patches ",
                  price: 895,
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
        {/* di42 */}
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image3} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Watermelon Cooling Gel Face Wash</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>Normal, Oily & Combination Skin</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.8</p></div>
              <div><p className='text-gray-600 font-semibold'>(89)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>100ml</p>
            <p className='font-bold mt-5 text-lg'>Rs.249</p>
            <button
              onClick={() => {
                addToCart({
                  id: 42,
                  name: "Watermelon Cooling Gel Face Wash",
                  price: 249,
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
        {/* id142 */}
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image17} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Watermelon Cooling Icy Gel Moisturizer</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>Oily and Combination Skin</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.3</p></div>
              <div><p className='text-gray-600 font-semibold'>(219)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>60g</p>
            <p className='font-bold mt-5 text-lg'>Rs.495</p>
            <button
              onClick={() => {
                addToCart({
                  id: 142,
                  name: "Watermelon Cooling Icy Gel Moisturizer",
                  price: 249,
                  image: Image17,
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

export default WatermelonProducts
