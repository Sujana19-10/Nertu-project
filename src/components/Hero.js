import "./HeroStyles.css";
import { Carousel } from "react-bootstrap";
// import { nertulogo } from "./assets/nertulogo";

function Hero(props) {
  return (
    <>
      <Carousel>
      <Carousel.Item interval={500}>
        <img className="d-block w-100 "
        src="https://www.getmyuni.com/assets/images/articles/articles-b03a809fc0f06118f4b790dbd1d0243a.webp" alt="first slide"
        />
        <Carousel.Caption>
          <h2 className="text-black font-bold">First slide label</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100"
          src="https://thesouthfirst.com/wp-content/uploads/2023/03/Osmania-University-students-miffed-over-10-time-PhD-fee-hike-to-protest-on-25-March-scaled.jpg" alt="first slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100"
          src="https://www.getmyuni.com/assets/images/articles/articles-b03a809fc0f06118f4b790dbd1d0243a.webp" alt="first slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className="m-5">
      <h1 className="font-bold mt-2 mx-auto">About NERTU</h1>

    </div>
    <div>
      <p className="p-5">
      Osmania University is a collegiate public state university located in Hyderabad, Telangana, India. Mir Osman Ali Khan, the 7th Nizam of Hyderabad, issued a firman calling for its creation on 29 August 1917.[2] It is the third oldest university in southern India, and the first to be established in the erstwhile Kingdom of Hyderabad.<br/> It was the first Indian university to use Urdu as a language of instruction,[2] although with English as a compulsory subject.[6] As of 2012, the university hosts 3,700 international students from more than 80 nations.[7]

          <br/>Osmania is one of the largest university systems in the world with over 300,000 students on its campuses and affiliated colleges. The Osmania Medical College was once a part of the Osmania University System.[8] However, it is now under the supervision of Kaloji Narayana Rao University of Health Sciences.
          <h3 className="font-bold mt-2">History</h3>
          In 1917, Sir Akbar Hydari, in a memorandum to the Education Minister, emphasized the need to establish a university in Hyderabad with Urdu as the medium of instruction, "as it is the language of the widest currency in India".[12] On April 26, 1917, the Nizam of Hyderabad Mir Osman Ali Khan issued a firman to establish the Osmania University.[13]

           <br/> The university began functioning in 1918 in a building adjacent to the Nizam College at Basheerbagh.[14] Arts and theology were the only two faculties offered, and the first batch consisted of 225 students and 25 faculty members.[15]

           <br/>The government invited Patrick Geddes and Edwin Jasper to set up a permanent campus of the university.[16] Geddes surveyed prospective locations and presented his report in 1923.[13] Jasper drew up the building plans and the Nizam laid the foundation stone for the campus on July 5, 1934.[13] After Jasper left Hyderabad, the state architect Zain Yar Jung supervised the construction of the campus.
      </p>
    </div>
    </>
  );
}

export default Hero;
