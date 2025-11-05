import React from 'react'


import Image1 from '../assets/images/Blogimg1.png'
import Image2 from '../assets/images/Blogimg2.png'
import Image3 from '../assets/images/Blogimg3.png'
import Image4 from '../assets/images/Blogimg4.png'
import Image5 from '../assets/images/Blogimg5.png'
import Image6 from '../assets/images/Blogimg6.png'
import Image7 from '../assets/images/Blogimg7.png'
import Image8 from '../assets/images/Blogimg8.png'
import Image9 from '../assets/images/Blogimg9.png'
import Image10 from '../assets/images/Blogimg10.png'
import Image11 from '../assets/images/Blogimg11.png'
// import Image12 from '../assets/images/Blogimg12.png'



import { AiFillStar } from "react-icons/ai";

const BlogCard = () => {
    return (
        <>
            <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 mx-auto'>
                <div className='border border-gray-100 rounded-4xl m-4 shadow-lg '>
                    <div className=''>
                        <img className=' rounded-lg' src={Image1} alt="" />
                    </div>
                    <div className='p-6'>
                        <p className='font-bold h-15 text-pink-500'>HOW TO GET RID OF PUFFY EYES: SIMPLE AND EFFECTIVE TIPS</p>
                        <p className='pt-1 text-sm text-black mt-1 font-semibold'>Easy and effective tips to reduce puffy eyes, refresh your look, and revive tired skin instantle.</p>
                        <p className='text-sm text-rose-500  mt-2 font-semibold '>Raj | 19 Aug 2025 </p>      
                        <button type="button" className=' text-sm text-center text-white bg-black py-2 px-5 border rounded-lg font-bold w-40 cursor-pointer mt-3'>Read More </button>
                    </div>
                </div>
                <div className='border border-gray-100 rounded-4xl m-4 shadow-lg'>
                    <div className=''>
                        <img className=' rounded-lg' src={Image2} alt="" />
                    </div>
                       <div className='p-6'>
                        <p className='font-bold h-15 text-pink-500'>HOW TO USE SHOWER GEL FOR LONG-LASTING FRESHNESS</p>
                        <p className='pt-1 text-sm text-black mt-1 font-semibold'>LEarn the correct way to use shower gel for soft skin, deep cleansing, and long-lasting freshness.</p>
                        <p className='text-sm text-rose-500  mt-2 font-semibold '>Moumota | 18 Aug 2025 </p>      
                        <button type="button" className=' text-sm text-center text-white bg-black py-2 px-5 border rounded-lg font-bold w-40 cursor-pointer mt-3'>Read More </button>
                    </div>
                </div>
                <div className='border border-gray-100 rounded-4xl m-4 shadow-lg '>
                    <div className=''>
                        <img className=' rounded-lg' src={Image3} alt="" />
                    </div>
                        <div className='p-6'>
                        <p className='font-bold h-15 text-pink-500'>3 WAYS TO USE TINTED SUNSCREEN FOR A FLAWLESS GLOW</p>
                        <p className='pt-1 text-sm text-black mt-1 font-semibold'>Find out easy ways to use tinted sunscreen for flawless coverage, sun protection, and a natural, radiant glow all day.</p>
                        <p className='text-sm text-rose-500  mt-2 font-semibold '>Sanchari | 16 Aug 2025 </p>      
                        <button type="button" className=' text-sm text-center text-white bg-black py-2 px-5 border rounded-lg font-bold w-40 cursor-pointer mt-3'>Read More </button>
                    </div>
                </div>
                <div className='border border-gray-100 rounded-4xl m-4 shadow-lg '>
                    <div className=''>
                        <img className=' rounded-lg' src={Image4} alt="" />
                    </div>
                       <div className='p-6'>
                        <p className='font-bold h-15 text-pink-500'>GEL, OIL, OR WATER-BASED SERUMS: WHICH WORKS BEST?</p>
                        <p className='pt-1 text-sm text-black mt-1 font-semibold'>Confused between serum types? Compare gel, oil, and water-based formulas to find what suits your skin.</p>
                        <p className='text-sm text-rose-500  mt-2 font-semibold '>Editorial Desk | 12 Aug 2025 </p>      
                        <button type="button" className=' text-sm text-center text-white bg-black py-2 px-5 border rounded-lg font-bold w-40 cursor-pointer mt-3'>Read More </button>
                    </div>
                </div>
                <div className='border border-gray-100 rounded-4xl m-4 shadow-lg '>
                    <div className=''>
                        <img className=' rounded-lg' src={Image5} alt="" />
                    </div>
                       <div className='p-6'>
                        <p className='font-bold h-15 text-pink-500'>TINTED VS UN-TINTED SUNSCREEN: WHICH ONE SHOULD YOU CHOOSE?</p>
                        <p className='pt-1 text-sm text-black mt-1 font-semibold'>Discover tinted vs untinted sunscreen differences- coverage, protection, and skin benefits. Which is best for you? Get expert tips for glowing, protected skin. Click to choose wiaely!</p>
                        <p className='text-sm text-rose-500  mt-2 font-semibold '>Moumita | 9 Aug 2025 </p>      
                        <button type="button" className=' text-sm text-center text-white bg-black py-2 px-5 border rounded-lg font-bold w-40 cursor-pointer mt-3'>Read More </button>
                    </div>
                </div>
                <div className='border border-gray-100 rounded-4xl m-4 shadow-lg '>
                    <div className=''>
                        <img className=' rounded-lg' src={Image6} alt="" />
                    </div>
                      <div className='p-6'>
                        <p className='font-bold h-15 text-pink-500'>5 ANTI-AGING BENEFITS OF USING SUNSCREEN DAILY</p>
                        <p className='pt-1 text-sm text-black mt-1 font-semibold'>Daily sunscreen isn't just for sunny days! Explore powerful anti-ageing benefits of SPF and why it's your skin's best defence against premature ageing.</p>
                        <p className='text-sm text-rose-500  mt-2 font-semibold '>Sanchari | 2 Aug 2025 </p>      
                        <button type="button" className=' text-sm text-center text-white bg-black py-2 px-5 border rounded-lg font-bold w-40 cursor-pointer mt-3'>Read More </button>
                    </div>
                </div>
                <div className='border border-gray-100 rounded-4xl m-4 shadow-lg '>
                    <div className=''>
                        <img className=' rounded-lg' src={Image7} alt="" />
                    </div>
                    <div className='p-6'>
                        <p className='font-bold h-15 text-pink-500'>HOW TO REAPPLY SUNSCREEN OVER MAKEUP WITHOUT RUINING IT</p>
                        <p className='pt-1 text-sm text-black mt-1 font-semibold'>Learn smart ways to reapply sunscreen over makeup without smudging or ruining your look. Stay protected and flawless all day!</p>
                        <p className='text-sm text-rose-500  mt-2 font-semibold '>Raj | 30 July 2025 </p>      
                        <button type="button" className=' text-sm text-center text-white bg-black py-2 px-5 border rounded-lg font-bold w-40 cursor-pointer mt-3'>Read More </button>
                    </div>
                </div>
                <div className='border border-gray-100 rounded-4xl m-4 shadow-lg '>
                    <div className=''>
                        <img className=' rounded-lg' src={Image8} alt="" />
                    </div>
                       <div className='p-6'>
                        <p className='font-bold h-15 text-pink-500'>FACE WASH VS SOAP: WHY YOU SHOULD AVOID SOAP ON YOUR FACE</p>
                        <p className='pt-1 text-sm text-black mt-1 font-semibold'>Using soap on your face? Learn why dermatologists recommend face wash over soap for healthy, balanced skin.</p>
                        <p className='text-sm text-rose-500  mt-2 font-semibold '>Rashi | 27 July 2025 </p>      
                        <button type="button" className=' text-sm text-center text-white bg-black py-2 px-5 border rounded-lg font-bold w-40 cursor-pointer mt-3'>Read More </button>
                    </div>
                </div>
                <div className='border border-gray-100 rounded-4xl m-4 shadow-lg '>
                    <div className=''>
                        <img className=' rounded-lg' src={Image9} alt="" />
                    </div>
                      <div className='p-6'>
                        <p className='font-bold h-15 text-pink-500'>10 SPF APPLICATION HACKS: HOW TO MAXIMIZE SUN PROTECTION</p>
                        <p className='pt-1 text-sm text-black mt-1 font-semibold'>Find out the smart SPF hacks to boost your sun protection! Learn how to apply sunscreen the right way for full coverage and longer-lasting results.</p>
                        <p className='text-sm text-rose-500  mt-2 font-semibold '>Raj | 24 July 2025 </p>      
                        <button type="button" className=' text-sm text-center text-white bg-black py-2 px-5 border rounded-lg font-bold w-40 cursor-pointer mt-3'>Read More </button>
                    </div>
                </div>
                <div className='border border-gray-100 rounded-4xl m-4 shadow-lg '>
                    <div className=''>
                        <img className=' rounded-lg' src={Image10} alt="" />
                    </div>
                      <div className='p-6'>
                        <p className='font-bold h-15 text-pink-500'>gIFT IDEAS FOR YOUR FAVOURITE THEY'LL ACTUALLY LOVE</p>
                        <p className='pt-1 text-sm text-black mt-1 font-semibold'>Here are so many gifts ideas! Explore budget-friendly & personalized options they'll love!</p>
                        <p className='text-sm text-rose-500  mt-2 font-semibold '>Editorial Desk | 19 July 2025 </p>      
                        <button type="button" className=' text-sm text-center text-white bg-black py-2 px-5 border rounded-lg font-bold w-40 cursor-pointer mt-3'>Read More </button>
                    </div>
                </div>
                <div className='border border-gray-100 rounded-4xl m-4 shadow-lg'>
                    <div className=''>
                        <img className=' rounded-lg' src={Image11} alt="" />
                    </div>
                      <div className='p-6'>
                        <p className='font-bold h-15 text-pink-500'>HOW TO EXFOLIATE YOUR FACE AT HOME? A GUIDE TO GLOWING SKIN</p>
                        <p className='pt-1 text-sm text-black mt-1 font-semibold'>Step-by-step guide to exfoliating at home for smooth, glowing, and healthy skin.</p>
                        <p className='text-sm text-rose-500  mt-2 font-semibold '>Sanchari | 12 July 2025 </p>      
                        <button type="button" className=' text-sm text-center text-white bg-black py-2 px-5 border rounded-lg font-bold w-40 cursor-pointer mt-3'>Read More </button>
                    </div>
                </div>
                {/* <div className='border border-gray-100 rounded-lg m-4 shadow-lg w-75'>
                    <div className=''>
                        <img className='w-75 rounded-lg' src={Image12} alt="" />
                    </div>
                    <div className='p-2'>
                        <p className='font-bold h-15'>Lip Plumping Mask with Vitamin C + E </p>
                        <p className='pt-1 text-xs text-gray-600 mt-1 font-semibold'>For Dry, Pigmented Lips</p>
                        <div className='flex flex-row space-x-2 items-center mt-2 text-sm'>
                            <div><AiFillStar className='text-green-600' /></div>
                            <div><p className='font-bold text-green-600'> 4.7</p></div>
                            <div><p className='text-gray-600 font-semibold'>(361)</p></div>
                        </div>

                        <p className='text-sm px-4 border border-rose-500 rounded-lg text-rose-500 w-18 mt-2 font-semibold'>15ml</p>
                        <p className='font-bold mt-5 text-lg'>Rs.259</p>
                        <button type="button" className=' text-sm text-center text-white bg-rose-500 py-2 px-5 border rounded-lg font-bold w-full cursor-pointer mt-3'>ADD TO CART</button>

                    </div>
                </div> */}



            </div>
        </>
    )
}

export default BlogCard
