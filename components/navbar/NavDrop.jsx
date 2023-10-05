"use client";
import React from "react";
import { motion } from "framer-motion";

const NavDrop = ({ category, subcategory }) => {
    return (
        <li className="inline-block align-middle p-4 hover:text-gray-500 font-semibold">
            <div className="group relative">
                <motion.button
                    className="group"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "tween", duration: 0.3 }}
                >
                    {category}
                </motion.button>
                <ul className="rounded bg-white absolute hidden pt-1 group-hover:block w-56 z-10 shadow-lg shadow-gray-100">
                    {subcategory.map((data, index) => {
                        return (
                            <motion.li
                                className="text-black py-2 px-4 cursor-pointer"
                                key={index}
                                whileHover={{ scale: 1.1, originX: 0 }}
                                transition={{ type: "tween", duration: 0.3 }}
                            >
                                {data}
                            </motion.li>
                        );
                    })}
                </ul>
            </div>
        </li>
    );
};

export default NavDrop;
