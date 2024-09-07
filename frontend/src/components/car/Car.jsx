import './car.css';
import { Link } from "react-router-dom";

function Car() {
  return (
    <div className="car text-center">
      <iframe 
        className="car-video object-fit-co"
        width="100%" 
        height="70vh" 
        src="https://www.youtube.com/embed/zr4r3n5Smho?autoplay=1&loop=1&mute=1&playlist=zr4r3n5Smho"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h5 className="tracking-wide lh-1 cormorant text-cream text-uppercase mt-lg-3">
        MEETING & EVENTS
      </h5>
      <h1 className="cormorant lh-1 display-3 mt-4 mb-4 fw-bolder text-white">
        A Warm, Exquisite, Practical
        And Urban Space.
      </h1>
      <Link to='/booknow'>
      <button className="btn-main josefin ms-2 ">Check Now</button>
      </Link>
    </div>
  );
}

export default Car;
