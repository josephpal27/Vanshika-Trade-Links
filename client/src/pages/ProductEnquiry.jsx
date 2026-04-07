import { Helmet } from "react-helmet-async"
import EnquiryBanner from "../components/enquiry-banner/EnquiryBanner"
import EnquiryDetails from "../components/enquiry-form/EnquiryDetails"

const ProductEnquiry = () => {
    return (
        <>
            <Helmet>
                <title>Product Enquiry - Vanshika Trade Links</title>
                <meta name="description" content="" />
            </Helmet>

            <EnquiryBanner />
            <EnquiryDetails />
        </>
    )
}

export default ProductEnquiry
