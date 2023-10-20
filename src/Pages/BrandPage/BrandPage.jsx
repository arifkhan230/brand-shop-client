// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import BrandPageSlider from "../../components/BrandPageSlider/BrandPageSlider";


const BrandPage = () => {
    const products = useLoaderData()
    console.log(products.length)
    if(products.length==0){
        return <p>No Product available right now</p>
    }

    return (
        <div>
            <BrandPageSlider></BrandPageSlider>
            <div>
                <h2 className="text-4xl font-bold text-center my-10">Our latest Cars</h2>
            <div className="max-w-[1440px] lg:mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 lg:px-0 py-10">
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}>
                    </ProductCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default BrandPage;