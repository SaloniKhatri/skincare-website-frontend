import React from 'react'

import { useCart } from '../context/cartContext';

import Image1 from '../assets/images/DryProduct1.png'
import Image2 from '../assets/images/Blueberry4.png'
import Image3 from '../assets/images/Blueberrysunscreen.png'
import Image4 from '../assets/images/BestsellerProduct8.png'
import Image5 from '../assets/images/Blueberry1.png'
import Image6 from '../assets/images/DryProduct6.png'
import Image7 from '../assets/images/DryProduct7.png'

import Image9 from '../assets/images/DryProduct9.png'
import Image10 from '../assets/images/DryProduct10.png'

import { AiFillStar } from "react-icons/ai";

const CeramidesProducts = () => {
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
      
        {/* id12 */}
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image9} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Strawberry Dew Sunscreen Stick SPF 50+ PA++++</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>All Skin Types</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.6</p></div>
              <div><p className='text-gray-600 font-semibold'>(314)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>20g</p>
            <p className='font-bold mt-5 text-lg'>Rs.595</p>
            <button
              onClick={() => {
                addToCart({
                  id: 12,
                  name: "Strawberry Dew Sunscreen Stick SPF 50+ PA++++",
                  price: 595,
                  image: Image9,
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
        {/* id11 */}
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image10} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>SPF 50+ Barrier Repair Hydrating Lip Balm</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>Dry Skin</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.7</p></div>
              <div><p className='text-gray-600 font-semibold'>(151)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>18g</p>
            <p className='font-bold mt-5 text-lg'>Rs.249</p>
            <button
              onClick={() => {
                addToCart({
                  id: 11,
                  name: "SPF 50+ Barrier Repair Hydrating Lip Balm",
                  price: 249,
                  image: Image10,
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

export default CeramidesProducts