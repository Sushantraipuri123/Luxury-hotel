import './Footer.css'
import logo from '/logo.png'; 
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {Link} from 'react-router-dom'
function Footer() {
  return (
   <>
    <div className="container-fluid bg-footer py-5">
      <div className="container">
      <div className="row justify-content-between">
     <div className="col-lg-4 mt-3">
     <img src={logo} alt="LUXURY " className='logo-nav' />
    
      <p className="mt-3 josefin text-white f-18 mt-5">
     A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
      </p>

      <div className="d-flex gap-3 mt-2">
        <Link to='/'>
        <div className="social-icon-container ">
        <FaFacebookF className='text-white f-22'/>
        </div>
        </Link>
        <Link to='/'>
        <div className="social-icon-container ">
        <FaPinterest className='text-white f-22'/>
        </div>
        </Link>

        <Link to='/'>
        <div className="social-icon-container ">
        <FaInstagram className='text-white f-22'/>
        </div>
        </Link>

      </div>
     </div>

     <div className="col-lg-4  mt-3 ">
     <h2 className="cormorant lh-1  fw-bolder text-white">
     Newsletter
     </h2>

     <form>
  <div className="my-4 d-flex bg-white form-group rounded">
    <input
      type="email"
      placeholder="Enter Your Email..."
      className="newsletter-input cormorant py-2 px-3 w-75 f-22 text-black rounded-start"
      required
    />
    <button type="submit" className="btn-main josefin ms-2 scale-in-ver-bottom w-25 rounded-end">
      →
    </button>
  </div>
</form>

     <img src="https://wp.ditsolution.net/luxury/wp-content/uploads/2022/09/payment.png" alt="payments" className='img-fluid mt-4' />
     </div>

    </div>

      </div>
   </div>

   <div className="container-fluid bg-black p-2">
    <div className="container">
      <div className="d-flex gap-3 justify-content-center">
        <p className="cormorant f-18 text-white">
        © 2024 LUXURY. All rights reserved.
        </p>
        <div className="social-media-icons">
         
    </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default Footer