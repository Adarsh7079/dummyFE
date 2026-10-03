import AboutUsPageBanner from "../containers/ContactUsPage/AboutUsPageBanner";
import AboutUsPageMembersinfo from "../containers/ContactUsPage/AboutUsPageMembersinfo";
import AboutUsPageMembers from "../containers/ContactUsPage/AboutUsPageTeamMembers";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const About = () => {
  return (
    <>
      <Navbar/>
      <AboutUsPageBanner />
      <AboutUsPageMembers />
      <AboutUsPageMembersinfo />
      <Footer />
    </>
  );
};

export default About;
