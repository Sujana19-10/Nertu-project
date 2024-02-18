import Hero from "../components/Hero";
import MainProjects from "../components/MainProjects";
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
