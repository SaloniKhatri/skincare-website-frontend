import React from 'react'
import { useCart } from '../context/cartContext';

import Image1 from '../assets/images/VitaminCMoisturizer.png'
import Image2 from '../assets/images/WatermelonSunscreen.png'
import Image3 from '../assets/images/BestsellerProduct7.png'


import Image6 from '../assets/images/Acne12.jpg'

import { AiFillStar } from "react-icons/ai";

const CombinationProducts = () => {
  return (
    <>
      <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto gap-y-8'>
        {/* id9 */}
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75 '>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image1} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Vitamin C + E Moisturizer for Glowing Skin</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold '>Oil & combination Skin</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.7</p></div>
              <div><p className='text-gray-600 font-semibold'>(1097)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>60ml</p>
            <p className='font-bold mt-5 text-lg'>Rs.495</p>
            <button

              onClick={() => {
                addToCart({
                  id: 9,
                  name: 'Vitamin C + E Moisturizer for Glowing Skin',
                  price: 495,
                  image: Image1
                })
                alert("✅ Item added to cart!");

              }}
              type="button" className=' text-sm text-center text-white bg-rose-500 py-2 px-5 border rounded-lg font-bold w-full cursor-pointer mt-3'>ADD TO CART</button>

          </div>
        </div>

        {/* id2 */}
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75 '>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image2} alt="" />
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
                  image: Image2
                })
                alert("✅ Item added to cart!");

              }}
              type="button" className=' text-sm text-center text-white bg-rose-500 py-2 px-5 border rounded-lg font-bold w-full cursor-pointer mt-3'>ADD TO CART</button>

          </div>
        </div>
        {/* id11 */}
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image3} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>72HR Hydrating Gel Moisturizer + Probiotics</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>Oily and Combination Skin</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.7</p></div>
              <div><p className='text-gray-600 font-semibold'>(797)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>60ml</p>
            <p className='font-bold mt-5 text-lg'>Rs.495</p>
            <button
              onClick={() => {
                addToCart({
                  id: 11,
                  name: "72HR Hydrating Gel Moisturizer + Probiotics",
                  price: 495,
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
         <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                            <div className=''>
                                <img className='w-75 rounded-lg' src={Image6} alt="" />
                            </div>
                            <div className='p-2'>
                                <p className='font-bold h-15'>SPF 50+ Cica & Niacinamide Sunscreen 50g - Pack of 2</p>
                                <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>Oily and Combination Skin</p>
                                <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
                                    <div><AiFillStar className='text-green-600' /></div>
                                    <div><p className='font-bold text-green-600'>  4.4</p></div>
                                    <div><p className='text-gray-600 font-semibold'>(289)</p></div>
                                </div>
        
                                <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>100g</p>
                                <p className='font-bold mt-5 text-lg'>Rs.890</p>
                                <button
                                    onClick={() => {
                                        addToCart({
                                            id: 96,
                                            name: "SPF 50+ Cica & Niacinamide Sunscreen 50g - Pack of 2",
                                            price: 890,
                                            image: Image6,
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

export default CombinationProducts