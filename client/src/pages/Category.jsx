import { Helmet } from "react-helmet-async"
import CategoryBanner from "../components/category-banner/CategoryBanner"
import CategoryList from "../components/category-list/CategoryList"

const Category = () => {
    return (
        <>
            <Helmet>
                <title>Category - Vanshika Trade Links</title>
                <meta name="description" content="" />
            </Helmet>
            
            <CategoryBanner />
            <CategoryList />
        </>
    )
}

export default Category
