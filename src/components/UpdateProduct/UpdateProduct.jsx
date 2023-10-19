import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {
    const product = useLoaderData()
    const { _id, name, photo, brand, description, price, ratting, type, } = product;

    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const description = form.details.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const ratting = form.ratting.value;
        const photo = form.photo.value;

        const product = { name, description, brand, type, price, ratting, photo }
        console.log(product)

        // updating data using put method
        fetch(`http://localhost:5000/products/${_id}`,{
            method:"PUT",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            toast.success('Product Updated Successfully')
        })
    }
    return (
        <div className="lg:mx-0 lg:bg-[url('https://i.ibb.co/p1ztVxx/Tesla-Model-X.jpg')] bg-cover bg-fixed">
            <Toaster></Toaster>
            <div className="max-w-[1440px] lg:mx-auto lg:py-20">
                <div className="lg:w-3/4 mx-auto bg-white py-20 px-4">
                    <h2 className=" text-3xl font-bold text-center mb-8">Update Product</h2>
                    <form onSubmit={handleUpdate} className="lg:w-3/4 lg:mx-auto space-y-4 px-4">
                        {/* product name */}
                        <div >
                            <label className="label">
                                <span className="label-text text-lg text-bold">Product Name</span>
                            </label>
                            <label className="input-group   ">
                                <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* product details */}
                        <div>
                            <label className="label">
                                <span className="label-text text-lg text-bold">Product Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={description} name="details" placeholder="Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* brand name */}
                        <div>
                            <label className="label">
                                <span className="label-text text-lg text-bold">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* product type*/}
                        <div>
                            <label className="label">
                                <span className="label-text text-lg text-bold">Product Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" defaultValue={type} placeholder="Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* product price */}
                        <div>
                            <label className="label">
                                <span className="label-text text-lg text-bold">Product Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* ratting */}
                        <div>
                            <label className="label">
                                <span className="label-text text-lg text-bold">Rating</span>
                            </label>

                            <label className="input-group">
                                <input type="text" name="ratting" defaultValue={ratting} placeholder="Ratting" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* Photo*/}
                        <div>
                            <label className="label">
                                <span className="label-text text-lg text-bold">Product Photo</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div>
                            <button
                                className="btn bg-purple-400 text-white w-full"
                                type="submit">Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdateProduct;