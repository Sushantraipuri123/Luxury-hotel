import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Brand() {
  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Show 6 images at a time on large screens
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay every 2 seconds
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 576, // Small screens
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  // Array of image URLs
  const brandImages = [
    "https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/brand4.png",
    "https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/brand2.png",
    "https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/brand1.png",
    "https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/brand7.png",
    "https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/brand4.png",
    "https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/brand6.png",
    "https://wp.ditsolution.net/luxury/wp-content/uploads/2022/08/brand3.png",
  ];

  return (
    <div className="container py-lg-5">
      <Slider {...settings}>
        {brandImages.map((imgSrc, index) => (
          <div key={index}>
            <img src={imgSrc} alt={`brand${index + 1}`} className="img-fluid" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Brand;
