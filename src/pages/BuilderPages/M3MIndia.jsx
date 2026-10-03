import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import ProjectPageAboutDeveloper from "../../containers/DeveloperPage/DeveloperPageAboutDeveloper";
import DeveloperPageBanner from "../../containers/DeveloperPage/DeveloperPageBanner";
import DeveloperPageFAQ from "../../containers/DeveloperPage/DeveloperPageFAQ";
import DeveloperPageListings from "../../containers/DeveloperPage/DeveloperPageLIstings";

const M3MIndia = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <DeveloperPageBanner />
        <ProjectPageAboutDeveloper />
        <DeveloperPageListings />
        <DeveloperPageFAQ />
        <Footer />
      </div>
    </>
  );
};

export default M3MIndia;
