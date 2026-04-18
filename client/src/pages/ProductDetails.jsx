import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { productsData } from "../data/productsData";
import ProductDetailsBanner from "../components/product-details-banner/ProductDetailsBanner";
import ProductGallery from "../components/product-gallery/ProductGallery";
import RelatedProducts from "../components/related-products/RelatedProducts";

const ProductDetails = () => {

     const { categorySlug, productSlug } = useParams();

    const categoryProducts = productsData[categorySlug] || [];

    const product = categoryProducts.find(
        (item) => item.slug === productSlug
    );

    const title = `${product?.name || "Product"} - Vanshika Trade Links`;

    useEffect(() => {
        document.title = title;
    }, [productSlug]);

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content="" />
            </Helmet>

            <ProductDetailsBanner />
            <ProductGallery />
            <RelatedProducts />
        </>
    )
}

export default ProductDetails;
