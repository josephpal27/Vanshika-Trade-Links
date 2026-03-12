import { Link, useParams } from 'react-router-dom';
import { categoryData } from '../../data/categoryData';
import { productsData } from '../../data/productsData';
import './ProductDetailsBanner.css';

const ProductDetailsBanner = () => {

    const { categorySlug, productSlug } = useParams();

    const product = productsData[categorySlug]?.find(
        (p) => p.slug === productSlug
    );

    return (
        <>
            <section className="product-details-banner">
                <img src="/images/banners/product-details-banner.png" alt="Products Banner" loading="lazy" />
                <div className="banner-content">
                    <h1>{product?.name || "Product Name"}</h1>
                    <span>
                        <Link to="/">Home</Link> / {' '}
                        <Link to="/category">Category</Link> / {' '}
                        <Link to={`/category/${categorySlug}`}>
                            {categoryData.find(cat => cat.slug === categorySlug)?.name || "Products Category"} {' '}
                        </Link> {' '}
                        / {product?.name || "Product Name"}
                    </span>
                </div>
            </section>
        </>
    )
}

export default ProductDetailsBanner;