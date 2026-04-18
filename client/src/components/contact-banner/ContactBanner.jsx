import { Link } from 'react-router-dom';
import './ContactBanner.css';

const ContactBanner = () => {
    return (
        <>
            <section className="contact-banner">
                <img src="/images/banners/products-banner.avif" alt="Contact Banner" loading="eager" />
                <div className="banner-content">
                    <h1>CONTACT US</h1>
                    <span><Link to="/">Home</Link> / <Link to="/contact">Get In Touch</Link></span>
                </div>
            </section>
        </>
    )
}

export default ContactBanner
