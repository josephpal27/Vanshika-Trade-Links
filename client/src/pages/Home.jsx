import { Helmet } from "react-helmet-async";
import BestSellers from "../components/best-sellers/BestSellers"
import HomeBanner from "../components/home-banner/HomeBanner"
import LatestCollections from "../components/latest-collections/LatestCollections"
import ProductsShowcase from "../components/products-showcase/ProductsShowcase"
import SpecialProducts from "../components/special-products/SpecialProducts"
import TrendingProducts from "../components/trending-products/TrendingProducts"

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Vanshika Trade Links</title>
                <meta name="description" content="" />
            </Helmet>
            
            <HomeBanner />
            <TrendingProducts />
            <SpecialProducts />
            <ProductsShowcase />
            <LatestCollections />
            <BestSellers />
        </>
    )
}

export default Home
