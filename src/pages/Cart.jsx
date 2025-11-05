import React from 'react';
import { useCart } from '../context/cartContext';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Logo from '../assets/images/SkincareLogo.png'


const CartPage = () => {
    const { cartItems, removeFromCart, clearCart, increaseQty, decreaseQty } = useCart();

    const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    const navigate = useNavigate();

    function handleShopNowClick() {
        navigate('/shop-all');
    }

    return (
        <>
            <div style={{ backgroundColor: 'rgb(246 241 249)' }}>

                <div className='bg-gray-50  sm:w-full sm:h-full lg:w-full lg:h-full flex justify-center items-center'>
                    <div className=' sm:w-full sm:h-full lg:w-full lg:h-full flex justify-center items-center border-transparent rounded-md  bg-white  '>
                        <div className=''>
                            <div className="flex justify-center">
                                <img className="w-30 text-center" src={Logo} alt="" />
                                

                            </div>
                             <h1 className='text-4xl text-center my-4 font-bold text-pink-600'>Your Cart</h1>
                            <div>
              

                                {cartItems.length === 0 ? (
                                    <div>
                                        <h1 className='text-3xl text-center'>Your Cart is Empty</h1>
                                        <p className='text-lg  text-gray-800 my-4 text-center font-semibold'>Add items to it now 🛒</p>
                                        <div className=' text-center mb-4'>
                                            <button onClick={handleShopNowClick} type="button" className=' w-60 cursor-pointer text-xl text-white bg-pink-600 border rounded-lg p-3 font-semibold mt-4'>Shop Now</button>
                                        </div>
                                    </div>

                                ) : (
                                    <>
                                        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
                                            {cartItems.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className=" mb-4 flex items-center"
                                                    style={{
                                                        border: '1px solid #ddd',
                                                        borderRadius: '10px',
                                                        padding: '15px',
                                                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                                                        background: '#fff',
                                                    }}
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        style={{ width: '80px', height: '80px', borderRadius: '8px', marginRight: '20px', objectFit: 'cover' }}
                                                    />
                                                    <div className="flex-grow">
                                                        <h5 className='font-semibold text-sm mb-4'>{item.name}</h5>

                                                        <div className="flex align-items-center mb-4">
                                                            <button
                                                                className="px-2 text-sm font-bold border border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition"

                                                                onClick={() => decreaseQty(item.id)}
                                                                disabled={item.qty <= 1}
                                                            >−</button>

                                                            <span className="mx-2">{item.qty}</span>

                                                            <button
                                                                className="px-2 text-sm font-bold border border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition"

                                                                onClick={() => increaseQty(item.id)}
                                                            >+</button>
                                                        </div>

                                                        <p className=" text-gray-700">₹{item.price} x {item.qty} = ₹{item.price * item.qty}</p>

                                                    </div>

                                                    <button
                                                        className=""
                                                        style={{
                                                            backgroundColor: '#f8d7da', // soft rose
                                                            color: '#c62744',
                                                            padding: '0.5rem 1rem',
                                                            borderRadius: '8px',
                                                            border: 'none',
                                                        }}
                                                        onClick={() => removeFromCart(item.id)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            ))}
                                        </div>

                                        <h4 className="text-end mt-4">Total: ₹{total}</h4>
                                        <div className="flex justify-between mb-10 mt-2"
>
                                            <div className="text-center mt-3 mb-1">
                                                <button
                                                    className=" text-white font-semibold bg-pink-600 px-4 py-3 border-none rounded-xl w-40"
                                                    onClick={clearCart}>
                                                    Clear Cart
                                                </button>
                                            </div>
                                            <div className='text-center mt-5'>

                                                <Link to="/checkout" className="text-white font-semibold bg-pink-600 px-4 py-3 border-none rounded-xl w-50">
                                                    Proceed to Checkout
                                                </Link>

                                            </div>




                                        </div>

                                    </>
                                )}
                            </div>

                        </div>
                    </div>
                </div>




            </div>


        </>

    );
};

export default CartPage;
