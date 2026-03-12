import { Link } from 'react-router-dom';
import './EnquiryBanner.css';

const EnquiryBanner = () => {
    return (
        <>
            <section className="enquiry-banner">
                <img src="/images/banners/products-banner.png" alt="Products Banner" loading="lazy" />
                <div className="banner-content">
                    <h1>Product Enquiry</h1>
                    <span><Link to="/">Home</Link> / Product Enquiry</span>
                </div>
            </section>
        </>
    )
}

export default EnquiryBanner
