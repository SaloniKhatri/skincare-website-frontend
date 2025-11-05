


import React from 'react'

import { useCart } from '../context/cartContext';

import Image1 from '../assets/images/DryProduct1.png'
import Image2 from '../assets/images/Blueberry4.png'
import Image3 from '../assets/images/Blueberrysunscreen.png'
import Image4 from '../assets/images/BestsellerProduct8.png'
import Image5 from '../assets/images/Blueberry1.png'
import Image6 from '../assets/images/DryProduct6.png'
import Image7 from '../assets/images/DryProduct7.png'
import Image8 from '../assets/images/DryProduct8.png'

import { AiFillStar } from "react-icons/ai";

const DrynessProducts = () => {
     const { addToCart } = useCart();
  
  return (
    <>
      <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 mx-auto'>
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image1} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Barrier Repair Moisturizer (Hylauronic + Ceramides)</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>Dry & Sensitive Skin</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.7</p></div>
              <div><p className='text-gray-600 font-semibold'>(635)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold text-center'>175g</p>
            <p className='font-bold mt-5 text-lg'>Rs.599</p>
            <button
              onClick={() => {
                addToCart({
                  id: 113,
                  name: "Barrier Repair Moisturizer (Hylauronic + Ceramides) ",
                  price: 599,
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
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image2} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>12% Barrier Boost Serum (Hylauronic + Ceramides)</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>All Skin Types</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.4</p></div>
              <div><p className='text-gray-600 font-semibold'>(270)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-18 mt-2 font-semibold'>30ml</p>
            <p className='font-bold mt-5 text-lg'>Rs.599</p>
            <button
              onClick={() => {
                addToCart({
                  id: 114,
                  name: "12% Barrier Boost Serum (Hylauronic + Ceramides) ",
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
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image3} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Barrier Repair Hydrtaing Sunscreen SPF 50+ PA++++</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>All Skin Types</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.5</p></div>
              <div><p className='text-gray-600 font-semibold'>(334)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>80g</p>
            <p className='font-bold mt-5 text-lg'>Rs.595</p>
            <button
              onClick={() => {
                addToCart({
                  id: 115,
                  name: "Barrier Repair Hydrtaing Sunscreen SPF 50+ PA++++ ",
                  price: 595,
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
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75 '>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image4} alt="" />
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
                  id: 116,
                  name: "Barrier Repair Gentle Hydrating Face Wash ",
                  price: 375,
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
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image5} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Blueberry Hydrate Barrier Repair Milk Face Toner </p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>All Skin Types</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.6</p></div>
              <div><p className='text-gray-600 font-semibold'>(13)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-18 mt-2 font-semibold '>150ml</p>
            <p className='font-bold mt-5 text-lg'>Rs.449</p>
            <button
              onClick={() => {
                addToCart({
                  id: 117,
                  name: "Blueberry Hydrate Barrier Repair Milk Face Toner  ",
                  price: 449,
                  image: Image5,
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
            <p className='font-bold h-15'>Hyaluronic & Ceramides Hydrating Face Serum</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'> All Skin Types</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.6</p></div>
              <div><p className='text-gray-600 font-semibold'>(608)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-18 mt-2 font-semibold'>30ml</p>
            <p className='font-bold mt-5 text-lg'>Rs.665</p>
            <button
              onClick={() => {
                addToCart({
                  id: 118,
                  name: "Hyaluronic & Ceramides Hydrating Face Serum ",
                  price: 665,
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
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image7} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Blueberry Hydrate Barrier Rice Water Toner</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>All Skin Types</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.9</p></div>
              <div><p className='text-gray-600 font-semibold'>(105)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-18 mt-2 font-semibold'>150ml</p>
            <p className='font-bold mt-5 text-lg'>Rs.395</p>
            <button
              onClick={() => {
                addToCart({
                  id: 119,
                  name: "Blueberry Hydrate Barrier Rice Water Toner ",
                  price: 395,
                  image: Image7,
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
            <img className='w-75 rounded-lg' src={Image8} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>10% Vitamin C + E Face Serum with 5% Niacinamide</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>All Skin Types</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.6</p></div>
              <div><p className='text-gray-600 font-semibold'>(468)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-18 mt-2 font-semibold'>30ml</p>
            <p className='font-bold mt-5 text-lg'>Rs.695</p>
            <button
              onClick={() => {
                addToCart({
                  id: 120,
                  name: "10% Vitamin C + E Face Serum with 5% Niacinamide",
                  price: 695,
                  image: Image8,
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

export default DrynessProducts