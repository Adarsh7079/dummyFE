
import Gallery from "../../../containers/ProjectPage/ProjectPageBanner";

import image1 from "../../../assets/images/Gallery1.jpg";
import image2 from "../../../assets/images/Gallery2.jpg";
import image3 from "../../../assets/images/Gallery3.jpg";
import image4 from "../../../assets/images/Gallery4.webp";
import image5 from "../../../assets/images/Gallery5.webp";

import BannerInfo from "../../../containers/ProjectPage/ProjectPageBannerInfo";
import ProjectPageMenuBar from "../../../containers/ProjectPage/ProjectPageMenuBar";
import ProjectPageOverview from "../../../containers/ProjectPage/ProjectPageOverview";
import Button from "../../../components/ui/Button";
import ProjectPageHighlight from "../../../containers/ProjectPage/ProjectPageHighlight";
import ProjectPageAmenities from "../../../containers/ProjectPage/ProjectPageAmenities";
import ProjectPageGallery from "../../../containers/ProjectPage/ProjectPageGallery";
import ProjectPageFloorPlan from "../../../containers/ProjectPage/ProjectPageFloorPlan";
import ProjectPageLocation from "../../../containers/ProjectPage/ProjectPageLocation";
import ProjectPagePriceList from "../../../containers/ProjectPage/ProjectPagePriceList";
import ProjectPageVideoSection from "../../../containers/ProjectPage/ProjectPageVideoSection";
import ProjectPageAboutDeveloper from "../../../containers/ProjectPage/ProjectPageAboutDeveloper";
import ProjectPageRelatedProjects from "../../../containers/ProjectPage/ProjectPageRelatedProjects";
import ProjectPageDisclaimer from "../../../containers/ProjectPage/ProjectPageDisclaimer";
import Footer from "../../../components/common/Footer";
import ProjectPageNavbar from "../../../containers/ProjectPage/ProjectPageNavbar";
import ProjectPageFaq from "../../../containers/ProjectPage/ProjectPageFaq";
import ProjectPageContactUsBanner from "../../../containers/ProjectPage/ProjectPageContactUsBanner";

const GolfHills = () => {
  const slidesData = [
    { src: image1, alt: "Image 1 for carousel" },
    { src: image2, alt: "Image 2 for carousel" },
    { src: image3, alt: "Image 3 for carousel" },
    { src: image4, alt: "Image 4 for carousel" },
    { src: image5, alt: "Image 5 for carousel" },
  ];
  const text1 = "4.56 CR ONWARDS";
  const text2 = "1305 SQ. FT ONWARDS";
  const text3 = "2, 3 & 4 BHK FLOOR";
  const text4 = "UNDER CONSTRUCTION";

  const overviewtext1 =
    "printer took a galley of type and scrambinto electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum .";
  const overviewtext2 =
    "Lorem Ipsum is simply dummy text industrled it to make a type specimnturies, but also the leap y's standard dummy ten book. It has survived not only five ceext ever since the 1500s, when an unknown .";

  const handleButtonClick = () => {
    alert("Enquire Now button clicked!");
  };

  const overviewRef = useRef(null);
  const highlightsRef = useRef(null);
  const amenitiesRef = useRef(null);
  const galleryRef = useRef(null);
  const pricingRef = useRef(null);
  const floorPlanRef = useRef(null);
  const locationRef = useRef(null);

  const scrollToSection = (ref) => {
    const topOffset = window.innerHeight / 2;
    const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = elementTop - topOffset;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  return (
    <>
      <ProjectPageNavbar />
      <div className="relative w-[100%] inline-block">
        <div className="relative float-left w-3/4">
          <Gallery images={slidesData} />
          <BannerInfo text1={text1} text2={text2} text3={text3} text4={text4} />
          <ProjectPageMenuBar
            onMenuItemClick={(section) => {
              switch (section) {
                case "overview":
                  scrollToSection(overviewRef);
                  break;
                case "highlights":
                  scrollToSection(highlightsRef);
                  break;
                case "amenities":
                  scrollToSection(amenitiesRef);
                  break;
                case "gallery":
                  scrollToSection(galleryRef);
                  break;
                case "pricing":
                  scrollToSection(pricingRef);
                  break;
                case "floorPlan":
                  scrollToSection(floorPlanRef);
                  break;
                case "location":
                  scrollToSection(locationRef);
                  break;
                default:
                  break;
              }
            }}
          />
          <div ref={overviewRef}>
            <ProjectPageOverview
              overviewtext1={overviewtext1}
              overviewtext2={overviewtext2}
            />
          </div>
          <div className="flex justify-center mt-4">
            <Button
              text="Enquire Now"
              onClick={handleButtonClick}
              className="bg-black text-gold border border-gold "
            />
          </div>
          <div ref={highlightsRef}>
            <ProjectPageHighlight />
          </div>
          <div ref={amenitiesRef}>
            <ProjectPageAmenities />
          </div>
          <div className="flex justify-center mt-4">
            <Button
              text="Download Brochure"
              onClick={handleButtonClick}
              className="bg-black text-gold border border-gold "
            />
          </div>
          <div ref={galleryRef}>
            <ProjectPageGallery />
          </div>
          <div ref={floorPlanRef}>
            <ProjectPageFloorPlan />
          </div>
          <div className="flex justify-center mt-4">
            <Button
              text="Download Floor Plan"
              onClick={handleButtonClick}
              className="bg-black text-gold border border-gold "
            />
          </div>
          <div ref={locationRef}>
            <ProjectPageLocation />
          </div>
          <div ref={pricingRef}>
            <ProjectPagePriceList />
          </div>
          <div className="flex justify-center mt-4">
            <Button
              text="Schedule a Site Visit"
              onClick={handleButtonClick}
              className="bg-black text-gold border border-gold "
            />
          </div>
          <ProjectPageFaq />
          <ProjectPageVideoSection />
          <ProjectPageAboutDeveloper />
          <ProjectPageRelatedProjects />
        </div>
        <div className="sticky float-left w-1/4 top-[100px] right-[35px]">
          <ProjectPageContactUsBanner />
        </div>
      </div>
      <ProjectPageDisclaimer />
      <Footer />
    </>
  );
};

export default GolfHills;
