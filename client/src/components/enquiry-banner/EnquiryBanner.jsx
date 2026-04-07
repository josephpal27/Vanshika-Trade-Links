import { Link, useParams } from 'react-router-dom';
import { productsData } from '../../data/productsData';
import './EnquiryBanner.css';

const EnquiryBanner = () => {

    const { categorySlug, productSlug } = useParams();

    const product = productsData[categorySlug]?.find(
        (p) => p.slug === productSlug
    );

    return (
        <>
            <section className="enquiry-banner">
                <img src="/images/banners/products-banner.avif" alt="Products Banner" loading="lazy" />
                <div className="banner-content">
                    <h1>Product Enquiry</h1>
                    {/* <span><Link to="/">Home</Link> / Product Enquiry</span> */}
                    <span>
                        <Link to={`/category/${categorySlug}/${productSlug}`}>
                            {product?.name || "Product Name"}
                        </Link> {' '}
                        / Enquiry
                    </span>
                </div>
            </section>
        </>
    )
}

export default EnquiryBanner
