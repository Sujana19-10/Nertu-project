import "./HeroStyles.css";
import { Carousel } from "react-bootstrap";
// import nertuLogo from "../assets/nertulogo.jpeg";
import dirImg from "../assets/laxminarayana.jpg";
import mainImg from "../assets/pic1.jpg";
import { useEffect, useRef } from "react";
// import Img1 from "../assets/Workshop/NERTU_COURSES_GNSS19_Course.jpg"
// import Img2 from "../assets/Workshop/NERTU_OURSES_RSP16.jpg"


const advertisements = [
  "Advertisement 1 ",
  "Advertisement 2 ",
  "Advertisement 3 ",
  "Advertisement 4 ",
  "Advertisement 5 ",
  "Advertisement 6 ",
  "Advertisement 7 ",
  "Advertisement 8 "
];

function Hero(props) {
  // Ref to the advertisement container
  const advertisementRef = useRef(null);

  // Function to start the animation
  useEffect(() => {
    const advertisementContainer = advertisementRef.current;
    const width = advertisementContainer.offsetWidth;
    const animationDuration = width / 150; // Adjust the animation duration based on the container width

    const marqueeAnimation = () => {
      const advertisementList = advertisementContainer.querySelectorAll(".advertisement");
      advertisementList.forEach((advertisement) => {
        advertisement.style.animation = `marquee ${animationDuration}s linear infinite`;
      });
    };

    marqueeAnimation();

    // Restart animation when it ends
    advertisementContainer.addEventListener("animationiteration", () => {
      marqueeAnimation();
    });

    return () => {
      advertisementContainer.removeEventListener("animationiteration", () => {
        marqueeAnimation();
      });
    };
  }, []);

  return (
    <div>
      <div className="h-400">
        <div className="image-container">
          <div className="brown-overlay" ref={advertisementRef}>
            {/* Text content */}
            {advertisements.map((advertisement, index) => (
              <p key={index} className="advertisement">
                {advertisement}
              </p>
            ))}
          </div>
          {/* Main image */}
          <img src={mainImg} className="w-100" alt="Main" />
        </div>
      </div>

      <div className="m-5">
        {/* <img src={nertuLogo} style={{height:200}}/> */}
        <h1 className="text-center text-info mt-5" style={{fontWeight:800, fontSize:55}}>Research &nbsp; And &nbsp; Training &nbsp; Unit &nbsp; For &nbsp; Navigational &nbsp; Electronics &nbsp; (NERTU)</h1>
      </div>
      <div>
        <p className="mx-5 px-5 pb-5 d-flex text-start">
          <div>
            <h3 className="font-bold text-danger mt-2">About</h3>
            <div style={{ textAlign:"justify" }}>
            Osmania University is a collegiate public state university located
            in Hyderabad, Telangana, India. Mir Osman Ali Khan, the 7th Nizam of
            Hyderabad, issued a firman calling for its creation on 29 August
            1917. It is the third oldest university in southern India, and the
            first to be established in the erstwhile Kingdom of Hyderabad.
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; It was the first Indian university to use Urdu as a language
            of instruction, although with English as a compulsory subject. As of
            2012, the university hosts 3,700 international students from more
            than 80 nations.
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Osmania is one of the largest university systems in the world with
            over 300,000 students on its campuses and affiliated colleges. The
            Osmania Medical College was once a part of the Osmania University
            System. However, it is now under the supervision of Kaloji Narayana
            Rao University of Health Sciences.
            </div>
          </div>
          {/* <div style={{padding:20}}>  </div> */}
          <div style={{ width: 2700, paddingLeft: 55}}>
            <h3 className="font-bold text-danger mt-2">History</h3>
            <div style={{ textAlign:"justify" }}>In 1917, Sir Akbar Hydari, in a memorandum to the Education
            Minister, emphasized the need to establish a university in Hyderabad
            with Urdu as the medium of instruction, "as it is the language of
            the widest currency in India". On April 26, 1917, the Nizam of
            Hyderabad Mir Osman Ali Khan issued a firman to establish the
            Osmania University.
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  The university began functioning in 1918 in a building
            adjacent to the Nizam College at Basheerbagh. Arts and theology were
            the only two faculties offered, and the first batch consisted of 225
            students and 25 faculty members.
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            The government invited Patrick Geddes and Edwin Jasper to set up a
            permanent campus of the university. Geddes surveyed prospective
            locations and presented his report in 1923. Jasper drew up the
            building plans and the Nizam laid the foundation stone for the
            campus on July 5, 1934. After Jasper left Hyderabad, the state
            architect Zain Yar Jung supervised the construction of the campus.</div>
          </div>
        </p>
        <p className="mx-5 px-5 pb-5 d-flex text-start">
          <img src={dirImg} style={{height:300, width:250, marginTop:50, borderRadius:'50%'}}/>
          <div style={{ marginLeft:55}}>
          <h3 className="font-bold mt-2 mb-4 text-danger" >Know About Director</h3>
          <h4 className="font-bold my-2">Prof. P. Laxminarayana</h4>
          <div style={{ textAlign:"justify" }}>Dr. P. Laxminarayana (PLN) is the Professor and Director of NERTU, OU. He got his M.E. and Ph.D. from the Department of Electronics and Communication Engineering, Osmania University in 1994 and 2000, respectively. He has been working for NERTU, Osmania University, since 1994.  His passion is Technology Development, industry-institute interaction and start-ups.  He is involved in executing several sponsored and Consultancy projects from public and Private Organizations as Principal investigator and co-investigator. He has taken lien from university from July 2003 to June 2005 to establish and lead a 13-member team of "DSP and Audio Processing Technology" group at Hyderabad Development Centre (HDC) of Analog Devices Inc. (ADI). Later, he was also a consultant to ADI and Lantiq Communications India Pvt. Ltd. By recognizing his services at HDC-ADI, ADI funded the Department of ECE to establish a Multimedia and ADSPs laboratory at Osmania University. Three groups of students/alumni members of OU are working in collaboration with him to develop new products and planning for start-ups. He was faculty cum coordinator in organizing more than 20 short-term courses in the areas of Signal Processing, Communication and Navigation. He has published more than 40 Journal and conference papers and technical reports. He has guided more than 40 ME students and 2-PhD Students. His areas of research interest are the development and implementation of Signal and Image Processing algorithms for Communications, Navigation and Object Recognition. At present, he is working on the development of a GNSS software Receiver, Integration of GNSS with other navigation systems, ASR and TTS systems, Face Detection and Recognition, and Instruments for Biotech Industries.</div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Hero;
