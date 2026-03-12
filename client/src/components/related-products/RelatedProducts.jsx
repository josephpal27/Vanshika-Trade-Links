import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';
import "swiper/css";
import "swiper/css/pagination";
import './RelatedProducts.css';

const RelatedProducts = () => {
    return (
        <>
            <section className="related-products">
                <h2>RELATED PRODUCTS</h2>
                <div className="related-products-slider">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        slidesPerView={4}
                        centeredSlides={false}
                        loop={true}
                        grabCursor={true}
                        spaceBetween={20}
                        speed={1000}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: ".prev",
                            nextEl: ".next",
                        }}
                    >
                        <SwiperSlide key="">
                            <div className="image-box">
                                <img src="/images/products/rainbow/pillar-cock-regular.png" alt="" loading="lazy" />
                            </div>
                            <div className="card-desc">
                                <span>Product Name</span>
                                <Link to="">
                                    Explore <FaArrowRight className="icon" />
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide key="">
                            <div className="image-box">
                                <img src="/images/products/rainbow/pillar-cock-regular.png" alt="" loading="lazy" />
                            </div>
                            <div className="card-desc">
                                <span>Product Name</span>
                                <Link to="">
                                    Explore <FaArrowRight className="icon" />
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide key="">
                            <div className="image-box">
                                <img src="/images/products/rainbow/pillar-cock-regular.png" alt="" loading="lazy" />
                            </div>
                            <div className="card-desc">
                                <span>Product Name</span>
                                <Link to="">
                                    Explore <FaArrowRight className="icon" />
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide key="">
                            <div className="image-box">
                                <img src="/images/products/rainbow/pillar-cock-regular.png" alt="" loading="lazy" />
                            </div>
                            <div className="card-desc">
                                <span>Product Name</span>
                                <Link to="">
                                    Explore <FaArrowRight className="icon" />
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide key="">
                            <div className="image-box">
                                <img src="/images/products/rainbow/pillar-cock-regular.png" alt="" loading="lazy" />
                            </div>
                            <div className="card-desc">
                                <span>Product Name</span>
                                <Link to="">
                                    Explore <FaArrowRight className="icon" />
                                </Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    
                    {/* custom arrows */}
                    <button className="prev">&#10094;</button>
                    <button className="next">&#10095;</button>
                </div>
            </section>
        </>
    )
}

export default RelatedProducts
