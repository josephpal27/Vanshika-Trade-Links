import { Helmet } from "react-helmet-async";
// import { useParams } from 'react-router-dom';
// import { categoryData } from '../../data/categoryData';
import CategoryProducts from "../components/category-products/CategoryProducts";
import CategoryProductsBanner from "../components/category-products-banner/CategoryProductsBanner";

const Products = () => {

    return (
        <>
            <Helmet>
                <title>Products - Vanshika Trade Links</title>
                <meta name="description" content="" />
            </Helmet>

            <CategoryProductsBanner />
            <CategoryProducts />
        </>
    )
}

export default Products
