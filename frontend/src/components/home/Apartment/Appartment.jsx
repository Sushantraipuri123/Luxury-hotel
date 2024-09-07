import { FaHotel } from "react-icons/fa6";
import { IoRestaurantSharp } from "react-icons/io5";
import './Appartment.css'
function Appartment() {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 mt-3">
            <img src="https://wp.ditsolution.net/luxury/wp-content/uploads/2022/07/about-img-main.png" alt="img" className="img-fluid" />
                
            </div>
            <div className="col-lg-6 mt-3 px-lg-5">
                <h5 className="tracking-wide lh1 cormorant text-cream text-uppercase">the best luxury hotel</h5>
                <h1 className="cormorant lh-1">Find the right Apartment</h1>
                <h1 className="cormorant lh-1">Hotel & Resort for you</h1>

                <p className="mt-4 josefin f-18 w-75">
                Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services
                </p>

                <div className="mt-3 ">
                    <div className="elementor-widget-container p-3 d-flex gap-3 border">
                        <div className="widget-icon"><FaHotel /></div>
                        <div className=" widget-text">
                            <h4 className="cormorant">5 Star Hotel In World</h4>
                            <p className="josefin font-18 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                        </div>

                    </div>

                    <div className="elementor-widget-container p-3 d-flex gap-3 border mt-3">
                        <div className="widget-icon"><IoRestaurantSharp /></div>
                        <div className=" widget-text">
                            <h4 className="cormorant">
                            Best Environment</h4>
                            <p className="josefin font-18 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Appartment