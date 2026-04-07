import { useParams } from "react-router-dom";
import { productsData } from "../../data/productsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';
import "swiper/css";
import "swiper/css/pagination";
import './RelatedProducts.css';

const RelatedProducts = () => {

    const { categorySlug, productSlug } = useParams();

    const relatedProducts = productsData[categorySlug]?.filter(
        (product) => product.slug !== productSlug
    ) || [];

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
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 10, // mobile
                            },
                            768: {
                                slidesPerView: 3, // tablet
                            },
                            1024: {
                                slidesPerView: 4, // desktop
                            },
                        }}
                    >
                        {
                            relatedProducts.map((product, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="image-box">
                                            <img src={product.image} alt={product.name} loading="lazy" />
                                        </div>
                                        <div className="card-desc">
                                            <span>{product.name}</span>
                                            <Link to={`/category/${categorySlug}/${product.slug}`}>
                                                Explore <FaArrowRight className="icon" />
                                            </Link>
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

export default RelatedProducts
