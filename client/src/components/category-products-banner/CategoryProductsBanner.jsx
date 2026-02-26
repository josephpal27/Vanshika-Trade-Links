import { Link, useParams } from 'react-router-dom';
import './categoryProductsBanner.css';
import { categoryData } from '../../data/categoryData';

const ProductsBanner = () => {

    const { categorySlug } = useParams();

    return (
        <>
            <section className="products-banner">
                <img src="/images/banners/products-banner.png" alt="Products Banner" loading="lazy" />
                <div className="banner-content">
                    <h1>{categoryData.find(cat => cat.slug === categorySlug)?.name || "Products"}</h1>
                    <span><Link to="/">Home</Link> / <Link to="/category">Category</Link> / {categoryData.find(cat => cat.slug === categorySlug)?.name || "Products"}</span>
                </div>
            </section>
        </>
    )
}

export default ProductsBanner
