import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MainProjects from "../components/MainProjects";
import Navbar from "../components/Navbar";
import RecentPublications from "../components/RecentPublications";
import WorkshopList from "../components/WorkshopList";


function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <Hero/>
      <WorkshopList/>
      <RecentPublications/>
      <MainProjects/>
    </>
  );
}

export default Home;
