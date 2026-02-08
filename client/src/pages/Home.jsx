import Header from "../components/header/Header"
import HomeBanner from "../components/home-banner/HomeBanner"
import LatestCollections from "../components/latest-collections/LatestCollections"
import ProductsShowcase from "../components/products-showcase/ProductsShowcase"
import SpecialProducts from "../components/special-products/SpecialProducts"
import TrendingProducts from "../components/trending-products/TrendingProducts"

const Home = () => {
    return (
        <>
            <Header />
            <HomeBanner />
            <TrendingProducts />
            <SpecialProducts />
            <ProductsShowcase />
            <LatestCollections />
        </>
    )
}

export default Home
