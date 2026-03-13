import { Link, useParams } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { categoryData } from '../../data/categoryData';
import { productsData } from '../../data/productsData';
import './ProductGallery.css';

const ProductGallery = () => {

    const { categorySlug, productSlug } = useParams();

    const product = productsData[categorySlug]?.find(
        (p) => p.slug === productSlug
    );

    return (
        <>
            <section className="product-gallery">
                <div className="gallery-image">
                    <img src={product?.image} alt="Product Image" loading="lazy" />
                </div>
                <div className="gallery-content">
                    <span>
                        {categoryData.find(cat => cat.slug === categorySlug)?.name || "Products Category"}
                    </span>
                    <span id="product-name">
                        {product?.name || "Product Name"}
                    </span>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum tempore libero iusto non temporibus saepe pariatur impedit consequatur quis fugiat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ullam ratione nostrum perferendis a quia commodi quisquam eos velit vel.
                    </p>
                    <Link to={`/category/${categorySlug}/${productSlug}/enquiry`}>
                        Enquire Now <FaArrowRight className="icon" />
                    </Link>
                </div>
            </section>
        </>
    )
}

export default ProductGallery
