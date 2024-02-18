//import "./ContactFormStyles.css";

function ContactDetails() {
  return (
    <div id="gallery" className="m-4 pt-2">
      <h1
        className="text-center text-info py-5 mt-5"
        style={{ fontWeight: 800, fontSize: 40 }}
      >
        Contact Details
      </h1>
      <h1>Dr.P.Laxminarayana</h1>
      <div className="fs-4">
        {/* <h1>Dr.P.Laxminarayana</h1> */}
        <div>
          Principal Scientist/Professor and Director,
          <br /> Research and Training Unit for Navigational Electronics
          (NERTU),
          <br /> Osmania University
          <br /> Hyderabad 500 007
          <br /> <h3>INDIA</h3>
        </div>
        <div className="d-flex align-center">
          <div style={{width:270}}></div>
          <div className="mx-5">
            <h3 className="text-left">Phone Number :</h3>
            +91 (40) 23157787 (R)
            <br />
            +91 (40) 27098066 (O)
            <br />
            +91 949 080 5486 (M)
          </div>

          <div className="mx-5">
            <h3 className="text-left">Email Address :</h3>
            laxminarayana@osmania.ac.in
            <br />
            director.nertu@osmania.ac.in
            <br />
            plaxminarayana@yahoo.com
          </div>
          <div className="w-200"></div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ContactDetails;

// Dr.P.Laxminarayana
// Principal Scientist/Professor and Director
// Research and Training Unit for Navigational Electronics,
// (NERTU)
// Osmania University
// Hyderabad 500 007
// INDIA
// Ph. 	+91 (40) 23157787 (R)
//  	+91 (40) 27098066 (O)
//  	+91 949 080 5486 (M)
// Alt. email: laxminarayana@osmania.ac.in
//                  director.nertu@osmania.ac.in
//                  plaxminarayana@yahoo.com
