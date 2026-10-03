import projectLogo from "../../pages/ProjectPages/M3M/images/logo.png";

const ProjectPageContactUsBanner = () => {
  return (
    <>
      <div className="   mt-[11%] border rounded-lg bg-black border-gold text-white p-6 shadow-md">
        <div className="text-center mb-4 ">
          <img src={projectLogo} alt="logo" className="mx-auto w-3/4" />
          <p className="text-gold text-sm text-center -mt-4">
            Sector 113, Dwarka Expressway, Gurgaon
          </p>
        </div>
        <form>
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            className="w-full border p-2 bg-grey mb-4 rounded-lg border-gold"
          />

          <label className="block mb-2">Email:</label>
          <input
            type="email"
            className="w-full border bg-grey p-2 mb-4 rounded-lg border-gold"
          />

          <label className="block mb-2">Phone no.:</label>
          <input
            type="tel"
            className="w-full border p-2 mb-4 rounded-lg bg-grey border-gold"
          />

          <label className="block mb-2">Message:</label>
          <textarea className="w-full border p-2 mb-4 rounded-lg bg-grey border-gold"></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-gold text-black rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Request a Call Back
          </button>
        </form>
      </div>
    </>
  );
};

export default ProjectPageContactUsBanner;
