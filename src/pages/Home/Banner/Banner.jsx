import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/dish/1.png';
import img2 from '../../../assets/dish/2.png';
// import banner1 from '../../../assets/dish/banner1.png';
import banner2 from '../../../assets/home/banner2.png';
import img3 from '../../../assets/dish/3.png';
import img4 from '../../../assets/dish/4.png';
import img5 from '../../../assets/dish/5.png';
import img6 from '../../../assets/dish/6.png';

const Banner = () => {
    return (
       <div className="bg-cover bg-right h-screen" style={{backgroundImage: `url(${banner2})`}}>
         <Carousel>
            <div className='w-[20%] flex items-center justify-center h-screen mx-auto'>
                <img src={img1} />
            </div>
            <div className='w-[20%] flex items-center justify-center h-screen mx-auto'>
                <img src={img2} />
            </div>
            <div className='w-[20%] flex items-center justify-center h-screen mx-auto'>
                <img src={img3} />
            </div>
            <div className='w-[20%] flex items-center justify-center h-screen mx-auto'>
                <img src={img4} />
            </div>
            <div className='w-[20%] flex items-center justify-center h-screen mx-auto'>
                <img src={img5} />
            </div>
            <div className='w-[20%] flex items-center justify-center h-screen mx-auto'> 
                <img src={img6} />
            </div>
        </Carousel>
       </div>
    );
};

export default Banner;