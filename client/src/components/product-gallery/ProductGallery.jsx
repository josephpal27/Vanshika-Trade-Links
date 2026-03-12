import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import './ProductGallery.css';

const ProductGallery = () => {
    return (
        <>
            <section className="product-gallery">
                <div className="gallery-image">
                    <img src="/images/products/rainbow/pillar-cock-regular.png" alt="Product Image" loading="lazy" />
                </div>
                <div className="gallery-content">
                    <span>Rainbow Series</span>
                    <span id="product-name">Pillar Cock Regular</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum tempore libero iusto non temporibus saepe pariatur impedit consequatur quis fugiat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ratione nostrum perferendis a quia commodi quisquam eos velit vel.</p>
                    <Link to="/contact">
                        Enquire Now <FaArrowRight className="icon" />
                    </Link>
                </div>
            </section>
        </>
    )
}

export default ProductGallery
