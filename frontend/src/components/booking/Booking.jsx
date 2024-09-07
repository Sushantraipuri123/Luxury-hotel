import "./Booking.css";
import { FaStar } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";

function Booking() {
  return (
    <div className="container-fluid bg-booking d-flex justify-content-center align-items-center">
      <div className="container text-white">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <div>
              <div className="d-flex gap-3 f-22">
                <FaStar color="#dba765" />
                <FaStar color="#dba765" />
                <FaStar color="#dba765" />
                <FaStar color="#dba765" />
                <FaStar color="#dba765" />
              </div>

              <h1 className="cormorant lh-1 display-3 mt-4 mb-4  fw-bolder text-white">
                {`Call us, it's toll-free.`}
              </h1>

              <p className="mt-3 josefin   me-lg-2 ">
              Each of our guest rooms feature a private bath, wi-fi, cable television and include full breakfast. And also have awesome swing system in the ponds.
         </p>
         <div className="d-flex gap-3  align-items-center">
            <div className="icon icon-booking">
            <LuPhoneCall />
            </div>
           <div className="ms-3 mt-2">
           <h4  className="josefin text-cream">+91 78761-35383</h4>
           <h5 className="f-18 josefin text-white">For More Information </h5>
           </div>
         </div>
            </div>
          </div>
          <div className="col-lg-6 bg-white p-4">
            <h5 className="tracking-wide lh-1 cormorant text-cream text-uppercase  ">
            ROOMS & SUITES
        </h5>
        <h2 className="cormorant lh-1 mt-3  fw-bolder text-black">
        Check Availabilty
        </h2>
        <div className="mt-2">
            <div className="row mt-3 jusify-content-between">
                <div className="col-lg-6 col-md-6 mt-2">
                <h5 className="josefin text-black">Check In</h5>
                <input type="date" className="bg-cream px-3 py-3 w-100 border" />
                </div>
                <div className="col-lg-6 col-md-6 mt-2">
                <h5 className="josefin text-black">Check Out</h5>
                <input type="date" className="bg-cream px-3 py-3 w-100 border" />
                </div>
            </div>

            <div className="row mt-3 jusify-content-between">
                <div className="col-lg-6 col-md-6 mt-2">
                <h5 className="josefin text-black">Adult</h5>
              <select className="bg-cream border px-3 py-3 w-100">
                {[...Array(7)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
                </div>
                <div className="col-lg-6 col-md-6 mt-2">
                <h5 className="josefin text-black">Children</h5>
              <select className="bg-cream border px-3 py-3 w-100">
                {[...Array(7)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
                </div>
            </div>

            <div className="row mt-4 ">
            <button className="btn-main josefin ms-2 scale-in-ver-bottom w-100">Check Now</button>
            </div>

        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
