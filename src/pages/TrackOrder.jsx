import react from 'react'
import Logo  from '../assets/images/SkincareLogo.png'

const TrackOrder = () => {
    return (

        <>
            <div className='bg-gray-50 h-[800px] flex justify-center items-center'>
                <div className='h-[530px] w-[600px] flex justify-center items-center border-transparent rounded-md shadow-xl bg-white  '>
                    <div className='w-[500px] '>
                        <div className="flex justify-center">
                                                    <img className="w-30 text-center" src={Logo} alt="" />
                                                </div>
                        <div>
                            <h1 className='text-3xl text-center'>Track Your Order</h1>
                            <p className='text-lg  text-gray-800 my-4 text-center font-semibold'>Enter your order details to track your order</p>
                        </div>
                        <div className='space-y-4'>
                            <label htmlFor="" className='text-gray-600 font-semibold '>Order ID</label> <br />
                            <input type="text" className='border border-gray-400 rounded-md p-2 w-full ' placeholder='Enter Order ID' />
                            <br />

                            <label htmlFor="" className='text-gray-600 font-semibold'>Mobile</label> <br />
                            <input type="phone" className='border border-gray-400 rounded-md p-2 w-full' placeholder='Enter Mobile' />
                            <br />

                            <button type="button" className='text-xl text-white bg-pink-600 border rounded-lg p-3 w-full font-semibold mt-8 cursor-pointer'>Track Your Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default TrackOrder