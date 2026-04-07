import { Helmet } from "react-helmet-async";
import ProductDetailsBanner from "../components/product-details-banner/ProductDetailsBanner";
import ProductGallery from "../components/product-gallery/ProductGallery";
import RelatedProducts from "../components/related-products/RelatedProducts";

const ProductDetails = () => {
    return (
        <>
            <Helmet>
                <title>Product Details - Vanshika Trade Links</title>
                <meta name="description" content="" />
            </Helmet>

            <ProductDetailsBanner />
            <ProductGallery />
            <RelatedProducts />
        </>
    )
}

export default ProductDetails;
