import React, { useRef } from "react";
import ProjectPageNavbar from "../../containers/ProjectPage/ProjectPageNavbar";
import Gallery from "../../containers/ProjectPage/ProjectPageBanner";
import BannerInfo from "../../containers/ProjectPage/ProjectPageBannerInfo";
import ProjectPageMenuBar from "../../containers/ProjectPage/ProjectPageMenuBar";
import ProjectPageOverview from "../../containers/ProjectPage/ProjectPageOverview";
import ProjectPageHighlighttwo from "../../containers/ProjectPage/ProjectPageHighlighttwo";
import ProjectPageAmenities from "../../containers/ProjectPage/ProjectPageAmenities";
import ProjectPageGallery from "../../containers/ProjectPage/ProjectPageGallery";
import ProjectPageFloorPlan from "../../containers/ProjectPage/ProjectPageFloorPlan";
import ProjectPageLocation from "../../containers/ProjectPage/ProjectPageLocation";
import ProjectPagePriceList from "../../containers/ProjectPage/ProjectPagePriceList";
import ProjectPageFaq from "../../containers/ProjectPage/ProjectPageFaq";
import ProjectPageVideoSection from "../../containers/ProjectPage/ProjectPageVideoSection";
import ProjectPageAboutDeveloper from "../../containers/ProjectPage/ProjectPageAboutDeveloper";
import ProjectPageRelatedProjects from "../../containers/ProjectPage/ProjectPageRelatedProjects";
import ProjectPageContactUsBanner from "../../containers/ProjectPage/ProjectPageContactUsBanner";
import ProjectPageDisclaimer from "../../containers/ProjectPage/ProjectPageDisclaimer";
import Footer from "../../components/common/Footer";
import Button from "../../components/ui/Button";

const ProjectDetailsTemplate = ({ project, onEnquire }) => {
  // Destructure all project data with safe defaults
  const {
    galleryImages = [],
    banner = {},
    overview = {},
    highlights = [],
    amenities = [],
    floorPlans = [],
    locationDetails = {},
    priceList = [],
    faqs = [],
    videoUrl = "",
    developer = {},
    relatedProjects = [],
  } = project;

  // Refs for sticky navigation
  const overviewRef = useRef(null);
  const highlightsRef = useRef(null);
  const amenitiesRef = useRef(null);
  const galleryRef = useRef(null);
  const pricingRef = useRef(null);
  const floorPlanRef = useRef(null);
  const locationRef = useRef(null);

  const scrollToSection = (ref) => {
    if (!ref?.current) return;
    const topOffset = window.innerHeight / 2;
    const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementTop - topOffset, behavior: "smooth" });
  };

  const handleMenuClick = (section) => {
    const refMap = {
      overview: overviewRef,
      highlights: highlightsRef,
      amenities: amenitiesRef,
      gallery: galleryRef,
      pricing: pricingRef,
      floorPlan: floorPlanRef,
      location: locationRef,
    };
    if (refMap[section]) scrollToSection(refMap[section]);
  };

  return (
    <div className="bg-[#09090b] text-white min-h-screen">
      <ProjectPageNavbar />

      <div className="relative w-full max-w-8xl mx-auto flex flex-col md:flex-row px-4 sm:px-6 lg:px-8 py-6">
        {/* Main Content Stream */}
        <main className="w-full md:w-3/4 space-y-10 pr-0 md:pr-6">
          {/* Banner & Gallery */}
          {galleryImages.length > 0 && <Gallery images={galleryImages} />}

          {/* Banner Summary Info */}
          <BannerInfo
            text1={banner.price}
            text2={banner.area}
            text3={banner.type}
            text4={banner.status}
          />

          {/* Sticky Menu Bar */}
          <div className="sticky top-20 z-20 hidden md:block bg-black/80 backdrop-blur-md rounded-lg py-2">
            <ProjectPageMenuBar onMenuItemClick={handleMenuClick} />
          </div>

          {/* Overview */}
          <section ref={overviewRef}>
            <ProjectPageOverview
              overviewtext1={overview.text1}
              overviewtext2={overview.text2}
            />
          </section>

          <div className="flex justify-center">
            <Button
              text="Enquire Now"
              onClick={() => onEnquire?.("Enquire Now")}
              className="bg-amber-400 text-black font-semibold hover:bg-amber-300 transition-colors py-2.5 px-6 rounded-lg"
            />
          </div>

          {/* Highlights */}
          <section ref={highlightsRef}>
            <ProjectPageHighlighttwo data={highlights} />
          </section>

          {/* Amenities */}
          <section ref={amenitiesRef}>
            <ProjectPageAmenities data={amenities} />
          </section>

          <div className="flex justify-center">
            <Button
              text="Download Brochure"
              onClick={() => onEnquire?.("Download Brochure")}
              className="bg-amber-400 text-black font-semibold hover:bg-amber-300 transition-colors py-2.5 px-6 rounded-lg"
            />
          </div>

          {/* Gallery Section */}
          <section ref={galleryRef}>
            <ProjectPageGallery images={galleryImages} />
          </section>

          {/* Floor Plans */}
          <section ref={floorPlanRef}>
            <ProjectPageFloorPlan data={floorPlans} />
          </section>

          <div className="flex justify-center">
            <Button
              text="Download Floor Plan"
              onClick={() => onEnquire?.("Download Floor Plan")}
              className="bg-amber-400 text-black font-semibold hover:bg-amber-300 transition-colors py-2.5 px-6 rounded-lg"
            />
          </div>

          {/* Location */}
          <section ref={locationRef}>
            <ProjectPageLocation data={locationDetails} />
          </section>

          {/* Price List */}
          <section ref={pricingRef}>
            <ProjectPagePriceList data={priceList} />
          </section>

          <div className="flex justify-center">
            <Button
              text="Schedule a Site Visit"
              onClick={() => onEnquire?.("Schedule a Site Visit")}
              className="bg-amber-400 text-black font-semibold hover:bg-amber-300 transition-colors py-2.5 px-6 rounded-lg"
            />
          </div>

          {/* FAQs, Video, Developer Info & Disclaimer */}
          <ProjectPageFaq data={faqs} />
          <ProjectPageVideoSection videoUrl={videoUrl} />
          <ProjectPageAboutDeveloper data={developer} />
          <ProjectPageRelatedProjects data={relatedProjects} />
          <ProjectPageDisclaimer />
        </main>

        {/* Sticky Contact Sidebar */}
        <aside className="hidden md:block md:w-1/4 sticky top-24 h-fit">
          <ProjectPageContactUsBanner projectName={banner.title} />
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetailsTemplate;