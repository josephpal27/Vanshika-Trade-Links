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

      </section>
    </>
  );
};

export default EnquiryDetails;
