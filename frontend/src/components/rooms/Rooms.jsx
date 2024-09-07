import Booking from "../booking/Booking";
import Brand from "../brand/Brand";
import ExtraServices from "../extraServices/ExtraService";
import {Link} from 'react-router-dom'
function Rooms() {
    const cardData = [
        {
          id: 1,
          frontTitle: 'Double Room',
          frontDesc: '38m2/2 beds/1 bathroom',
          frontPrice: 'From $80/night',
          backTitle: 'Deluxe Double Rooms',
          backDesc: 'Architecture viverra tristique ustoni an missten vitae diam neque nivamus the aestan the atene artines arinianu ateli ine finibus viverra nec lacus.',
          imgSrc: '/01.jpg'
        },
        {
          id: 2,
          frontTitle: 'Single Room',
          frontDesc: '25m2/1 bed/1 bathroom',
          frontPrice: 'From $60/night',
          backTitle: 'Superior Single Rooms',
          backDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula dolor.',
          imgSrc: '/01.jpg'
        },
        {
          id: 3,
          frontTitle: 'Suite',
          frontDesc: '50m2/2 beds/2 bathrooms',
          frontPrice: 'From $120/night',
          backTitle: 'Luxury Suite',
          backDesc: 'Phasellus imperdiet, nulla a tincidunt pharetra, est purus vehicula eros, sit amet efficitur felis sapien a neque.',
          imgSrc: '/01.jpg'
        },
        {
          id: 4,
          frontTitle: 'Suite',
          frontDesc: '50m2/2 beds/2 bathrooms',
          frontPrice: 'From $120/night',
          backTitle: 'Luxury Suite',
          backDesc: 'Phasellus imperdiet, nulla a tincidunt pharetra, est purus vehicula eros, sit amet efficitur felis sapien a neque.',
          imgSrc: '/01.jpg'
        },
        {
          id: 5,
          frontTitle: 'Suite',
          frontDesc: '50m2/2 beds/2 bathrooms',
          frontPrice: 'From $120/night',
          backTitle: 'Luxury Suite',
          backDesc: 'Phasellus imperdiet, nulla a tincidunt pharetra, est purus vehicula eros, sit amet efficitur felis sapien a neque.',
          imgSrc: '/01.jpg'
        },
        {
          id: 6,
          frontTitle: 'Suite',
          frontDesc: '50m2/2 beds/2 bathrooms',
          frontPrice: 'From $120/night',
          backTitle: 'Luxury Suite',
          backDesc: 'Phasellus imperdiet, nulla a tincidunt pharetra, est purus vehicula eros, sit amet efficitur felis sapien a neque.',
          imgSrc: '/01.jpg'
        }
      ];
      
    return (
        <>
            <div className="container-fluid bg-hero-sections">
                <div className="container">
                    <h1 className="cormorant lh-1 mt-3 mb-4 display-2 text-white">
                        Rooms
                    </h1>
                    <h5 className="tracking-wide lh-1 josefin text-white text-uppercase mt-lg-5">
                        Home / Rooms
                    </h5>
                </div>
            </div>
            <div className="container mt-3 py-lg-4">
                <h5 className="tracking-wide lh-1 cormorant text-cream text-uppercase text-center mt-lg-5">
                    THE LUXURY HOTEL
                </h5>
                <h1 className="cormorant lh-1 mt-3 mb-4 text-center text-black display-2">
                    Rooms & Suites
                </h1>
            </div>

            <div className="container my-4 overflow-hidden py-5">
               <div className="row justify-content-between gap-4">
               {cardData.map((card, index) => (
                    <div className="flip-card mtt-3" key={index}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="flip-card-overlay">
                                    <img src={card.imgSrc} alt="Room" className="flip-card-img" />
                                    <div className="overlay-text">
                                        <div className="mt-5 pt-5">
                                            <h2 className="front-title cormorant">{card.frontTitle}</h2>
                                            <p className="front-desc josefin">{card.frontDesc}</p>
                                            <div className="front-price-part">
                                                <div className="front-price mt-5">
                                                    {card.frontPrice}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card-back pt-5">
                                <h2 className="back-title cormorant">{card.backTitle}</h2>
                                <p className="f-18 josefin my-2 text-start text-muted p-4">{card.backDesc}</p>
                                <Link to={`/singleroom/${card.id}`}>
                                <button className="btn-main josefin ms-2 ">Book Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
               </div>
            </div>

            <div className="container-fluid bg-cream mt-5 pb-5">
                <ExtraServices />
            </div>

            <div className="container-fluid mb-4">
                <Booking />
            </div>

            <div className="container my-4 py-4">
                <Brand />
            </div>
        </>
    );
}

export default Rooms;
