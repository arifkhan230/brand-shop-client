import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold">Error!! </h2>
            <p className="text-xl font-bold">Page not found</p>
            <Link to="/"><button>Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;