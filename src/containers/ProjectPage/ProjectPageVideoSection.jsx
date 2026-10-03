const ProjectPageVideoSection = () => {
    return (
      <>
        <div className=" bg-grey border text-white p-6 shadow-md rounded-lg">
          <div>
          <h3 className="text-4xl font-bold mb-4">Video</h3>
          <hr className="gradient-hr mb-3 w-20" />
          </div>
  
          <div className="relative rounded-xl" style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/uHkUrTbaeTE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </>
    );
  };
  
  export default ProjectPageVideoSection;
  
