import { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category, index }) => {

    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <>
            <Link to={`/category/${category.slug}`} className="category-card" key={index}>
                <div className="card-image">
                    {!imgLoaded && <div className="image-skeleton"></div>}
                    <img
                        src={category.image}
                        alt="Category Image"
                        loading="lazy"
                        onLoad={() => setImgLoaded(true)}
                        onError={() => setImgLoaded(true)}
                        className={imgLoaded ? "img-loaded" : "img-loading"}
                    />
                </div>
                <div className="card-desc">
                    <span>{category.name}</span>
                </div>
            </Link>
        </>
    )
}

export default CategoryCard;
