import image1 from '../../assets/ford-explorer-elettrica-2023.jpg'
import image2 from '../../assets/Toyota_bZ4X_(5)_1618804199440_1646036554364.jpg'
import image3 from '../../assets/white-offroader-jeep-parking (2).jpg'

const BrandPageSlider = () => {
    return (
        <div className=" max-h-[70vh] relative ">
            <div className="carousel lg:h-[70vh] w-full z-40 ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={image1} className="w-full object-contain lg:object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} className="w-full object-contain lg:object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image3} className="w-full object-contain lg:object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* <div id="slide4" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
            </div>
            <div className='flex justify-center text-justify items-center absolute -bottom-5 left-28 lg:top-0 lg:right-96 lg:left-96  z-50'>
                <p className='lg:text-5xl font-bold text-black p-6 bg-white'>Hit the Road <br /> 
                Buy a Car and Get a Free <br /> 
                Weekend Getaway</p>
            </div>
        </div>
    );
};

export default BrandPageSlider;