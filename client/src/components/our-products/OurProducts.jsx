import SearchBar from '../search-bar/SearchBar';
import './OurProducts.css';
import { Link } from 'react-router-dom';

const OurProducts = () => {
    return (
        <>
            <section className="our-products">

                {/* Search Bar */}
                <div className="search-bar-container">
                    <SearchBar />
                </div>

                {/* Products */}
                <div className="products-container">
                    {/* Collections */}
                    <div className="collections">
                        <span id="collections-head">Our Collections</span>
                        <div className="collections-box">
                            <Link to="/category/rainbow-series" className="active">Rainbow Series</Link>
                            <Link to="/category/vital-series">Vital Series</Link>
                            <Link to="/category/ecoline-series">Ecoline Series</Link>
                            <Link to="/category/studio-series">Studio Series</Link>
                            <Link to="/category/lily-series">Lily Series</Link>
                            <Link to="/category/cosmo-jr-series">Cosmo Jr Series</Link>
                        </div>
                    </div>
                    {/* Products Row */}
                    <div className="products-row">
                        {/* Product Cards Row */}
                        <div className="products-cards-row">
                            <div className="product-card">
                                <div className="card-image">
                                    <img src="/images/products/RNB-1201.png" alt="Product 1" loading="lazy" />
                                </div>
                                <div className="card-desc">
                                    <span>Pillar Cock</span>
                                    <Link to="/product-details">Explore</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default OurProducts
