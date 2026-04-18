import { Helmet } from "react-helmet-async"
import ContactBanner from "../components/contact-banner/ContactBanner"
import ContactForm from "../components/contact-form/ContactForm"

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us - Vanshika Trade Links</title>
                <meta name="description" content="" />
            </Helmet>

            <ContactBanner />
            <ContactForm />
        </>
    )
}

export default Contact
