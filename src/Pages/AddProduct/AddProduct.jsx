

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

        const product = {name,description,brand,type,price,ratting,photo}
         console.log(product)
    }

    return (
        <div className="mx-4 lg:mx-0 bg-blue-400 bg-cover">
            <div className="max-w-[1440px] lg:mx-auto py-10 lg:py-20  lg:p-10">
                <h2 className=" text-3xl font-bold text-center mb-8 text-white">Add New Product</h2>
                <form onSubmit={handleAddProduct} className="lg:w-3/4 lg:mx-auto space-y-8 px-4">
                    {/* product name */}
                    <div >

                        <label className="input-group   ">
                            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* product details */}
                    <div>

                        <label className="input-group">
                            <input type="text" name="details" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* brand name */}
                    <div>

                        <label className="input-group">
                            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* product type*/}
                    <div>

                        <label className="input-group">
                            <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* product price */}
                    <div>

                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* ratting */}
                    <div>

                        <label className="input-group">
                            <input type="text" name="ratting" placeholder="Ratting" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Photo*/}
                    <div>

                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div>
                        <button className="btn bg-purple-400 text-white w-full" type="submit">Add</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;