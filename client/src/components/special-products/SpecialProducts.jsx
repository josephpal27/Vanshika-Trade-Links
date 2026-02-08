import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import './SpecialProducts.css';

let specialProductsData = [
    {
        id: 1,
        image: "/images/special-products/1.jpg",
        title: "SPARTA FREELANCE - <br/> SINK COCK DUAL OUTLET",
    },
    {
        id: 1,
        image: "/images/special-products/2.png",
        title: "ELBOW ACTION <br/> PILLAR COCK",
    },
    {
        id: 1,
        image: "/images/special-products/3.png",
        title: "SPARTA FREELANCE - <br/> SINK MIXTURE DUAL OUTLET",
    },
    {
        id: 1,
        image: "/images/special-products/4.png",
        title: "SPARTA FREELANCEELBOW <br/> ACTION BIB COCK",
    },
]

const SpecialProducts = () => {
    return (
        <>
            <section className="special-products">
                <div className="special-products-head">
                    <h2>SPECIAL PRODUCTS</h2>
                    <p>Transform your space with our Premium Selection of <br /> Faucets & Fittings.</p>
                </div>
                <div className="special-products-slider">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        slidesPerView={2}
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
                            specialProductsData.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img src={item.image} alt={`Product ${item.id}`} />
                                        <div className="slide-content">
                                            <span dangerouslySetInnerHTML={{ __html: item.title }} />
                                            <Link to="/">View Details</Link>
                                        </div>
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

export default SpecialProducts
