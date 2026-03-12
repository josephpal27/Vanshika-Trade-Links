import "./EnquiryDetails.css";

const EnquiryDetails = () => {
  return (
    <>
      <section className="enquiry-details">
        <h2>ENQUIRY DETAILS</h2>

        <div className="enquiry-product">
          <div className="card-image">
            <img src="/images/products/rainbow/pillar-cock-regular.png" alt="Product Image" loading="lazy" />
          </div>
          <div className="card-content">
            <span>Rainbow Series</span>
            <h3>Pillar Cock Regular</h3>
          </div>
        </div>

        <div className="enquiry-form">
          <form action="">
            <input type="text" name="Product" placeholder="Product Name" required value={'Pillar Cock Regular'} />
            <input type="text" name="Category" placeholder="Product Category" required value={'Rainbow Series'} />
            <input type="text" name="Name" placeholder="Full Name" required />
            <input type="text" name="Email" placeholder="Email Id" required />
            <input type="text" name="Phone" placeholder="Phone" required />
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
