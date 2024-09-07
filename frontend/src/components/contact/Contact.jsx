import Form from "./Form";

function Contact() {
  return (
    <>
      <div className="container-fluid bg-hero-sections">
        <div className="container">
          <h1 className="cormorant lh-1 mt-3 mb-4 display-2 text-white">
            Contact
          </h1>
          <h5 className="tracking-wide lh-1 josefin text-white text-uppercase mt-lg-5">
            Home / Contact
          </h5>
        </div>
      </div>

      <div className="container mt-5 py-lg-3 mb-3">
        <div className="row justify-content-between">
          <div className="col-lg-6 px-2 mt-2">
            <h2 className="cormorant lh-1 mt-3 mb-4">
              Feel free to write on example@gmail.com
            </h2>
            <p className="mt-3 josefin f-18  fw-light text-muted">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </p>
            <div className="my-5">
                <hr />
            </div>
            <h2 className="cormorant lh-1 mt-3 mb-4">
              Call us +91 78761-35383
            </h2>
            <p className="mt-3 josefin f-18  fw-light text-muted">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
            </p>
            <div className="my-5">
                <hr />
            </div>
            <h2 className="cormorant lh-1 mt-3 mb-4">
            Visit us on Via Venti Settembre, Canada
            </h2>
            <p className="mt-3 josefin f-18  fw-light text-muted">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
            </p>
            <div className="my-5">
                <hr />
            </div>
            <div className="overflow-hidden">
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4105.079442731566!2d76.68041787610309!3d30.702152587109037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef8c87691c2b%3A0x1e625b93fab0a93a!2sMitisha%20Softech%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1725617719938!5m2!1sen!2sin"
  width="600"
  height="300"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
></iframe>

            </div>
          </div>

          <div className="col-lg-6 p-lg-4 mt-2 bg-cream">
          <h2 className="cormorant lh-1 mt-3 mb-4">
          Get In Touch
            </h2>
            <p className="mt-3 josefin f-22 pt-lg-4 fw-light text-muted">
            Maecenas consectetur, diam nec posuere aliquam, libero sapien aliquet lacus, tempus cursus odio dolor ac magna. Nam condimentum nulla et tortor ultrices tempor. Duis ac nisi mattis, vehicula augue id aliquet.
            </p>
            <div className="mt-5 pt-lg-4">
                <Form/>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Contact;
