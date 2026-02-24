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
                    {/* Filters */}
                    <div className="filters">
                        <span>Our Collections</span>
                        <div className="filter-box">
                            <span>By Category</span>
                        </div>
                    </div>
                    {/* Products Row */}
                    <div className="products-row">
                        {/* Product Cards */}
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
                            <div className="product-card">
                                <div className="card-image">
                                    <img src="/images/products/RNB-1201.png" alt="Product 1" loading="lazy" />
                                </div>
                                <div className="card-desc">
                                    <span>Pillar Cock</span>
                                    <Link to="/product-details">Explore</Link>
                                </div>
                            </div>
                            <div className="product-card">
                                <div className="card-image">
                                    <img src="/images/products/RNB-1201.png" alt="Product 1" loading="lazy" />
                                </div>
                                <div className="card-desc">
                                    <span>Pillar Cock</span>
                                    <Link to="/product-details">Explore</Link>
                                </div>
                            </div>
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
