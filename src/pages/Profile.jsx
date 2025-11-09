import React, { useContext } from "react";
import { formDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

import { IoIosArrowDropright } from "react-icons/io";
import { MdOutlineCardGiftcard } from "react-icons/md";

const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { formData, logout } = useContext(formDataContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="">
            <div>
                <div className='text-4xl font-bold bg-purple-100 p-5 flex flex-row justify-center items-center '>
                    <span className='text-purple-500 text-4xl pe-6'>Flat 25% Off</span>
                    <span className=' font-medium pe-1'>+Free Gifts </span>
                    <span className='pt-1 ps-1'><MdOutlineCardGiftcard className='text-purple-500' /></span>
                    <span className='text-gray-400 pt-1 ps-4 cursor-pointer'><IoIosArrowDropright /></span>
                </div>
            </div>

            <h1 className="text-3xl font-bold ps-6 pt-6">Account </h1>

            {formData ? (
                <div className="ps-6 pb-4">
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <button
                        onClick={handleLogout}
                        className="mt-1 font-semibold underline text-black cursor-pointer"
                    >
                        Logout
                    </button>
                    <h1 className="text-lg font-bold mt-6 ">Order History </h1>
                    <p className="text-xs font-semibold   text-gray-700">You haven't placed any order yet </p>



                </div>
            ) : (
                <p>Please login first.</p>
            )}
        </div>
    );
};

export default Profile;
