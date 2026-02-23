import SearchBar from '../search-bar/SearchBar';
import { IoCaretDownOutline } from "react-icons/io5";
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
                <div className="products-container">
                    {/* Filters */}
                    <div className="filters">
                        <span>Filter Options <IoCaretDownOutline className="arrow-icon" /></span>
                        <div className="filter-box">
                            <span>By Category</span>
                            <div>
                                <input type="checkbox" id="vital" name="vital" />
                                <label htmlFor="vital">Vital</label>
                            </div>
                            <div>
                                <input type="checkbox" id="ecoline" name="ecoline" value="ecoline" />
                                <label htmlFor="ecoline">Ecoline</label>
                            </div>
                            <div>
                                <input type="checkbox" id="studio" name="studio" value="studio" />
                                <label htmlFor="studio">Studio</label>
                            </div>
                            <div>
                                <input type="checkbox" id="lily" name="lily" value="lily" />
                                <label htmlFor="lily">Lily</label>
                            </div>
                            <div>
                                <input type="checkbox" id="cosmo" name="cosmo" value="cosmo" />
                                <label htmlFor="cosmo">Cosmo jr</label>
                            </div>
                            <div>
                                <input type="checkbox" id="rainbow" name="rainbow" value="rainbow" />
                                <label htmlFor="rainbow">Rainbow</label>
                            </div>
                            <span>By Availability</span>
                            <div>
                                <input type="checkbox" id="instock" name="instock" value="instock" />
                                <label htmlFor="instock">In Stock</label>
                            </div>
                            <div>
                                <input type="checkbox" id="outofstock" name="outofstock" value="outofstock" />
                                <label htmlFor="outofstock">Out of Stock</label>
                            </div>
                        </div>
                    </div>
                    {/* Products Row */}
                    <div className="products-row">

                    </div>
                </div>

            </section>
        </>
    )
}

export default OurProducts
