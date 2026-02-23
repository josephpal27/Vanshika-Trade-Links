import SearchBar from '../search-bar/SearchBar';
import './OurProducts.css';

const OurProducts = () => {
    return (
        <>
            <section className="our-products">
                {/* Search Bar */}
                <div className="search-bar-container">
                    <SearchBar />
                </div>
                {/* Products */}
            </section>
        </>
    )
}

export default OurProducts
