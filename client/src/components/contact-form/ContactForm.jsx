import './ContactForm.css';

const ContactForm = () => {
    return (
        <>
            <section className="contact-form">
                <form onSubmit="">

                    <input type="text" name="Name" placeholder="Full Name" required />

                    <input type="email" name="Email" placeholder="Email Id" required />

                    <input type="tel" name="Phone" placeholder="Phone" required />

                    <input type="text" name="Subject" placeholder="Subject" />

                    <textarea name="Message" placeholder="Message"></textarea>

                    <button type="submit">SEND MESSAGE</button>

                </form>
            </section>
        </>
    )
}

export default ContactForm
