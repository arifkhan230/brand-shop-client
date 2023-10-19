import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const loadedCharts = useLoaderData()
    const [carts, setCarts] = useState(loadedCharts)


    const handleDelete =(_id)=>{
        console.log('clicked')
        fetch(`http://localhost:5000/carts/${_id}`,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                const remaining = carts.filter(cart=> cart._id !== _id)
                setCarts(remaining)
                toast.success('Removed from cart successfully')
            }

        })
    }

    return (
        <div className="max-w-[1440px] lg:mx-auto pb-20">
            
            <div className="mx-4 lg:mx-0">
                {
                    carts.map(cart => <div key={cart._id}
                        className="relative flex flex-col w-full mt-6 md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                            <Toaster/>
                        <div className="relative lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 lg:rounded-xl bg-clip-border">
                            <img
                                src={cart.photo}
                                alt="image"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between">
                                <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal uppercase">
                                    {cart.name}
                                </h6>
                                <div>
                                    <p className="text-xl font-bold text-amber-600">Price: ${cart.price}</p>
                                </div>
                            </div>
                            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Brand: {cart.brand}
                            </h4>
                            <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                                {
                                    cart.description
                                }
                            </p>
                            <div className="flex justify-between ">
                                <button className="btn btn-outline">Place Order</button>
                                <button onClick={()=>handleDelete(cart._id)} className="btn btn-outline">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCart;