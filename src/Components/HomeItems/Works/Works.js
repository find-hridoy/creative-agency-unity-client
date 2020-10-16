import React from 'react';
import './Works.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import carousel1 from '../../../Images/carousel/carousel-1.png';
import carousel2 from '../../../Images/carousel/carousel-2.png';
import carousel4 from '../../../Images/carousel/carousel-4.png';
import carousel5 from '../../../Images/carousel/carousel-5.png';

SwiperCore.use([Pagination, Autoplay]);
const worksImage = [
    {
        imgUrl: carousel1
    },
    {
        imgUrl: carousel2
    },
    {
        imgUrl: carousel4
    }
];
const Works = () => {
    return (
        <section className="works">
            <div className="container">
                <div className="text-center">
                    <h3 className="section_title text-white">Here are some of <span className="section_subtitle">our works</span></h3>
                </div>
                <div className="mt-5 py-3">
                    <Swiper
                        pagination={{ clickable: true }}
                        spaceBetween={50}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            worksImage.map((img, index) =>
                                <SwiperSlide key={index} className="card-deck">
                                    <img src={img.imgUrl} className="img-fluid" alt="Carousel Img" />
                                </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </section >
    );
};

export default Works;