import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import './ProductsShowcase.css';

let productsShowcaseData = [
    {
        id: 1,
        image: "/images/products-showcase/1.png",
        title: "Single Lever Basin Mixer Concealed <br/> Divertor Body With Upper Trim & Spout",
    },
    {
        id: 2,
        image: "/images/products-showcase/2.png",
        title: "Single Lever Concealed <br/> Divertor Body With Upper Trim",
    },
    {
        id: 3,
        image: "/images/products-showcase/1.png",
        title: "Push Bib <br/> Cock",
    },
    {
        id: 4,
        image: "/images/products-showcase/4.png",
        title: "Sparta - 12” Single <br/> Lever Basin Mixer",
    },
    {
        id: 5,
        image: "/images/products-showcase/5.png",
        title: "Flova - Sink <br/> Cock Dual Outlet",
    },
    {
        id: 6,
        image: "/images/products-showcase/6.png",
        title: "Sparta - Sink <br/> Mixture Dual Outlet",
    },
    {
        id: 7,
        image: "/images/products-showcase/7.png",
        title: "Sparta - Single Lever <br/> Wall Mixer With Bend",
    },
    {
        id: 8,
        image: "/images/products-showcase/8.jpg",
        title: "Sparta - Telephonic <br/> Shower",
    },
]

const ProductsShowcase = () => {
    return (
        <>
            <section className="products-showcase">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={6}
                    spaceBetween={12}
                    loop={true}
                    speed={6000}
                    allowTouchMove={false}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        576: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1200: { slidesPerView: 6 },
                    }}
                >

                    {
                        productsShowcaseData.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <img src={item.image} alt={`Product ${item.id}`} />
                                    <span dangerouslySetInnerHTML={{ __html: item.title }} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </section>
        </>
    )
}

export default ProductsShowcase
