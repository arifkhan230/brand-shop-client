import toast, { Toaster } from "react-hot-toast";


const AddProduct = () => {

    const handleAddProduct = (event) => {
        event.preventDefault()
        console.log('working')
        const form = event.target;
        const name = form.name.value;
        const description = form.details.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const ratting = form.ratting.value;
        const photo = form.photo.value;

        const product = { name, description, brand, type, price, ratting, photo }

        // clearing field
        // form.reset()

        //  sending product to server

        fetch('https://brand-shop-server-ten-omega.vercel.app/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    toast.success('Product added successfully')
                }
            })
    }

    return (
        <div className="lg:mx-0 lg:bg-[url('https://i.ibb.co/p1ztVxx/Tesla-Model-X.jpg')] bg-cover bg-fixed">
           
            <div className="max-w-[1440px] lg:mx-auto lg:py-20">
                <div className="lg:w-3/4 mx-auto bg-white py-20 px-4">
                    <h2 className=" text-3xl font-bold text-center mb-8">Add New Product</h2>
                    <form onSubmit={handleAddProduct} className="lg:w-3/4 lg:mx-auto space-y-4 px-4">
                        {/* product name */}
                        <div >
                            <label className="label">
                                <span className="label-text text-lg text-bold">Product Name</span>
                            </label>
                            <label className="input-group   ">
                                <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* product details */}
                        <Toaster></Toaster>
                        <div>
                            <label className="label">
                                <span className="label-text text-lg text-bold">Product Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* brand name */}
                        <div>
                        <label className="label">
                                <span className="label-text text-lg text-bold">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* product type*/}
                        <div>
                        <label className="label">
                                <span className="label-text text-lg text-bold">Product Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* product price */}
                        <div>
                        <label className="label">
                                <span className="label-text text-lg text-bold">Product Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* ratting */}
                        <div>
                        <label className="label">
                                <span className="label-text text-lg text-bold">Rating</span>
                            </label>

                            <label className="input-group">
                                <input type="text" name="ratting" placeholder="Ratting" className="input input-bordered w-full" />
                            </label>
                        </div>
                        {/* Photo*/}
                        <div>
                        <label className="label">
                                <span className="label-text text-lg text-bold">Product Photo</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div>
                            <button className="btn bg-purple-400 text-white w-full" type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;