import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const product = useLoaderData()
    const { _id, name, photo, brand, description, price, ratting, type, } = product;
    console.log(product)
    return (
        <div className="">
            <div className="max-w-[1440px] lg:mx-auto mt-12">
                <h2 className="text-3xl font-bold text-center my-10">Details Information</h2>

                <div className="flex flex-col lg:flex-row bg-white border rounded shadow-xl ">
                    {/* image  */}
                    <div className="lg:w-1/2">
                        <img className="h-full" src={photo} alt="" />
                    </div>
                    {/* details */}
                    <div className="lg:w-1/2 lg:p-8 space-y-6">
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <p className="text-xl font-bold">Brand: {brand}</p>
                        <p className="text-justify">{description}</p>
                        <p className="text-xl font-bold"> Type: {type}</p>
                        <p className="text-xl font-bold">Rating :{ratting}</p>
                        <p className="text-xl font-bold">Price: {price}</p>
                        <div>
                            <button className="btn btn-outline">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;