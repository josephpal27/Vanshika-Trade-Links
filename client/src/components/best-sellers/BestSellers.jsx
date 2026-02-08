import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import './BestSellers.css';

let bestSellersData = [
    {
        id: 1,
        image: "/images/best-sellers/1.png",
        title: "OVER HEAD SHOWER <br/> (MILANO)",
    },
    {
        id: 2,
        image: "/images/best-sellers/2.png",
        title: "HEALTH FRAUCET <br/> SPARTA",
    },
    {
        id: 3,
        image: "/images/best-sellers/3.png",
        title: `OVERHEAD RAIN <br/> SHOWER 6"`,
    },
    {
        id: 4,
        image: "/images/best-sellers/4.png",
        title: "MINI ANGLE <br/> VALVE",
    },
    {
        id: 5,
        image: "/images/best-sellers/5.png",
        title: "OVERHEAD SHOWER <br/> (FLOVA)",
    },
    {
        id: 6,
        image: "/images/best-sellers/6.png",
        title: "HEALTH FAUCETS <br/> SYMPHONY",
    },
    {
        id: 7,
        image: "/images/best-sellers/7.png",
        title: "OVER HEAD SHOWER <br/> (ECOLONE)",
    },
    {
        id: 8,
        image: "/images/best-sellers/8.png",
        title: "OVER HEAD <br/> SHOWER EVENT",
    },
    {
        id: 9,
        image: "/images/best-sellers/9.png",
        title: "TELEPHONIC <br/> SHOWER FLOVA",
    },
]

const BestSellers = () => {
    return (
        <>
            <section className="best-sellers">
                <div className="best-sellers-head">
                    <h4>BEST SELLERS</h4>
                    <p>Trusted by Thousands - Explore our top picks for <br /> Bathroom Essentials</p>
                </div>
                <div className="best-sellers-slider">
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

                        {
                            bestSellersData.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="image-box">
                                            <img src={item.image} alt={`Seller ${item.id}`} />
                                        </div>
                                        <span dangerouslySetInnerHTML={{ __html: item.title }} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                    {/* custom arrows */}
                    <button className="prev">&#10094;</button>
                    <button className="next">&#10095;</button>
                </div>
            </section>
        </>
    )
}

export default BestSellers
