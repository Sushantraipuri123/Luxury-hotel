import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import "./Faq.css";

function SpaFaq() {
  const [activeKey, setActiveKey] = useState(null);

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey === activeKey ? null : eventKey);
  };

  return (
    <>
      <div className="container-fluid bg-hero-sections">
        <div className="container">
          <h1 className="cormorant lh-1 mt-3 mb-4 display-2 text-white">
            Spa F A Q
          </h1>
          <h5 className="tracking-wide lh-1 josefin text-white text-uppercase mt-lg-5">
            Home / F A Q
          </h5>
        </div>
      </div>

     <div className="container-fluid bg-cream py-5">
     <div className="container mt-5 py-lg-3 mb-3">
        <h5 className="josefin lh-1 mt-3 text-cream">F A Q</h5>
        <h1 className="tracking-wide lh-1 cormorant text-black mt-2">
          Spa Etiquette
        </h1>

        <p className="mt-5 josefin f-22 fw-light text-muted">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur.
        </p>

        <p className="mt-4 josefin f-22 fw-light text-muted">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable
          for your business.
        </p>
      </div>
      </div>
      <div className="container my-4 py-3">
        <h3 className="Urbanist mb-3 text-decoration-underline">
          Frequently Asked Questions
        </h3>
        <Accordion activeKey={activeKey} onSelect={handleSelect}>
          <Accordion.Item eventKey="0">
            <Accordion.Header
              className={`accordion-header ${
                activeKey === "0" ? "accordion-active" : ""
              }`}
            >
              <h5 className="cormorant">
                What services do you offer at your spa?
              </h5>
            </Accordion.Header>
            <Accordion.Body className="josefin text-muted">
              We offer a variety of services including massages, facials, body
              treatments, and wellness therapies designed to relax and
              rejuvenate. Each service is tailored to meet your specific needs.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header
              className={`accordion-header ${
                activeKey === "1" ? "accordion-active" : ""
              }`}
            >
              <h5 className="cormorant">How can I make a reservation?</h5>
            </Accordion.Header>
            <Accordion.Body className="josefin text-muted">
              Reservations can be made by contacting us through our website, by
              phone, or directly at the spa reception. We recommend booking
              ahead to secure your preferred appointment time.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header
              className={`accordion-header ${
                activeKey === "2" ? "accordion-active" : ""
              }`}
            >
              <h5 className="cormorant">What are the cancellation policies?</h5>
            </Accordion.Header>
            <Accordion.Body className="josefin text-muted">
              We request that you provide at least 24 hours' notice for
              cancellations or rescheduling. Cancellations made within this
              period may incur a fee.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header
              className={`accordion-header ${
                activeKey === "3" ? "accordion-active" : ""
              }`}
            >
              <h5 className="cormorant">Are walk-ins allowed?</h5>
            </Accordion.Header>
            <Accordion.Body className="josefin text-muted">
              Walk-ins are welcome, but appointments are recommended to ensure
              availability. We strive to accommodate all guests, but scheduling
              an appointment guarantees your spot.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header
              className={`accordion-header ${
                activeKey === "4" ? "accordion-active" : ""
              }`}
            >
              <h5 className="cormorant">What should I wear to the spa?</h5>
            </Accordion.Header>
            <Accordion.Body className="josefin text-muted">
              Comfortable, casual attire is recommended. For treatments
              requiring undressing, we provide robes and slippers to ensure your
              comfort and privacy.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header
              className={`accordion-header ${
                activeKey === "5" ? "accordion-active" : ""
              }`}
            >
              <h5 className="cormorant">How can I contact customer support?</h5>
            </Accordion.Header>
            <Accordion.Body className="josefin text-muted">
              For any inquiries, you can reach us through our contact form, via
              email at support@spasolutions.com, or call our customer service
              hotline at +91 12345-67890.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      
     </div>
    </>
  );
}

export default SpaFaq;
