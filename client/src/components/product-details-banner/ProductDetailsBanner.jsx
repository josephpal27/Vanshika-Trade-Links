import { Link, useParams } from 'react-router-dom';
import { categoryData } from '../../data/categoryData';
import './ProductDetailsBanner.css';

const ProductDetailsBanner = () => {

    const { categorySlug } = useParams();

    return (
        <>
            <section className="product-details-banner">
                <img src="/images/banners/products-banner.png" alt="Products Banner" loading="lazy" />
                <div className="banner-content">
                    {/* <h1>{categoryData.find(cat => cat.slug === categorySlug)?.name || "Products"}</h1> */}
                    <h1>Pillar Cock Regular</h1>
                    {/* <span><Link to="/">Home</Link> / <Link to="/category">Category</Link> / {categoryData.find(cat => cat.slug === categorySlug)?.name || "Products"}</span> */}
                    <span><Link to="/">Home</Link> / <Link to="/category">Category</Link> / <Link to="">Rainbow Series</Link> / Pillar Cock Regular</span>
                </div>
            </section>
        </>
    )
}

export default ProductDetailsBanner;