import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProductCard = ({ product, categorySlug }) => {

    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <>
            <div className="product-card">
                <div className="card-image">
                    {!imgLoaded && <div className="image-skeleton"></div>}
                    <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        onLoad={() => setImgLoaded(true)}
                        onError={() => setImgLoaded(true)}
                        className={imgLoaded ? "img-loaded" : "img-loading"}
                    />
                </div>
                <div className="card-desc">
                    <span>{product.name}</span>
                    <Link to={`/category/${categorySlug}/${product.slug}`}>
                        Explore <FaArrowRight className="icon" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ProductCard;
