
import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import BrandCard from "../../components/BrandCard/BrandCard";
import { Toaster } from "react-hot-toast";
import Review from "../../components/Review/Review";
import LatestCars from "../../components/LatestCars/LatestCars";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('https://brand-shop-server-ten-omega.vercel.app/brands')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBrands(data)
            })
    }, [])


    return (
        <div>
            <Helmet>
                <title>Car Wonders | Home</title>
            </Helmet>
            <Toaster></Toaster>
            <Banner></Banner>
            <div>
                <h2 className="text-3xl font-bold text-center my-12 "> All Brands </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 max-w-[1440px] lg:mx-auto mx-4">

                    {
                        brands && brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                    }
                </div>
            </div>
            <LatestCars></LatestCars>
            <Review></Review>
            <Footer></Footer>


        </div>
    );
};

export default Home;