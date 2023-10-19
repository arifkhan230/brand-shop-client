import car1 from '../../assets/1234.jpg'
import car2 from '../../assets/21c0053_001.jpg'
import car3 from '../../assets/kevin-bonilla-YPfnvLc3bbQ-unsplash.jpg'

const LatestCars = () => {
    return (
        <div className=''>
            <h2 className="text-3xl font-bold text-center my-12">Our Latest Car Gallery</h2>
            <div className='flex flex-col lg:flex-row gap-4 w-screen lg:mx-auto'>
                <img className='lg:w-1/3 h-[600px] object-cover' src={car1} alt="" />
                <img className='lg:w-1/3 h-[600px] object-cover' src={car2} alt="" />
                <img className='lg:w-1/3 h-[600px] object-cover' src={car3} alt="" />
            </div>
        </div>
    );
};

export default LatestCars;