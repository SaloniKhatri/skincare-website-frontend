
import React from 'react'

import { useCart } from '../context/cartContext';


import Image1 from '../assets/images/BestsellerProduct8.png'
import Image3 from '../assets/images/Acne7.jpg'
import Image2 from '../assets/images/Acne8.jpg'
import Image4 from '../assets/images/VitaminCFasewash.png'
import Image5 from '../assets/images/WatermelonFaceWash.png'

import { AiFillStar } from "react-icons/ai";


const FacewashProducts = () => {
    const { addToCart } = useCart();

    return (
        <>
            <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto gap-y-8'>
                {/* id40 */}
                <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image1} alt="" />
                    </div>
                    <div className='p-2'>
                        <p className='font-bold h-15'>Barrier Repair Gentlle Hydrating Face Wash</p>
                        <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>Moisturizers & Protects Skin</p>
                        <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
                            <div><AiFillStar className='text-green-600' /></div>
                            <div><p className='font-bold text-green-600'>  4.5</p></div>
                            <div><p className='text-gray-600 font-semibold'>(342)</p></div>
                        </div>

                        <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>175ml</p>
                        <p className='font-bold mt-5 text-lg'>Rs.375</p>
                        <button
                            onClick={() => {
                                addToCart({
                                    id: 40,
                                    name: "Barrier Repair Gentlle Hydrating Face Wash ",
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
                
                <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image2} alt="" />
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
                {/* id41 */}
                <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image4} alt="" />
                    </div>
                    <div className='p-2'>
                        <p className='font-bold h-15'>Vitamin C + E Gel Face Wash for Glowing Skin</p>
                        <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>All Skin Types</p>
                        <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
                            <div><AiFillStar className='text-green-600' /></div>
                            <div><p className='font-bold text-green-600'>  4.5</p></div>
                            <div><p className='text-gray-600 font-semibold'>(307)</p></div>
                        </div>

                        <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>175ml</p>
                        <p className='font-bold mt-5 text-lg'>Rs.375</p>
                        <button
                            onClick={() => {
                                addToCart({
                                    id: 41,
                                    name: "Vitamin C + E Gel Face Wash for Glowing Skin",
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
                {/* di42 */}
                <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image5} alt="" />
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
                        <img className='w-75 rounded-lg' src={Image3} alt="" />
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

export default FacewashProducts