import { Link } from 'react-router-dom';
import './CategoryBanner.css';

const CategoryBanner = () => {
    return (
        <>
            <section className="category-banner">
                <img src="/images/banners/products-banner.png" alt="Products Banner" loading="lazy" />
                <div className="banner-content">
                    <h1>Product Category</h1>
                    <span><Link to="/">Home</Link> / Product Category</span>
                </div>
            </section>
        </>
    )
}

export default CategoryBanner
