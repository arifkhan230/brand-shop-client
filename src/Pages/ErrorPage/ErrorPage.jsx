import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className=" w-full  h-screen text-center flex flex-col item-center justify-center">
                <h2 className="text-6xl font-bold text-amber-500">404</h2>          
                <h2 className="text-5xl font-bold text-amber-400 ">Error!! </h2>
                <p className="text-2xl font-bold my-4">Page not found</p>
                <Link to="/"><button className="btn btn-outline">Go Home</button></Link>
            
        </div>
    );
};

export default ErrorPage;