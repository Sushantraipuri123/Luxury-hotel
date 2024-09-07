import './Facilities.css'
import { FaCarSide } from "react-icons/fa6";
import { IoAlarm } from "react-icons/io5";
import { IoWifi } from "react-icons/io5";
import { GiCoffeeCup } from "react-icons/gi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiBathtub } from "react-icons/gi";
function Facilities() {
  return (
    <>
      <div className="container mt-5 py-lg-3">
        <h5 className="tracking-wide lh-1 cormorant text-cream text-uppercase text-center mt-lg-5">
          Hotel Facilities.
        </h5>
        <h1 className="cormorant lh-1 mt-3 text-center fw-bolder">
          Finest And Luxurious Hotel In The Town
        </h1>
      <div className="d-flex justify-content-center">
      <p className="mt-3 josefin text-center f-18  w-50">
        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                </p>
      </div>

      <div className="row">
        <div className="col-lg-2  p-3">
            <div className="Facilities-box">
                <div className="icon">
                <FaCarSide />
                </div>
                <h2 className="cormorant mt-2 text-center">Parking</h2>
            </div>
        </div>

        <div className="col-lg-2  p-3">
            <div className="Facilities-box">
                <div className="icon">
                <IoAlarm />
                </div>
                <h2 className="cormorant mt-2 text-center">Alarm</h2>
            </div>
        </div>

        <div className="col-lg-2  p-3">
            <div className="Facilities-box">
                <div className="icon">
                <IoWifi />
                </div>
                <h2 className="cormorant mt-2 text-center">Fast Wifi</h2>
            </div>
        </div>

        <div className="col-lg-2  p-3">
            <div className="Facilities-box">
                <div className="icon">
                <GiCoffeeCup />
                </div>
                <h2 className="cormorant mt-2 text-center">Coffee</h2>
            </div>
        </div>

        <div className="col-lg-2  p-3">
            <div className="Facilities-box">
                <div className="icon">
                <AiFillSafetyCertificate />
                </div>
                <h2 className="cormorant mt-2 text-center">Safe</h2>
            </div>
        </div>

        <div className="col-lg-2  p-3">
            <div className="Facilities-box">
                <div className="icon">
                <GiBathtub />
                </div>
                <h2 className="cormorant mt-2 text-center">Bath</h2>
            </div>
        </div>

      </div>
      </div>
    </>
  );
}

export default Facilities;
