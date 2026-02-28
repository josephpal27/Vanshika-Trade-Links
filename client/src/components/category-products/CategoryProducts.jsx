import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { categoryData } from '../../data/categoryData';
import { productsData } from '../../data/productsData';
import SearchBar from '../search-bar/SearchBar';
import ProductCard from './ProductCard';
import { TbFaceIdError } from "react-icons/tb";
import './CategoryProducts.css';

const CategoryProducts = () => {

    const [search, setSearch] = useState("");

    const { categorySlug } = useParams();

    // Reset search when category changes
    useEffect(() => {
        setSearch("");
    }, [categorySlug]);

    const allProducts = productsData[categorySlug] || [];

    const products = allProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <section className="category-products">

                {/* Search Bar */}
                <div className="search-bar-container">
                    <SearchBar search={search} setSearch={setSearch} />
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
                                                <ProductCard
                                                    key={product.id}
                                                    product={product}
                                                    categorySlug={categorySlug}
                                                />
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
