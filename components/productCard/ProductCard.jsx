import React from "react";

const ProductCard = ({
    status,
    productImage,
    productName,
    originalPrice,
    discountedPrice,
}) => {
    return (
        <div className="rounded-md shadow-lg overflow-hidden w-72">
            <img src={productImage} alt="" className="h-full w-full object-cover aspect-[9:16]"/>
            <div className="my-4 space-y-1 p-2">
                <span className="text-orange-600 bg-gray-200 p-1 rounded-full">{status}</span>
                <p className="text-2xl font-bold">{productName}</p>
                <div>
                    <a className="mr-5 font-semibold">{originalPrice}</a>
                    <a className="text-gray-600 line-through">{discountedPrice}</a>
                </div>
                <div className="">
                    <button className="py-2 px-4 bg-black hover:bg-white hover:text-black hover:border-black border-2 rounded text-white">Add to Cart</button>
                    <button className="mx-2">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
