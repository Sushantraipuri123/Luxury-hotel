import "./TwoColumn.css";
import { Link } from "react-router-dom";

function TwoColumn() {
  return (
    <>
      <div className="container-fluid mt-3 p-0 mb-3   ">
        <div className="row no-gutters">
          <div
            className="col-lg-7 p-0 overflow-hidden"
            style={{ height: "615px" }}
          >
            <img
              src="https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/hotel1-931x1024.jpg"
              alt="img"
              className="w-100  object-fit-contain"
            />
          </div>
          <div className="col-lg-5 bg-cream px-lg-5 pt-4 d-flex align-items-center">
            <div>
              <h5 className="tracking-wide lh-1 cormorant text-cream text-uppercase  pt-lg-5">
                THE BEST LUXURY HOTEL
              </h5>
              <h1 className="cormorant lh-1 mt-2   fw-bolder">
                Relaxing Moments at Our Spa Center.
              </h1>

              <p className="my-4 text-muted josefin f-18">
                Dictum varius duis at consectetur lorem donec massa sapien
                faucibus. Tincidunt arcu non para sodales neque sodales ut etiam
                sit and awesome project.
              </p>

              <div>
                <ul>
                  <li className="josefin text-muted mt-3 f-18">
                    Thermal water with ancient baths{" "}
                  </li>
                  <li className="josefin text-muted mt-3 f-18">
                    Turkish bath{" "}
                  </li>
                  <li className="josefin text-muted mt-3 f-18">
                    Turkish sauna{" "}
                  </li>
                  <li className="josefin text-muted mt-3 f-18">
                    Relax and therapy massage
                  </li>
                </ul>
              </div>
      <Link to='/booknow' className="text-decoration-none">
              <button className="btn-main josefin ms-2 d-flex align-items-center letter-spacing-btn">
                BOOK NOW <span className="ms-2 f-22">→</span>
              </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="row no-gutters mt-5">
         
          <div className="col-lg-5 bg-cream px-lg-5 pt-4 d-flex align-items-center">
            <div>
              <h5 className="tracking-wide lh-1 cormorant text-cream text-uppercase  pt-lg-5">
              Experienced
              </h5>
              <h1 className="cormorant lh-1 mt-2   fw-bolder">
              The Health Club & Pool
              </h1>

              <p className="my-4 text-muted josefin f-18">
              Dictum varius duis at consectetur lorem donec massa sapien faucibus. Tincidunt arcu non para sodales neque sodales ut etiam sit and awesome project.
              </p>

              <div>
                <ul>
                  <li className="josefin text-muted mt-3 f-18">
                    Thermal water with ancient baths{" "}
                  </li>
                  <li className="josefin text-muted mt-3 f-18">
                    Turkish bath{" "}
                  </li>
                  <li className="josefin text-muted mt-3 f-18">
                    Turkish sauna{" "}
                  </li>
                  <li className="josefin text-muted mt-3 f-18">
                    Relax and therapy massage
                  </li>
                </ul>
              </div>
      <Link to='/booknow' className="text-decoration-none">
              <button className="btn-main josefin ms-2 mb-2 d-flex align-items-center letter-spacing-btn">
                BOOK NOW <span className="ms-2 f-22">→</span>
              </button>
              </Link>
            </div>
          </div>
          <div
            className="col-lg-7 p-0 overflow-hidden"
            style={{ height: "615px" }}
          >
            <img
              src="https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/hotel3-931x1024.jpg"
              alt="img"
              className="w-100  object-fit-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TwoColumn;
