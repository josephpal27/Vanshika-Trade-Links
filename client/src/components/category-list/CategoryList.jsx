import { Link } from 'react-router-dom';
import './CategoryList.css';

const categoryData = [
    {
        id: 1,
        name: "Rainbow Series",
        image: "/images/category/rainbow.png",
        slug: "rainbow-series",
    },
    {
        id: 2,
        name: "Vital Series",
        image: "/images/category/vital.png",
        slug: "vital-series",
    },
    {
        id: 3,
        name: "Ecoline Series",
        image: "/images/category/ecoline.png",
        slug: "ecoline-series",
    },
    {
        id: 4,
        name: "Studio Series",
        image: "/images/category/studio.png",
        slug: "studio-series",
    },
    {
        id: 5,
        name: "Lily Series",
        image: "/images/category/lily.png",
        slug: "lily-series",
    },
    {
        id: 6,
        name: "Cosmo jr Series",
        image: "/images/category/cosmo-jr.png",
        slug: "cosmo-jr-series",
    },
]

const CategoryList = () => {
    return (
        <>
            <section className="category-list">
                <div className="category-cards-row">
                    {
                        categoryData.map((category, index) => {
                            return (
                                <Link to={`/category/${category.slug}`} className="category-card" key={index}>
                                    <div className="card-image">
                                        <img src={category.image} alt="Category Image" loading="lazy" />
                                    </div>
                                    <div className="card-desc">
                                        <span>{category.name}</span>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default CategoryList
