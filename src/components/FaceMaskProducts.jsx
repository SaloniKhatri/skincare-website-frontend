


import React from 'react'

import { useCart } from '../context/cartContext';

import Image1 from '../assets/images/VitaminCClayMask.png'


import { AiFillStar } from "react-icons/ai";


const FaceMaskProducts = () => {
    const { addToCart } = useCart();

    return (
        <>
            <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto gap-y-8'>
                {/* id49 */}
                <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image1} alt="" />
                    </div>
                    <div className='p-2'>
                        <p className='font-bold h-15'>Vitamin C Pink Clay Mask</p>
                        <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>All Skin Types</p>
                        <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
                            <div><AiFillStar className='text-green-600' /></div>
                            <div><p className='font-bold text-green-600'>  4.6</p></div>
                            <div><p className='text-gray-600 font-semibold'>(971)</p></div>
                        </div>

                        <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-15 mt-2 font-semibold'>85g</p>
                        <p className='font-bold mt-5 text-lg'>Rs.550</p>
                        <button
                            onClick={() => {
                                addToCart({
                                    id: 49,
                                    name: "Vitamin C Pink Clay Mask",
                                    price: 550,
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
                

            </div>
        </>
    )
}

export default FaceMaskProducts