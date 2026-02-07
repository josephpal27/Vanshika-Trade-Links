import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./HomeBanner.css";

let HomebannerData = [
    {
        id: 1,
        image: "/images/banners/home-banner-1.png",
        title: "CRAFTED TO COMPLEMENT YOUR <br/> CONTEMPORARY BATH"
    },
    {
        id: 2,
        image: "/images/banners/home-banner-2.png",
        title: "BUILD STRONG PERFORM LONGER <br/> SOLEX STAINLESS STEEL VALVE"
    },
    {
        id: 3,
        image: "/images/banners/home-banner-3.png",
        title: "PRECISION WATER CONTROL <br/> FOR HEALTH CARE SPACES"
    },
]

const HomeBanner = () => {
    return (
        <>
            <section className="home-banner">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    slidesPerView={1}
                    centeredSlides={false}
                    loop={true}
                    grabCursor={true}
                    spaceBetween={0}
                    speed={1000}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: ".prev",
                        nextEl: ".next",
                    }}
                >

                    {
                        HomebannerData.map((item, index) => {
                            return (
                                <SwiperSlide key={index} className={`slide-${item.id}`}>
                                    <img src={item.image} alt={`Banner Slide ${item.id}`} />
                                    <div className="slide-content">
                                        <span dangerouslySetInnerHTML={{ __html: item.title }} />
                                        <Link to="/products">SHOP NOW</Link>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

                {/* custom arrows */}
                <button className="prev">&#10094;</button>
                <button className="next">&#10095;</button>
            </section>
        </>
    )
}

export default HomeBanner
