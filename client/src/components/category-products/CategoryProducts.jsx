import { Link, useParams } from 'react-router-dom';
import { categoryData } from '../../data/categoryData';
import { productsData } from '../../data/productsData';
import SearchBar from '../search-bar/SearchBar';
import { TbFaceIdError } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import './CategoryProducts.css';

const CategoryProducts = () => {

    const { categorySlug } = useParams();
    const products = productsData[categorySlug] || [];

    return (
        <>
            <section className="category-products">

                {/* Search Bar */}
                <div className="search-bar-container">
                    <SearchBar />
                </div>

                {/* Products */}
                <div className="products-container">
                    {/* Head */}
                    <div className="product-container-head">
                        <h2>Our Collections</h2>
                    </div>
                    {/* Body */}
                    <div className="product-container-body">
                        {/* Collections */}
                        <div className="collections">
                            {
                                categoryData.map((category) => {
                                    return (
                                        <Link to={`/category/${category.slug}`} className={category.slug === categorySlug ? "active" : ""}>{category.name}</Link>
                                    )
                                })
                            }
                        </div>
                        {/* Products Row */}
                        <div className="products-row">
                            {/* Product Cards Row */}
                            <div className="products-cards-row">
                                {
                                    products.length === 0 ? (
                                        <div className="no-products">
                                            <TbFaceIdError className="icon" />
                                            <p>No Products Found...</p>
                                        </div>
                                    ) : (
                                        products.map((product) => {
                                            return (
                                                <div className="product-card" key={product.id}>
                                                    <div className="card-image">
                                                        <img src={product.image} alt={product.name} loading="lazy" />
                                                    </div>
                                                    <div className="card-desc">
                                                        <span>{product.name}</span>
                                                        <Link to={`/category/${categorySlug}/${product.slug}`}>
                                                            Explore <FaArrowRight className="icon" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default CategoryProducts;
