import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const product = useLoaderData()
    const {  name, photo, brand, description, price, ratting, type, } = product;
    // console.log(product)


    const handleAddToCart= ()=>{
        // console.log(_id)

        fetch('https://brand-shop-server-ten-omega.vercel.app/carts',{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            toast.success('Product successfully added to the Cart')
        })

    }

    return (
        <div className="bg-gray-800 min-h-screen">
            <Toaster></Toaster>
            <div className="max-w-[1440px] lg:mx-auto">
                <h2 className="text-3xl font-bold text-center py-10 text-white">Details Information</h2>

                <div className="flex flex-col lg:flex-row bg-white border rounded shadow-xl mx-4 lg:mx-0 ">
                    {/* image  */}
                    <div className="lg:w-1/2">
                        <img className="lg:h-[600px] w-full" src={photo} alt="" />
                    </div>
                    {/* details */}
                    <div className="lg:w-1/2 p-4 lg:p-8 space-y-6">
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <p className="text-xl font-bold">Brand: {brand}</p>
                        <p className="text-justify">{description}</p>
                        <p className="text-xl font-bold"> Type: {type}</p>
                        <p className="text-xl font-bold">Rating :{ratting}</p>
                        <p className="text-xl font-bold">Price: {price}</p>
                        <div>
                            <button onClick={handleAddToCart} className="btn btn-outline">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;