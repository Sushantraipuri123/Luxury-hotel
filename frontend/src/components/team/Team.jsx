import './Team.css';

const teamMembers = [
  {
    name: 'John Doe',
    designation: 'CEO',
    imgUrl: 'https://wp.ditsolution.net/luxury/wp-content/uploads/2023/06/team1.jpg',
  },
  {
    name: 'Jane Smith',
    designation: 'CTO',
    imgUrl: 'https://wp.ditsolution.net/luxury/wp-content/uploads/2023/06/team2.jpg',
  },
  {
    name: 'Mike Johnson',
    designation: 'Lead Developer',
    imgUrl: 'https://wp.ditsolution.net/luxury/wp-content/uploads/2023/06/team1.jpg',
  },
  {
    name: 'John Doe',
    designation: 'CEO',
    imgUrl: 'https://wp.ditsolution.net/luxury/wp-content/uploads/2023/06/team1.jpg',
  },
  {
    name: 'Jane Smith',
    designation: 'CTO',
    imgUrl: 'https://wp.ditsolution.net/luxury/wp-content/uploads/2023/06/team2.jpg',
  },
  {
    name: 'Mike Johnson',
    designation: 'Lead Developer',
    imgUrl: 'https://wp.ditsolution.net/luxury/wp-content/uploads/2023/06/team1.jpg',
  },
  // Add more team members as needed
];

function Team() {
  return (
    <>
      <div className="container-fluid bg-hero-sections">
        <div className="container">
          <h1 className="cormorant lh-1 mt-3 mb-4 display-2 text-white">
            Team Members
          </h1>
          <h5 className="tracking-wide lh-1 josefin text-white text-uppercase mt-lg-5">
            Home / Team
          </h5>
        </div>
      </div>

      <div className="container mt-5 py-lg-3 mb-3">
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3" key={index}>
              <div className="card team-card position-relative">
                <img
                  className="card-img-top"
                  src={member.imgUrl}
                  alt={member.name}
                />
                <div className="card-img-overlay team-card-img-overlay d-flex align-items-end">
                  <h5 className="card-title m-0 bg-cream p-4 tracking-wide lh-1 josefin text-white">
                    {member.name}
                    <br/>
                    <br/>
                    <span >{member.designation}</span>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;
