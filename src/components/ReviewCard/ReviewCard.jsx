
import PropTypes from 'prop-types';

const ReviewCard = ({ review }) => {
    console.log(review)
    return (
        <div className="relative flex mx-4 lg:mx-0 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                <img
                    src={review.photo_url}
                    className='h-80 w-full object-cover rounded-t-md'
                    alt="ui/ux review check"
                />
            </div>
            <div className="p-6">
                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {review.customer_name}
                </h4>
                <p className="block mt-3 font-sans  antialiased font-normal leading-relaxed text-gray-700">
                    {review.review}
                </p>
            </div>
            
        </div>
    );
};

ReviewCard.propTypes = {
    review: PropTypes.object
};

export default ReviewCard;