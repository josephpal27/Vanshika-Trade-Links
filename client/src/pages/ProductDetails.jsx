import ProductDetailsBanner from "../components/product-details-banner/ProductDetailsBanner";
import ProductGallery from "../components/product-gallery/ProductGallery";
import RelatedProducts from "../components/related-products/RelatedProducts";

const ProductDetails = () => {
    return (
        <>
            <ProductDetailsBanner />
            <ProductGallery />
            <RelatedProducts />
        </>
    )
}

export default ProductDetails;
