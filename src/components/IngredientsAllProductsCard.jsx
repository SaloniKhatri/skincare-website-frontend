import React from 'react'
import { useCart } from '../context/cartContext';

import Image1 from '../assets/images/WatermelonSunscreen.png'
import Image2 from '../assets/images/DryProduct13.png'
import Image3 from '../assets/images/WatermelonFaceWash.png'
import Image4 from '../assets/images/LimeSunscreen.png'
import Image5 from '../assets/images/LimeFacewash.png'
import Image6 from '../assets/images/Acne6.jpg'
import Image7 from '../assets/images/Acne7.jpg'
import Image8 from '../assets/images/Acne8.jpg'
import Image9 from '../assets/images/DryProduct6.png'
import Image11 from '../assets/images/VitaminCSunscreenListing1.png'
import Image12 from '../assets/images/VitaminCMoisturizer.png'
import Image13 from '../assets/images/VitaminCSerum.png'
import Image14 from '../assets/images/VitaminCFasewash.png'
import Image16 from '../assets/images/BSectionMango6.png'
import Image20 from '../assets/images/BSectionMango10.png'
import Image17 from '../assets/images/BSectionWatermelon7.png'


import { AiFillStar } from "react-icons/ai";

const IngredientsAllProductsCard = () => {
    const { addToCart } = useCart();
    return (
        <>
            <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto gap-y-8'>
                {/* id205 */}
                <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image5} alt="" />
                    </div>
                    <div className='p-2'>
                        <p className='font-bold h-15'>Lime Rush Sports Facewash</p>
                        <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>Normal, Oily & Combination Skin </p>
                        <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
                            <div><AiFillStar className='text-green-600' /></div>
                            <div><p className='font-bold text-green-600'>  4.6</p></div>
                            <div><p className='text-gray-600 font-semibold'>(264)</p></div>
                        </div>

                        <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>100ml</p>
                        <p className='font-bold mt-5 text-lg'>Rs.249</p>
                        <button
                            onClick={() => {
                                addToCart({
                                    id: 194,
                                    name: "Lime Rush Sports Facewash ",
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
                <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image4} alt="" />
                    </div>
                    <div className='p-2'>
                        <p className='font-bold h-15'>Swim + Sports Sunscreen SPF 50+ (Water Resistant)</p>
                        <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>All Skin Types</p>
                        <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
                            <div><AiFillStar className='text-green-600' /></div>
                            <div><p className='font-bold text-green-600'> 4.7</p></div>
                            <div><p className='text-gray-600 font-semibold'>(67)</p></div>
                        </div>

                        <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-18 mt-2 font-semibold'>50g</p>
                        <p className='font-bold mt-5 text-lg'>Rs.495</p>
                        <button
                            onClick={() => {
                                addToCart({
                                    id: 193,
                                    name: "Swim + Sports Sunscreen SPF 50+ (Water Resistant) ",
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

                {/* id201 */}
                <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image11} alt="" />
                    </div>
                    <div className='p-2'>
                        <p className='font-bold h-15'>Vitamin C + E Sunscreen, SPF 50+ PA ++++</p>
                        <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>All Skin Types</p>
                        <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
                            <div><AiFillStar className='text-green-600' /></div>
                            <div><p className='font-bold text-green-600'>  4.7</p></div>
                            <div><p className='text-gray-600 font-semibold'>(830)</p></div>
                        </div>

                        <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>80g</p>
                        <p className='font-bold mt-5 text-lg'>Rs.595</p>
                        <button
                            onClick={() => {
                                addToCart({
                                    id: 201,
                                    name: "Vitamin C + E Sunscreen, SPF 50+ PA ++++ ",
                                    price: 595,
                                    image: Image11,
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
                {/* id202 */}
                <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75 '>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image12} alt="" />
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
                                    id: 202,
                                    name: "Vitamin C + E Moisturizer for Glowing Skin ",
                                    price: 495,
                                    image: Image12,
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
                {/* id203 */}
                <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image13} alt="" />
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
                                    id: 203,
                                    name: "10% Vitamin C + E Face Serum with 5% Niacinamide",
                                    price: 695,
                                    image: Image13,
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
                {/* id204 */}
                <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image14} alt="" />
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
                                    id: 204,
                                    name: "Barrier Repair Moisturizer (Hylauronic + Ceramides) ",
                                    price: 375,
                                    image: Image14,
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
                                        <img className='w-75 rounded-lg' src={Image9} alt="" />
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


            </div>



        </>
    )
}

export default IngredientsAllProductsCard