
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({product} ) => {
    
    const { _id, name, photo, brand, description, price, ratting, type, } = product;
   
    return (
        <div className="card card-compact bg-white text-black shadow">
            <figure><img src={photo} className='w-full lg:h-[500px] object-cover' alt="Shoes" /></figure>
            <div className="card-body space-y-2 ">
                <h2 className="card-title">{name}</h2>
                <p className='text-sm'>{description.slice(0, 200)}</p>
                <p className='text-lg font-bold'>{brand}</p>
                <p className='text-lg font-medium'>Type: {type}</p>
                <p className='text-lg font-medium'>Rating: {ratting}</p>
                <p className='text-lg font-medium text-blue-600'>Price: ${price} </p>
                <div className="flex gap-4 justify-between">
                    <div className='flex-grow'>
                        <Link
                            to={`/update/${_id}`}>
                                
                            <button
                                className="btn btn-outline w-full ">Update
                            </button>
                        </Link>
                    </div>
                    <div className='flex-grow'>
                        <Link
                            to={`/details/${_id}`}>
                            <button
                                className="btn btn-primary w-full ">See Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object
};

export default ProductCard;