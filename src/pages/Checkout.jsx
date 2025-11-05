// import React from 'react';

// const Checkout = () => {
//   return (
//     <>
//     <div>Checkout</div>
//     </>
//     );

// };

// export default Checkout;


import React, { useState } from "react";
import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.pincode
    ) {
      alert("Please fill all the fields!");
      return;
    }

    // In future: send order to backend
    alert("Order placed successfully! 🎉");
    clearCart();
    navigate("/shop-all");
  };

  return (
    <div style={{ backgroundColor: "rgb(246 241 249)" }} className="min-h-screen py-10">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">Checkout</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-pink-500">Shipping Details</h3>
            <form onSubmit={handlePlaceOrder} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none"
              />
              <textarea
                name="address"
                placeholder="Full Address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-1/2 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none"
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-1/2 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-700 transition-all text-white py-3 rounded-lg font-semibold mt-4"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Right Side - Order Summary */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-pink-500">Order Summary</h3>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b border-gray-200 pb-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md border"
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        <p className="text-sm text-gray-600">
                          Qty: {item.qty} × ₹{item.price}
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold text-gray-700">₹{item.price * item.qty}</p>
                  </div>
                ))}

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between font-semibold text-lg text-gray-800">
                    <span>Total:</span>
                    <span>₹{total}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
