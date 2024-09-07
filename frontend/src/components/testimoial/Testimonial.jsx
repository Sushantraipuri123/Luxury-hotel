import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import './Testimonial.css';

function Testimonial() {
  // Testimonial data array
  const testimonialData = [
    {
      id: 1,
      name: "Sushant Raipuri",
      text: `"Luxury tristique usto duision vitae on diamen neque nivamus aesta atene artines arinianu ateli."`,
      imgSrc: "https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/testi-02.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "John Doe",
      text: `"Exceptional service and support. Highly recommend to anyone looking for  quality  care."`,
      imgSrc: "https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/testi-02.jpg",
      rating: 4
    },
    {
      id: 3,
      name: "Jane Smith",
      text: `"An incredible experience! The team was professional and the results were  expectations."`,
      imgSrc: "https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/testi-02.jpg",
      rating: 5
    },
    {
      id: 4,
      name: "Emily Johnson",
      text: `"Outstanding service and friendly staff. Will definitely use their services again!"`,
      imgSrc: "https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/testi-02.jpg",
      rating: 4
    },
    {
      id: 5,
      name: "Michael Brown",
      text: `"Professional and reliable. The results exceeded my expectations. Highly recommended!"`,
      imgSrc: "https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/testi-02.jpg",
      rating: 5
    },
    {
      id: 6,
      name: "Sarah Wilson",
      text: `"Great experience! The team was very attentive to my needs and delivered excellent results."`,
      imgSrc: "https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/testi-02.jpg",
      rating: 4
    },
    {
      id: 7,
      name: "David Lee",
      text: `"Top-notch service and very professional. I’m extremely satisfied with the outcome."`,
      imgSrc: "https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/testi-02.jpg",
      rating: 5
    },
    {
      id: 8,
      name: "Laura Martinez",
      text: `"Highly recommended! The quality of work was excellent and the staff was very professional."`,
      imgSrc: "https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/testi-02.jpg",
      rating: 4
    },
    
  ];

  // Slick Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, // Medium screens
        settings: {
          slidesToShow: 2 // Show 2 slides at a time
        }
      },
      {
        breakpoint: 576, // Small screens
        settings: {
          slidesToShow: 1 // Show 1 slide at a time
        }
      }
    ]
  };

  return (
    <div className="container-fluid p-0 bg-testimonial d-flex justify-content-center align-items-center">
      <div className="container text-white">
        <h5 className="tracking-wide lh-1 cormorant text-cream text-uppercase text-center mt-lg-5">
          Testimonials
        </h5>
        <h1 className="cormorant lh-1 mt-3 mb-4 text-center fw-bolder text-white">
          What Says Our Clients?
        </h1>

        <Slider {...settings}>
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-column p-4">
              <div className="d-flex justify-content-center">
                <div className="testimonial-img-container">
                  <img
                    src={testimonial.imgSrc}
                    alt="testimonial"
                    className="testimonial-img"
                  />
                </div>
              </div>
              <div className="testi_text">
                {testimonial.text}
              </div>
              <div className="testimonial-rating mt-3">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <FaStar key={index} color="#dba765" />
                ))}
              </div>
              <h3 className="testimonial-name cormorant lh-1 mt-4 text-center fw-bolder">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
