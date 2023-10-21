
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
    // console.log(brand)
    return (
        <Link to={`/brandPage/${brand.brandName}`}>
            <div className="card bg-white rounded-lg shadow-xl border ">
                <figure className="px-10 pt-10">
                    <img src={brand.img} alt="Shoes" className="rounded-xl w-full h-60  object-contain" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl font-bold">{brand.brandName}</h2>
                </div>
            </div>
        </Link>
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object

};

export default BrandCard;