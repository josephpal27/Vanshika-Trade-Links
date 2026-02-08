import Header from "../components/header/Header"
import HomeBanner from "../components/home-banner/HomeBanner"
import SpecialProducts from "../components/special-products/SpecialProducts"
import TrendingProducts from "../components/trending-products/TrendingProducts"

const Home = () => {
    return (
        <>
            <Header />
            <HomeBanner />
            <TrendingProducts />
            <SpecialProducts />
        </>
    )
}

export default Home
