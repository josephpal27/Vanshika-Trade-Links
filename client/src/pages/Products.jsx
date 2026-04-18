import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { categoryData } from "../data/categoryData";
import CategoryProducts from "../components/category-products/CategoryProducts";
import CategoryProductsBanner from "../components/category-products-banner/CategoryProductsBanner";

const Products = () => {

    const { categorySlug } = useParams();

    const category = categoryData.find(
        (cat) => cat.slug === categorySlug
    );

    const title = `${category?.name || "Products"} - Vanshika Trade Links`;

    useEffect(() => {
        document.title = title;
    }, [categorySlug]);

    return (
        <>
            <Helmet key={categorySlug}>
                <title>{title}</title>
                <meta name="description" content="" />
            </Helmet>

            <CategoryProductsBanner />
            <CategoryProducts />
        </>
    )
}

export default Products
