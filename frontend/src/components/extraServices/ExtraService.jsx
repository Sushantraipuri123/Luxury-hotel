import { LuPhoneCall } from "react-icons/lu";
import Slider from "./Slider";


function ExtraServices() {
  return (
    <>
      <div className="container py-5">
       <div className="row">
        <div className="col-lg-4 mt-3">
        <h5 className="tracking-wide lh-1 cormorant text-cream text-uppercase  mt-lg-3">
        BEST PRICES
        </h5>
        <h1 className="cormorant lh-1 mt-3  fw-bolder">
        Extra Services
        </h1>
        <p className="mt-3 josefin text-muted f-18  fw-bold">
        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
         </p>
         <p className="mt-3 josefin text-muted f-18 ">
        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
         </p>

         <div className="d-flex gap-3 align-items-center">
            <div className="icon ">
            <LuPhoneCall />
            </div>
           <div className="ms-3 mt-2">
           <h4  className="josefin text-cream">+91 78761-35383</h4>
           <h5 className="f-18 josefin text-muted">For More Information </h5>
           </div>
         </div>
        </div>

        <div className="col-lg-8 mt-3 p-lg-5">
            <Slider/>
        </div>

       </div>

    
      </div>
    </>
  );
}

export default ExtraServices;
