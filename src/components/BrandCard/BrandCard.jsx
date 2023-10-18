
import PropTypes from 'prop-types';

const BrandCard = ({ brand }) => {
    console.log(brand)
    return (
        <div className="card  bg-base-100 rounded-lg shadow ">
            <figure className="px-10 pt-10">
                <img src={brand.img} alt="Shoes" className="rounded-xl w-full h-60  object-contain" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-xl font-bold">{brand.brandName}</h2>
            </div>
        </div>
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object

};

export default BrandCard;