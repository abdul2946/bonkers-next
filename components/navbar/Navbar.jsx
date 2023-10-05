import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiUserBold } from "react-icons/pi";
import NavDrop from "./NavDrop";

const Navbar = () => {
    return (
        <nav className="py-4 px-8 flex justify-between">
            <div className="font-semibold font-serif font-mono text-4xl align-middle">
                BONKERS
            </div>
            <ul>
                <li className="inline-block align-middle p-4 hover:text-gray-500 font-semibold">
                    Men
                </li>
                <li className="inline-block align-middle p-4 hover:text-gray-500 font-semibold">
                    Women
                </li>
                <li className="inline-block align-middle p-4 hover:text-gray-500 font-semibold">
                    Accssories
                </li>
                <NavDrop
                    category="Collection"
                    subcategory={["Anime", "Marvel"]}
                />
            </ul>
            <div className="my-auto">
                <button className="hover:bg-gray-200 rounded-full p-2 text-xl">
                    <PiUserBold />
                </button>
                <button className="hover:bg-gray-200 rounded-full p-2 text-xl">
                    <MdOutlineShoppingCart />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
