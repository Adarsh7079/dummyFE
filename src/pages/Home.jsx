import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import HomePageTrendingProjects from "../containers/HomePage/HomePageTrendingProjects";
import HomePageBanner from "../containers/HomePage/HomePageBanner";
import HomePageFeaturedCollections from "../containers/HomePage/HomePageFeaturedCollections";
import HomePageHotLocalities from "../containers/HomePage/HomePageHotLocalities";
import HomePageTopDeveloper from "../containers/HomePage/HomePageTopDeveloper";
import HomePageOurPresence from "../containers/HomePage/HomePageOurPresence";
import HomePageOurServices from "../containers/HomePage/HomePageOurServices";
import HomePageDirectorsDesk from "../containers/HomePage/HomePageDirectorsDesk";
import HomePageWhyChooseUs from "../containers/HomePage/HomePageWhyChooseUs";
// import ScrollingItems from "../containers/HomePage/ScrollingItems";


const Home = () => {
  return (
    <>
      <Navbar isHomePage={true} />
      <HomePageBanner />
      <HomePageTrendingProjects />
      <HomePageFeaturedCollections />
      <HomePageHotLocalities />
      <HomePageTopDeveloper />
      <HomePageOurPresence />
      <HomePageOurServices />
      <HomePageWhyChooseUs />
      <HomePageDirectorsDesk />
      {/* <ScrollingItems/> */}
      <Footer />
    </>
  );
};

export default Home;
