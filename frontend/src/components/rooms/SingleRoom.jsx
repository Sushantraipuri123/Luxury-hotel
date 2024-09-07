import { Link, useParams } from "react-router-dom";

function SingleRoom() {
    const cardData = [
        {
          id: 1,
          frontTitle: "Double Room",
          frontDesc: "38m2/2 beds/1 bathroom",
          frontPrice: "From $80/night",
          backTitle: "Deluxe Double Rooms",
          backDesc:
            "Architecture viverra tristique ustoni an missten vitae diam neque nivamus the aestan the atene artines arinianu ateli ine finibus viverra nec lacus.",
          imgSrc: "/01.jpg",
          caption1:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
          caption2:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable of your business.",
        },
        {
          id: 2,
          frontTitle: "Single Room",
          frontDesc: "25m2/1 bed/1 bathroom",
          frontPrice: "From $60/night",
          backTitle: "Superior Single Rooms",
          backDesc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula dolor.",
          imgSrc: "/01.jpg",
          caption1:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
          caption2:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable of your business.",
        },
        {
          id: 3,
          frontTitle: "Suite",
          frontDesc: "50m2/2 beds/2 bathrooms",
          frontPrice: "From $120/night",
          backTitle: "Luxury Suite",
          backDesc:
            "Phasellus imperdiet, nulla a tincidunt pharetra, est purus vehicula eros, sit amet efficitur felis sapien a neque.",
          imgSrc: "/01.jpg",
          caption1:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
          caption2:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable of your business.",
        },
        {
          id: 4,
          frontTitle: "Suite",
          frontDesc: "50m2/2 beds/2 bathrooms",
          frontPrice: "From $120/night",
          backTitle: "Luxury Suite",
          backDesc:
            "Phasellus imperdiet, nulla a tincidunt pharetra, est purus vehicula eros, sit amet efficitur felis sapien a neque.",
          imgSrc: "/01.jpg",
          caption1:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
          caption2:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable of your business.",
        },
        {
          id: 5,
          frontTitle: "Suite",
          frontDesc: "50m2/2 beds/2 bathrooms",
          frontPrice: "From $120/night",
          backTitle: "Luxury Suite",
          backDesc:
            "Phasellus imperdiet, nulla a tincidunt pharetra, est purus vehicula eros, sit amet efficitur felis sapien a neque.",
          imgSrc: "/01.jpg",
          caption1:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
          caption2:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable of your business.",
        },
        {
          id: 6,
          frontTitle: "Suite",
          frontDesc: "50m2/2 beds/2 bathrooms",
          frontPrice: "From $120/night",
          backTitle: "Luxury Suite",
          backDesc:
            "Phasellus imperdiet, nulla a tincidunt pharetra, est purus vehicula eros, sit amet efficitur felis sapien a neque.",
          imgSrc: "/01.jpg",
          caption1:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
          caption2:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable of your business.",
        },
      ];
      

  const { id } = useParams();
  const room = cardData.find((room) => room.id === parseInt(id));

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <>
      <div className="container-fluid bg-hero-sections">
        <div className="container">
          <h1 className="cormorant lh-1 mt-3 mb-4 display-2 text-white">
            {room.frontTitle}
          </h1>
          <h5 className="tracking-wide lh-1 josefin text-white text-uppercase mt-lg-5">
            Home / {room.frontTitle}
          </h5>
        </div>
      </div>
      <div className="container mt-3 py-lg-4">
        <h2 className="cormorant lh-1 mt-3 mb-4 display-2">{room.backTitle}</h2>
        <h3 className="cormorant">{room.frontDesc}</h3>
        <p className="mt-5 josefin f-22 fw-light text-muted">{room.caption1}</p>

        <p className="mt-4 josefin f-22 fw-light text-muted">{room.caption2}</p>
        <div className="my-5">
          <hr className="" />
        </div>
        <h5 className="tracking-wide lh-1 cormorant display-5 mt-5">
        Hotel Rules
          </h5>
          <div className="mt-5">
          <span className="text-cream me-2">→</span>
          <span className="josefin f-22  fw-light text-muted my-2">
            No parties or events
          </span>
        </div>
        <div className="mt-3">
          <span className="text-cream me-2">→</span>
          <span className="josefin f-22  fw-light text-muted my-2">
            Check-in: 3:00 PM - 9:00 PM
          </span>
        </div>
        <div className="mt-3">
          <span className="text-cream me-2">→</span>
          <span className="josefin f-22  fw-light text-muted my-2">
            Checkout: 11:00 AM
          </span>
        </div>
        <div className="mt-3">
          <span className="text-cream me-2">→</span>
          <span className="josefin f-22  fw-light text-muted my-2">
            No smoking
          </span>
        </div>

        <h5 className="tracking-wide lh-1 cormorant display-6 mt-5">
        Cancellation
          </h5>
        <p className="mt-5 josefin f-20 fw-light text-muted">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        <div className="my-5">
          <hr className="" />
        </div>
        <Link to='/contact' className="text-decoration-none">
        <button className="btn-main josefin ms-2  d-flex align-items-center">CHECK NOW <span className="display-6 ms-2">→</span></button>
        </Link>
      </div>

      <div className="container-fluid">
      <div className="mt-3">
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4105.079442731566!2d76.68041787610309!3d30.702152587109037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef8c87691c2b%3A0x1e625b93fab0a93a!2sMitisha%20Softech%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1725617719938!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
></iframe>

            </div>
      </div>
    </>
  );
}

export default SingleRoom;
