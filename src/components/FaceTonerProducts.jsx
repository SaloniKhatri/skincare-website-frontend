


import React from 'react'

import { useCart } from '../context/cartContext';

import Image1 from '../assets/images/Blueberry1.png'
import Image2 from '../assets/images/Acne6.jpg'

// import Image2 from '../assets/images/VitaminCMoisturizer.png'
// import Image3 from '../assets/images/WatermelonSunscreen.png'
// import Image4 from '../assets/images/StrawberryTintedSunscreen.png'
// import Image5 from '../assets/images/BestsellerProduct5.png'
// import Image6 from '../assets/images/VitaminCSerum.png'
// import Image7 from '../assets/images/BestsellerProduct7.png'
// import Image8 from '../assets/images/BestsellerProduct8.png'

import { AiFillStar } from "react-icons/ai";


const FaceTonerProducts = () => {
    const { addToCart } = useCart();

    return (
        <>
            <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto gap-y-8'>
                <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image1} alt="" />
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



            </div>
        </>
    )
}

export default FaceTonerProducts