import React from 'react'
import { useCart } from '../context/cartContext';

import Image1 from '../assets/images/VitaminCSunscreenListing1.png'
import Image2 from '../assets/images/WatermelonSunscreen.png'
import Image3 from '../assets/images/StrawberryTintedSunscreen.png'
import Image4 from '../assets/images/Acne2.jpg'


import { AiFillStar } from "react-icons/ai";


const Card = () => {
    const { addToCart } = useCart();

    return (
        <>

            <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto '>
                {/* id1 */}
                <div className=' border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image1} alt="" />
                    </div>
                    <div className='p-2'>
                        <p className='font-bold h-15'>Vitamin C + E Sunscreen, SPF 50+ <br /> PA ++++</p>
                        <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>All Skin Types</p>
                        <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
                            <div><AiFillStar className='text-green-600' /></div>
                            <div><p className='font-bold text-green-600'>  4.7</p></div>
                            <div><p className='text-gray-600 font-semibold'>(828)</p></div>
                        </div>

                        <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>80g</p>
                        <p className='font-bold mt-5 text-lg'>Rs. 595</p>
                        <button
                            onClick={() => {
                                addToCart({
                                    id: 1,
                                    name: "Vitamin C + E Sunscreen, SPF 50+ PA ++++",
                                    price: 598,
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
                {/* id3 */}
                <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image3} alt="" />
                    </div>
                    <div className='p-2'>
                        <p className='font-bold h-15'>Strawberry Dew Tinted Sunscreen SPF 50+ PA++++</p>
                        <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>All Skin Types</p>
                        <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
                            <div><AiFillStar className='text-green-600' /></div>
                            <div><p className='font-bold text-green-600'>  4.5</p></div>
                            <div><p className='text-gray-600 font-semibold'>(327)</p></div>
                        </div>

                        <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>60g</p>
                        <p className='font-bold mt-5 text-lg'>Rs. 549</p>
                        <button
                            onClick={() => {
                                addToCart({
                                    id: 3,
                                    name: "Strawberry Dew Tinted Sunscreen SPF 50+ PA++++",
                                    price: 549,
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
                        <img className='w-75 rounded-lg' src={Image4} alt="" />
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

export default Card