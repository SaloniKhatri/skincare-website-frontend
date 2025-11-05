
import React from 'react'

import { useCart } from '../context/cartContext';

import Image1 from '../assets/images/Acne1.jpg'
import Image2 from '../assets/images/Acne2.jpg'
import Image3 from '../assets/images/Acne3.jpg'
import Image5 from '../assets/images/BestsellerProduct.png'
import Image6 from '../assets/images/Acne6.jpg'
import Image7 from '../assets/images/Acne7.jpg'
import Image8 from '../assets/images/Acne8.jpg'

import { AiFillStar } from "react-icons/ai";

const CicaProducts = () => {
  const { addToCart } = useCart();

  return (
    <>
      <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 mx-auto'>
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image1} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Cica (Centella) + Niacinamide Oil Free Moisturizer</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>Oily & Acne-Prone Skin</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.6</p></div>
              <div><p className='text-gray-600 font-semibold'>(346)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>60g</p>
            <p className='font-bold mt-5 text-lg'>Rs. 495</p>
            <button
              onClick={() => {
                addToCart({
                  id: 89,
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
            <p className='font-bold h-15'>Cica + Niacinamide Matte Sunscreen SPF 50+ PA++++</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold '>Oily & Acne-Prone Skin</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.4</p></div>
              <div><p className='text-gray-600 font-semibold'>(289)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>80g</p>
            <p className='font-bold mt-5 text-lg'>Rs.595</p>
            <button
              onClick={() => {
                addToCart({
                  id: 90,
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
            <p className='font-bold h-15'>Cica Calming Night Gel (Niacinamide + Green Tea)</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold '>Oily & Acne-Prone Skin</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.8</p></div>
              <div><p className='text-gray-600 font-semibold'>(449)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>60ml</p>
            <p className='font-bold mt-5 text-lg'>Rs.495</p>
            <button
              onClick={() => {
                addToCart({
                  id: 91,
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
            <img className='w-75 rounded-lg' src={Image8} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Cica + Salicyclic Gel Face Wash - Pack of 2</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>Oily & Acne-Prone Skin</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.7</p></div>
              <div><p className='text-gray-600 font-semibold'>(543)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>350ml</p>
            <p className='font-bold mt-5 text-lg'>Rs.750</p>
            <button
              onClick={() => {
                addToCart({
                  id: 96,
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
        
        <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
          <div className=''>
            <img className='w-75 rounded-lg' src={Image6} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Cica + Niacinamide Toner with Green Tea</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>Oily, Acne-Prone & Sensitive  Skin</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.8</p></div>
              <div><p className='text-gray-600 font-semibold'>(97)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>150ml</p>
            <p className='font-bold mt-5 text-lg'>Rs.395</p>
            <button
              onClick={() => {
                addToCart({
                  id: 94,
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
            <img className='w-75 rounded-lg' src={Image5} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>Cica + 10% Niacinamide Face Serum for Oily Skin</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>Oily, Acne-Prone & Sensitive Skin</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.5</p></div>
              <div><p className='text-gray-600 font-semibold'>(368)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>30ml</p>
            <p className='font-bold mt-5 text-lg'>Rs. 599</p>
            <button
              onClick={() => {
                addToCart({
                  id: 93,
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
            <img className='w-75 rounded-lg' src={Image7} alt="" />
          </div>
          <div className='p-2'>
            <p className='font-bold h-15'>cica + Salicyclic Gel Face Wash 100g - Pack of 2</p>
            <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>Oily & Acne-Prone Skin</p>
            <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
              <div><AiFillStar className='text-green-600' /></div>
              <div><p className='font-bold text-green-600'>  4.7</p></div>
              <div><p className='text-gray-600 font-semibold'>(543)</p></div>
            </div>

            <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>200ml</p>
            <p className='font-bold mt-5 text-lg'>Rs.498</p>
            <button
              onClick={() => {
                addToCart({
                  id: 95,
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
        

      </div>

    </>
  )
}

export default CicaProducts