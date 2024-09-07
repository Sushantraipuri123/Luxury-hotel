
function BookNow() {
  return (
    <>
     <div className="container-fluid bg-hero-sections">
        <div className="container">
          <h1 className="cormorant lh-1 mt-3 mb-4 display-2 text-white">
            Book Now
          </h1>
          <h5 className="tracking-wide lh-1 josefin text-white text-uppercase mt-lg-5">
            Home / Book Now
          </h5>
        </div>
      </div>

      <div className="container mt-5 py-lg-3 mb-3">
      <div className=" bg-white p-4">
        <h2 className="cormorant lh-1 mt-3 mb-3 fw-bolder text-black">
        Hotel Booking Form
        </h2>
        <div className="mt-2">
            <div className="row mt-3 jusify-content-between">
                <div className="col-lg-6 col-md-6 mt-2">
                <h5 className="josefin text-black">Check In</h5>
                <input type="date" className="bg-cream px-3 py-3 w-100 border" />
                </div>
                <div className="col-lg-6 col-md-6 mt-2">
                <h5 className="josefin text-black">Check Out</h5>
                <input type="date" className="bg-cream px-3 py-3 w-100 border" />
                </div>
            </div>

            <div className="row mt-3 jusify-content-between">
                <div className="col-lg-6 col-md-6 mt-2">
                <h5 className="josefin text-black">Persons</h5>
              <select className="bg-cream border px-3 py-3 w-100">
                {[...Array(5)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
                </div>
                <div className="col-lg-6 col-md-6 mt-2">
                <h5 className="josefin text-black">Room no. </h5>
              <select className="bg-cream border px-3 py-3 w-100">
                {[...Array(7)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
                </div>
            </div>

            <div className="row mt-4 ">
            <button className="btn-main josefin ms-2 scale-in-ver-bottom w-100">Check Now</button>
            </div>

        </div>
          </div>
</div>
    </>
  )
}

export default BookNow