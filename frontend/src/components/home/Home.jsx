import Booking from "../booking/Booking"
import Brand from "../brand/Brand"
import Car from "../car/Car"
import ExtraServices from "../extraServices/ExtraService"
import Facilities from "../facilities/Facilities"
import Testimonial from "../testimoial/Testimonial"
import Appartment from "./Apartment/Appartment"
import Flipcards from "./flipcards/Flipcards"
import HeroSection from "./herosection/HeroSection"
import TwoColumn from "./twocolumns/TwoColumn"

function Home() {
  return (
    <>
    <HeroSection/>
    <div className="container-fluid mt-3 mb-3">
        <Appartment/>
    </div>

    <div className="container-fluid bg-cream mt-3 mb-4">
      <Flipcards/>
    </div>

    <div className="container-fluid mt-4 overflow-hidden">
      <Car/>
    </div>

    <div className="container-fluid bg-white mt-4">
      <Facilities/>
    </div>

    
    <div className="container bg-white mt-3">
      <TwoColumn/>
    </div>

    <div className="container-fluid bg-cream mt-5 pb-5">
      <ExtraServices/>
    </div>
    <div className="container-fluid">
      <Testimonial/>
    </div>

    <div className="container my-4 py-4">
      <Brand/>
    </div>

    <div className="container-fluid mb-4">
      <Booking/>
    </div>
    </>
  )
}

export default Home