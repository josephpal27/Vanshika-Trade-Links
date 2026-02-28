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
