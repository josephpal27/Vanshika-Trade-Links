import { toast } from "react-toastify";
import './ContactForm.css';

const ContactForm = () => {
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);
    
        formData.append("access_key", "8c384a85-166b-4af3-a04c-cfa5ad93674a"); // Web3Forms access key
        formData.append("subject", "New Contact Form Submission");
        formData.append("from_name", "Vanshika Trade Links");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        try {
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: json,
          });
    
          const result = await res.json();
    
          if (result.success) {
            toast.success("Message Sent Successfully!");
            form.reset();
          } else {
            toast.error("Something Went Wrong!");
          }
        } catch (error) {
          toast.error("Network Error. Try Again.");
        }
      };

    return (
        <>
            <section className="contact-form">
                <form onSubmit={handleSubmit}>

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
