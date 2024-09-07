import Slider from 'react-slick';
import './Slider.css';

function SliderComponent() {
  // Define the content for each slide
  const slidesData = [
    {
      imgSrc: 'https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/room-cleaning.jpg',
      title: 'Room Cleaning',
      items: ['Lorem, ipsum dolor.', 'Dolor sit amet.', 'Consectetur adipiscing elit.']
    },
    {
      imgSrc: 'https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/room-cleaning.jpg',
      title: 'Deep Cleaning',
      items: ['Sed do eiusmod tempor.', 'Incididunt ut labore et.', 'Dolore magna aliqua.']
    },
    {
      imgSrc: 'https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/room-cleaning.jpg',
      title: 'General Cleaning',
      items: ['Ut enim ad minim veniam.', 'Quis nostrud exercitation .', 'Laboris nisi ut aliquip ex ea.']
    },
    // Add more slide data as needed
  ];

  // Slider settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 slides at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, // When screen width is <= 992px
        settings: {
          slidesToShow: 1 // Show 1 slide at a time on small screens
        }
      }
    ]
  };

  return (
    <div className="container-fluid">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="row gap-5 no-gutters">
            <div className="col-11 slider-column-border p-0">
              <div className="slider-img-container p-0">
                <img
                  src={slide.imgSrc}
                  alt={`slider img ${index}`}
                  className="slider-img"
                />
              </div>
              <div className="bg-white">
                <h2 className="text-center py-3 bg-crem-dark cormorant text-white">
                  {slide.title}
                </h2>
                <div className="p-3 d-flex justify-content-center">
                  <ul>
                    {slide.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="josefin f-18 mt-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;
