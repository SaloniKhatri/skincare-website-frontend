import react from 'react'
import { Route, Routes } from 'react-router-dom'
import { IoIosArrowDropright } from "react-icons/io";
import { MdOutlineCardGiftcard } from "react-icons/md";
import BestSellerBanner from '../assets/images/BestSellerMainImage.png'
import BestSellerCard from '../components/BestSellerCard';

const BestSeller = () => {
    return (
        <>

            <div>
                <div>
                    <div className='text-4xl font-bold bg-purple-100 p-5 flex flex-row justify-center items-center '>
                        <span className='text-purple-500 text-4xl pe-6'>Flat 15% Off</span>
                        <span className=' font-medium pe-1'>+Free Gifts </span>
                        <span className='pt-1 ps-1'><MdOutlineCardGiftcard className='text-purple-500' /></span>
                        <span className='text-gray-400 pt-1 ps-4 cursor-pointer'><IoIosArrowDropright /></span>
                    </div>
                </div>
                <div>
                    <img src={BestSellerBanner} alt="" className='w-full' />

                </div>
            </div>

            <div className='container m-auto my-12'>
                <p className='text-4xl font-bold text-center mb-4'>Best Sellers</p>
                <BestSellerCard />

            </div>


        </>
    )
}
export default BestSeller