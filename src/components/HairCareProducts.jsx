


import React from 'react'

import { useCart } from '../context/cartContext';



import { AiFillStar } from "react-icons/ai";


const HairCareProducts = () => {
    const { addToCart } = useCart();

    return (
        <>
            <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto gap-y-8'>
                {/* id60 */}

            </div>
        </>
    )
}

export default HairCareProducts