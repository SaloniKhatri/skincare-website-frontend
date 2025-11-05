

import React from 'react'

import { useCart } from '../context/cartContext';


import Image1 from '../assets/images/VitaminCMoisturizer.png'
import Image2 from '../assets/images/BestsellerProduct5.png'
import Image3 from '../assets/images/BestsellerProduct7.png'
import Image4 from '../assets/images/Acne1.jpg'
import Image5 from '../assets/images/DryProduct17.png'

// import Image7 from '../assets/images/WatermelonSunscreen.png'

import Image6 from '../assets/images/VitaminCSerum.png'
import Image8 from '../assets/images/BestsellerProduct8.png'

import { AiFillStar } from "react-icons/ai";


const MoisturizerProducts = () => {
    const { addToCart } = useCart();

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

                <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image4} alt="" />
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
                                    name: "Cica (Centella) + Niacinamide Oil Free Moisturizer ",
                                    price: 495,
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
                 {/* id12 */}
                <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image5} alt="" />
                    </div>
                    <div className='p-2'>
                        <p className='font-bold h-15'>Strawberry + Niacinamide Moisturizer</p>
                        <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>All Skin Types</p>
                        <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
                            <div><AiFillStar className='text-green-600' /></div>
                            <div><p className='font-bold text-green-600'>  4.6</p></div>
                            <div><p className='text-gray-600 font-semibold'>(65)</p></div>
                        </div>

                        <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>80g</p>
                        <p className='font-bold mt-5 text-lg'>Rs.399</p>
                        <button
                            onClick={() => {
                                addToCart({
                                    id: 12,
                                    name: "Strawberry + Niacinamide Moisturizer",
                                    price: 399,
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
               


                {/* <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75 '>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image3} alt="" />
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
                                    id: 11,
                                    name: "Watermelon Cooling Hylauronic Sunscreen SPF 50+",
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
                </div> */}
                {/* <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image4} alt="" />
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
                                    id: 12,
                                    name: "Strawberry Dew Tinted Sunscreen SPF 50+ PA++++",
                                    price: 549,
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
                </div> */}

                {/* <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image6} alt="" />
                    </div>
                    <div className='p-2'>
                        <p className='font-bold h-15'>10% Vitamin C + E Face Serum with 5% Niacinamide</p>
                        <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>All Skin Types</p>
                        <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
                            <div><AiFillStar className='text-green-600' /></div>
                            <div><p className='font-bold text-green-600'>  4.6</p></div>
                            <div><p className='text-gray-600 font-semibold'>(466)</p></div>
                        </div>

                        <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>30ml</p>
                        <p className='font-bold mt-5 text-lg'>Rs.695</p>
                        <button
                            onClick={() => {
                                addToCart({
                                    id: 14,
                                    name: "10% Vitamin C + E Face Serum with 5% Niacinamide ",
                                    price: 695,
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
                </div> */}

                {/* <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image8} alt="" />
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
                                    id: 16,
                                    name: "Barrier Repair Gentlle Hydrating Face Wash ",
                                    price: 375,
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
                </div> */}


            </div>
        </>
    )
}

export default MoisturizerProducts