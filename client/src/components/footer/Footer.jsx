import { FaFacebookF, FaInstagram } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-logo">
                    <img src="/logo.png" alt="Logo" loading="lazy" />
                </div>
                <div className="footer-content">
                    <div className="copyright">
                        <p>Copyright © 2025 - Vanshika Trade Links - All Rights Reserved</p>
                    </div>
                    <div className="foot-social">
                        <p>Follow Us On -</p>
                        <a href="#" target="_blank"><FaFacebookF /></a>
                        <a href="#" target="_blank"><FaInstagram /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
