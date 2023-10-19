import { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";


const Review = () => {
    const [reviews, setReviews] = useState([])
    console.log(reviews)

    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setReviews(data)
        })
    },[])
    
    return (
        <div className="max-w-[1440px] mx-auto mt-12">
            <h2 className="text-3xl font-bold text-center my-10"> Our Satisfied Customer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    reviews.map(review=> <ReviewCard 
                        key={review._id}
                        review={review}
                        ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;