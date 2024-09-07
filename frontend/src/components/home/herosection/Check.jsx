function Check() {
    return (
      <>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-2 col-md-4 mt-2 p-3">
              <h5 className="josefin">Check In</h5>
              <input type="date" className="bg-transparent px-3 py-3 w-100" />
            </div>
  
            <div className="col-lg-2 col-md-4 mt-2 p-3">
              <h5 className="josefin">Check Out</h5>
              <input type="date" className="bg-transparent px-3 py-3 w-100" />
            </div>
  
            <div className="col-lg-2 col-md-4 mt-2 p-3">
              <h5 className="josefin">Adult</h5>
              <select className="bg-transparent px-3 py-3 w-100">
                {[...Array(7)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
  
            <div className="col-lg-2 col-md-4 mt-2 p-3">
              <h5 className="josefin">Children</h5>
              <select className="bg-transparent px-3 py-3 w-100">
                {[...Array(7)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
  
            <div className="col-lg-2 col-md-4 mt-2 p-3">
              <h5 className="josefin">Rooms</h5>
              <select className="bg-transparent px-3 py-3 w-100">
                {[...Array(7)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
  
            <div className="col-lg-2 col-md-4 mt-2 p-3 d-flex align-items-end ">
            <button className="btn-main josefin ms-2 scale-in-ver-bottom w-100">Check Now</button>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Check;
  