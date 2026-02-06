import './Header.css';
import topsanLogo from '../../assets/images/partners/topsan.png';
import partner1 from '../../assets/images/partners/1.png';
import partner2 from '../../assets/images/partners/2.png';
import partner3 from '../../assets/images/partners/3.png';
import partner4 from '../../assets/images/partners/4.png';

const Header = () => {
    return (
        <>
            <header>
                <div className="header-top">
                    <img src={topsanLogo} alt="Topsan" loading="lazy" />
                    <p>Importer And Distributor <br /> All Over Nepal</p>
                    <div className="exp">
                        <span>35+</span>
                        <p>Years Experience</p>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-content">
                        <p>Best Price</p>
                        <p>Wide Range Of Products</p>
                        <p>Guaranteed Quality</p>
                        <p>Authorized & Assured</p>
                    </div>
                    <div className="header-bottom-images">
                        <span>Also Available</span>
                        <div className="logo-row">
                            <img src={partner1} alt="Logo" loading="lazy" />
                            <img src={partner2} alt="Logo" loading="lazy" />
                            <img src={partner3} alt="Logo" loading="lazy" />
                            <img src={partner4} alt="Logo" loading="lazy" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
