import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero h-[100vh] bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/3mgHYsK/beautiful-car-commercial-night.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5 text-xl">Revolutionize Your Ride - Bringing You the Best of Automotive Excellence</p>
                    <Link to="/login"><button className="btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;