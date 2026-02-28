import { Link } from 'react-router-dom';
import { categoryData } from '../../data/categoryData';
import CategoryCard from './CategoryCard';
import './CategoryList.css';

const CategoryList = () => {
    return (
        <>
            <section className="category-list">
                <div className="category-cards-row">
                    {
                        categoryData.map((category, index) => {
                            return (
                                // <Link to={`/category/${category.slug}`} className="category-card" key={index}>
                                //     <div className="card-image">
                                //         <img src={category.image} alt="Category Image" loading="lazy" />
                                //     </div>
                                //     <div className="card-desc">
                                //         <span>{category.name}</span>
                                //     </div>
                                // </Link>
                                <CategoryCard category={category} key={index} />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default CategoryList
