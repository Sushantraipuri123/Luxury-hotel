import "./Flipcards.css";
import img1 from "/1.jpg";
import img2 from "/01.jpg";
import img3 from "/3.jpg";
import { Link } from "react-router-dom";

function Flipcards() {
  return (
    <>
      <div className="container py-5">
        <h5 className="tracking-wide lh-1 cormorant text-cream text-uppercase text-center mt-lg-5">
          the best luxury hotel
        </h5>
        <h1 className="cormorant lh-1 mt-3 mb-4 text-center fw-bolder">
          Rooms & Suites
        </h1>

        <div className="cards mt-4">
          <div className="row">
            <div className="col-lg-4 mt-3 overflow-hidden py-5 objectfit-contain">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="flip-card-overlay">
                      <img src={img1} alt="Avatar" className="flip-card-img" />
                      <div className="overlay-text">
                        <div className="mt-5 pt-5">
                          <h2 className="front-title cormorant">
                            Deluxe Double Rooms
                          </h2>
                          <p className="front-desc josefin">
                            38m2/2 beds/1 bathroom
                          </p>
                          <div className="front-price-part">
                            <div className="front-price mt-5">
                              From $90/night
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-back pt-5">
                    <h2 className="back-title cormorant">
                      Deluxe Double Rooms
                    </h2>
                    <p className="f-18 josefin my-2 text-start text-muted p-4">
                      Architecture viverra tristique ustoni an missten vitae
                      diam neque nivamus the aestan the atene artines arinianu
                      ateli ine finibus viverra nec lacus.
                    </p>
            <Link to='/singleroom/1'>
                    <button className="btn-main josefin ms-2 scale-in-ver-bottom ">
                      Book Now
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* second card  */}
            <div className="col-lg-4 mt-3 overflow-hidden py-5 objectfit-contain">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="flip-card-overlay">
                      <img src={img2} alt="Avatar" className="flip-card-img" />
                      <div className="overlay-text">
                        <div className="mt-5 pt-5">
                          <h2 className="front-title cormorant">Single Room</h2>
                          <p className="front-desc josefin">
                            38m2/2 beds/1 bathroom
                          </p>
                          <div className="front-price-part">
                            <div className="front-price mt-5">
                            From $90/night
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-back pt-5">
                    <h2 className="back-title cormorant">
                    Superior Single Rooms
                    </h2>
                    <p className="f-18 josefin my-2 text-start text-muted p-4">
                      Architecture viverra tristique ustoni an missten vitae
                      diam neque nivamus the aestan the atene artines arinianu
                      ateli ine finibus viverra nec lacus.
                    </p>
            <Link to='/singleroom/2'>
                    <button className="btn-main josefin ms-2 scale-in-ver-bottom ">
                      Book Now
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* third card */}

            <div className="col-lg-4 mt-3 overflow-hidden py-5 objectfit-contain">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="flip-card-overlay">
                      <img src={img3} alt="Avatar" className="flip-card-img" />
                      <div className="overlay-text">
                        <div className="mt-5 pt-5">
                          <h2 className="front-title cormorant">
                          Suite
                          </h2>
                          <p className="front-desc josefin">
                          50m2/2 beds/2 bathrooms
                          </p>
                          <div className="front-price-part">
                            <div className="front-price mt-5">
                              From $70/night
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-back pt-5">
                    <h2 className="back-title cormorant">
                    Luxury Suite
                    </h2>
                    <p className="f-18 josefin my-2 text-start text-muted p-4">
                      Architecture viverra tristique ustoni an missten vitae
                      diam neque nivamus the aestan the atene artines arinianu
                      ateli ine finibus viverra nec lacus.
                    </p>
            <Link to='/singleroom/3'>
                    <button className="btn-main josefin ms-2 scale-in-ver-bottom ">
                      Book Now
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flipcards;
