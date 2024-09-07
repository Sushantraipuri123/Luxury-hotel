import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./About.css";
import { FaRegCirclePlay } from "react-icons/fa6";
import ExtraServices from "../extraServices/ExtraService";
import Facilities from "../facilities/Facilities";
import Testimonial from "../testimoial/Testimonial";
import Brand from "../brand/Brand";
import { FaHotel } from "react-icons/fa6";

function About() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container-fluid bg-hero-sections">
        <div className="container">
          <h1 className="cormorant lh-1 mt-3 mb-4 display-2 text-white">
            About Us
          </h1>
          <h5 className="tracking-wide lh-1 josefin text-white text-uppercase mt-lg-5">
            Home / About
          </h5>
        </div>
      </div>

      <div className="container mt-5 py-lg-3">
        <h5 className="tracking-wide lh-1 cormorant text-cream text-uppercase text-center mt-lg-5">
          About Us
        </h5>
        <h1 className="cormorant lh-1 mt-3 mb-4 text-center display-2 text-black">
          Since 8+ Years
        </h1>

        <div className="d-flex justify-content-center">
          <p className="josefin text-muted fw-light w-75 f-22 text-center">
            Ut condimentum magna ut augue elementum ornare. Fusce posuere massa
            vitae maximus posuere. Mauris sagittis consectetur vulputate.
            Curabitur commodo est quis felis porttitor eleifend. Sed efficitur
            sem mi, et feugiat lorem scelerisque awesome hotel booking website
            for you.
          </p>
        </div>
      </div>

      <div className="container mt-3 mb-3 position-relative">
        <img
          src="https://wp.ditsolution.net/luxury/wp-content/uploads/2022/09/about-video.jpg"
          alt="about img"
          className="img-fluid"
        />
        <button
          className="play-button position-absolute top-50 start-50 translate-middle p-4 border"
          onClick={handleShow}
        >
          <FaRegCirclePlay
            size={30}
            color="#dba765"
            className="about-play-btn"
          />
        </button>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Body>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/zr4r3n5Smho"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="container my-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 p-3">
            <div className="elementor-widget-container p-3 d-flex gap-3 border">
              <div className="widget-icon">
                <FaHotel />
              </div>
              <div className=" widget-text">
                <h4 className="cormorant">5 Star Hotel In World</h4>
                <p className="josefin font-18 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-3">
            <div className="elementor-widget-container p-3 d-flex gap-3 border">
              <div className="widget-icon">
                <FaHotel />
              </div>
              <div className=" widget-text">
                <h4 className="cormorant">5 Star Hotel In World</h4>
                <p className="josefin font-18 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-3">
            <div className="elementor-widget-container p-3 d-flex gap-3 border">
              <div className="widget-icon">
                <FaHotel />
              </div>
              <div className=" widget-text">
                <h4 className="cormorant">5 Star Hotel In World</h4>
                <p className="josefin font-18 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 p-3">
            <div className="elementor-widget-container p-3 d-flex gap-3 border">
              <div className="widget-icon">
                <FaHotel />
              </div>
              <div className=" widget-text">
                <h4 className="cormorant">5 Star Hotel In World</h4>
                <p className="josefin font-18 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-3">
            <div className="elementor-widget-container p-3 d-flex gap-3 border">
              <div className="widget-icon">
                <FaHotel />
              </div>
              <div className=" widget-text">
                <h4 className="cormorant">5 Star Hotel In World</h4>
                <p className="josefin font-18 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-3">
            <div className="elementor-widget-container p-3 d-flex gap-3 border">
              <div className="widget-icon">
                <FaHotel />
              </div>
              <div className=" widget-text">
                <h4 className="cormorant">5 Star Hotel In World</h4>
                <p className="josefin font-18 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="container-fluid bg-cream mt-5 pb-5">
        <ExtraServices />
      </div>

      <div className="container-fluid bg-white mt-4">
        <Facilities />
      </div>

      <div className="container-fluid mt-5">
        <Testimonial />
      </div>

      <div className="container my-4 py-4">
        <Brand />
      </div>
    </>
  );
}

export default About;
