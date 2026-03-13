import { useParams } from "react-router-dom";
import { productsData } from "../../data/productsData";
import { categoryData } from "../../data/categoryData";
import { toast } from "react-toastify";
import "./EnquiryDetails.css";

const EnquiryDetails = () => {

  const { categorySlug, productSlug } = useParams();

  const product = productsData[categorySlug]?.find(
    (p) => p.slug === productSlug
  );

  const categoryName =
    categoryData.find((cat) => cat.slug === categorySlug)?.name ||
    "Products Category";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    formData.append("access_key", "9ae99fce-f6f9-4a38-ab5b-7caafb88fce6"); // Web3Forms access key
    formData.append("subject", "New Product Enquiry");
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
      <section className="enquiry-details">
        <h2>ENQUIRY DETAILS</h2>

        <div className="enquiry-product">
          <div className="card-image">
            <img src={product?.image} alt="Product Image" loading="lazy" />
          </div>

          <div className="card-content">
            <span>{categoryName}</span>
            <h3>{product?.name}</h3>
          </div>
        </div>

        <div className="enquiry-form">
          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="Product"
              placeholder="Product Name"
              value={product?.name || ""}
              readOnly
            />

            <input
              type="text"
              name="Category"
              placeholder="Product Category"
              value={categoryName}
              readOnly
            />

            <input type="text" name="Name" placeholder="Full Name" required />

            <input type="email" name="Email" placeholder="Email Id" required />

            <input type="tel" name="Phone" placeholder="Phone" required />

            <input type="text" name="Subject" placeholder="Subject" />

            <textarea name="Message" placeholder="Message"></textarea>

            <button type="submit">SEND MESSAGE</button>

          </form>
        </div>

      </section>
    </>
  );
};

export default EnquiryDetails;