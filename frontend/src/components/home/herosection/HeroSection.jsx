import Carousel from "react-bootstrap/Carousel";
import "./HeroSection.css"; // Import the custom CSS
import slider1 from "/slider1.jpg";
import slider2 from "/slider2.jpg";
import Check from "./Check";
import {Link} from 'react-router-dom'

function HeroSection() {
  return (
    <>
      <Carousel controls={false}>
        <Carousel.Item interval={7000}>
          <img src={slider1} alt="First slide" className="d-block w-100" />
          <Carousel.Caption className="center-caption w-100 pt-lg-3">
            <h5 className="crousel-sub-heading cormorant text-cream text-uppercase">
              this is luxury hotel
            </h5>
            <h1 className="crousel-heading cormorant mt-2 text-uppercase scale-in-top">
              supperior hotel in world
            </h1>
            <div className="d-flex justify-content-center w-100 my-3">
              <hr className="custom-hr" style={{ width: "20%" }} />
            </div>

            <div className="d-flex justify-content-center mt-lg-3">
              <p className="josefin crousel-text text-center w-50 w-sm-100 w-md-50 w-lg-50 scale-in-ver-top">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium amet temporibus eaque laboriosam quas quia
                consectetur. Dignissimos dicta architecto soluta. Ad,
                voluptatum!
              </p>
            </div>
            <div className="mt-2 mb-3">
            <Link to='/rooms'>
              <button className="btn-main josefin ms-2 scale-in-ver-bottom ">Rooms & Suits</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3500}>
          <img src={slider2} alt="Second slide" className="d-block w-100" />
          <Carousel.Caption className="center-caption w-100 pt-lg-3">
            <h5 className="crousel-sub-heading cormorant text-cream text-uppercase">
              this is luxury hotel
            </h5>
            <h1 className="crousel-heading cormorant mt-2 text-uppercase scale-in-top">
              supperior hotel in world
            </h1>
            <div className="d-flex justify-content-center w-100 my-3">
              <hr className="custom-hr" style={{ width: "20%" }} />
            </div>

            <div className="d-flex justify-content-center  mt-lg-3">
              <p className="josefin crousel-text text-center w-50 w-sm-100 w-md-50 w-lg-50 scale-in-ver-top">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium amet temporibus eaque laboriosam quas quia
                consectetur. Dignissimos dicta architecto soluta. Ad,
                voluptatum!
              </p>
            </div>
            <div className="mt-2 mb-3">
              <Link to='/rooms'>
              <button className="btn-main josefin ms-2 scale-in-ver-bottom ">Rooms & Suits</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container check-container bg-cream p-4 border">
        <Check/>
      </div>
    </>
  );
}

export default HeroSection;
