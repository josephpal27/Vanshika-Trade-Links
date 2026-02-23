import { Link } from 'react-router-dom';
import './ProductsBanner.css';

const ProductsBanner = () => {
    return (
        <>
            <section className="products-banner">
                <img src="/images/banners/products-banner.png" alt="Products Banner" loading="lazy" />
                <div className="banner-content">
                    <h1>Shop</h1>
                    <span><Link to="/">Home</Link> / Shop</span>
                </div>
            </section>
        </>
    )
}

export default ProductsBanner
