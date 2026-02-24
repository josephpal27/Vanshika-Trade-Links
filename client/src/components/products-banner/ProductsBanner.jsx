import { Link } from 'react-router-dom';
import './ProductsBanner.css';

const ProductsBanner = () => {
    return (
        <>
            <section className="products-banner">
                <img src="/images/banners/products-banner.png" alt="Products Banner" loading="lazy" />
                <div className="banner-content">
                    <h1>Rainbow Series</h1>
                    <span><Link to="/">Home</Link> / <Link to="/category">Category</Link> / Rainbow Series</span>
                </div>
            </section>
        </>
    )
}

export default ProductsBanner
