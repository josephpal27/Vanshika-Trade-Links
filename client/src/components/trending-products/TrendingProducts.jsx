import { Link } from 'react-router-dom';
import './TrendingProducts.css';

let trendingProductsData = [
    {
        id: 1,
        title: "SPARTA FREELANCE - <br/> SINK COCK",
        image: "/images/trending-products/1.png",
    },
    {
        id: 2,
        title: "SPARTA FREELANCE - <br/> SWAN NECK",
        image: "/images/trending-products/2.png",
    },
    {
        id: 3,
        title: "FLOVA FREELANCE - <br/> SINK MIXTURE",
        image: "/images/trending-products/3.png",
    },
    {
        id: 4,
        title: "SPARTA FREELANCE - <br/> SINGLE LEVER SINK MIXTURE",
        image: "/images/trending-products/4.png",
    },
    {
        id: 5,
        title: "SPARTA FREELANCE - SINGLE LEVER KITCHEN MIXTURE TABLE TOP",
        image: "/images/trending-products/5.png",
    },
]

const TrendingProducts = () => {
    return (
        <>
            <section className="trending-products">
                <h1>TRENDING PRODUCTS</h1>
                <div className="trending-products-row">
                    {
                        trendingProductsData.map((item, index) => {
                            return (
                                <div className="product-box" key={index} id={`product-box-${item.id}`}>
                                    <img src={item.image} alt={`Product-${item.id}`} loading="lazy" />
                                    <div className="overlay">
                                        <span dangerouslySetInnerHTML={{__html: item.title}}/>
                                        <Link to="/">View Details</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default TrendingProducts
