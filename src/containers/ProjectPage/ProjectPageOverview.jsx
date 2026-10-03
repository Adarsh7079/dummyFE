
const ProjectPageOverview = ({ overviewtext1, overviewtext2 }) => {
  return (
    <div className=" bg-grey text-white border-2  p-6 shadow-md rounded-lg text-justify">
      <h3 className="text-2xl text-4xl font-bold mb-4">Overview</h3>
      <hr className="gradient-hr mb-3 w-20 " />
      <p className="text-lg">{overviewtext1} <br /><br /> {overviewtext2}</p>
    </div>
  );
};

export default ProjectPageOverview;
