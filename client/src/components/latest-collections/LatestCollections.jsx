import { Link } from 'react-router-dom';
import './LatestCollections.css';

const LatestCollections = () => {
    return (
        <>
            <section className="latest-collections">
                <img src="/images/latest-collections-bg.png" alt="Latest Collections" loading="lazy" />
                <div className="latest-collection-content">
                    <h3><span>LATEST</span> COLLECTIONS</h3>
                    <Link to="/collections">View Details</Link>
                </div>
            </section>
        </>
    )
}

export default LatestCollections
