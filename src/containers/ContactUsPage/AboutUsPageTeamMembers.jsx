import background from "../../assets/images/AboutPage/trendingprojects.webp";
import founder from "../../assets/founder.jpeg";
import { FaLinkedin } from "react-icons/fa";

const teamMemberImage = "/team-member-placeholder.svg";

const AboutUsPageMembers = () => {
  return (
    <>
      <div
        className="hidden sm:flex flex-col w-full h-[105vh]  bg-cover bg-center justify-center border-t-2 border-gold"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex place-content-around py-4">
          <div className="w-[50%] flex justify-center items-center">
            <h3 className="text-white text-6xl text-addington text-center text-start leading-[150%] italic">
              We Are Pleased To
              <br />
              <span className="text-aesthete text-gold">Meet You</span>
            </h3>
          </div>
          <div className="w-[50%] flex float-end place-content-around">
            <div className="w-[270px] h-[370px] rounded-xl text-center bg-grey border-gold border-2 flex flex-col">
              <div className="h-[75%] bg-grey rounded-xl border-b-2 border-gold">
                <img
                  src={founder}
                  alt="Adarsh, Founder & CEO"
                  className="w-full h-[100%] rounded-xl shadow-3xl-white"
                />
              </div>
              <div className="px-4 md:pb-4 flex flex-col justify-center items-center text-white">
                <div className="w-full flex flex-col items-center mt-1">
                  <h3 className="text-2xl text-gold font-medium leading-tight text-addington">
                    Adarsh
                  </h3>
                  <h4 className="text-lg font-light text-gray-300 ">
                    Founder & CEO
                  </h4>
                </div>
                <div className="flex items-center ">
                  <h4 className="mr-2">LinkedIn - </h4>
                  <FaLinkedin className="text-xl " />
                </div>
              </div>
            </div>
            <div className="w-[270px] h-[370px] rounded-xl text-center bg-grey border-gold border-2 flex flex-col">
              <div className="h-[75%] bg-grey rounded-xl border-b-2 border-gold">
                <img
                  src={teamMemberImage}
                  className="w-full h-[100%] rounded-xl shadow-3xl-white"
                />
              </div>
              <div className="px-4 md:pb-4 flex flex-col justify-center items-center text-white">
                <div className="w-full flex flex-col items-center mt-1">
                  <h3 className="text-2xl text-gold font-medium leading-tight text-addington">
                    Casey Taylor
                  </h3>
                  <h4 className="text-lg font-light text-gray-300 ">
                    Co-Founder & Partner
                  </h4>
                </div>
                <div className="flex items-center ">
                  <h4 className="mr-2">LinkedIn - </h4>
                  <FaLinkedin className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex place-content-around py-4">
          <div className="w-[270px] h-[370px] rounded-xl text-center bg-grey border-gold border-2 flex flex-col">
            <div className="h-[75%] bg-grey rounded-xl border-b-2 border-gold">
              <img
                src={teamMemberImage}
                className="w-full h-[100%] rounded-xl shadow-3xl-white"
              />
            </div>
            <div className="px-4 md:pb-4 flex flex-col justify-center items-center text-white">
              <div className="w-full flex flex-col items-center mt-1">
                <h3 className="text-2xl text-gold font-medium leading-tight text-addington">
                    Jamie Parker
                </h3>
                <h4 className="text-lg font-light text-gray-300 ">
                  Managing Partner
                </h4>
              </div>
              <div className="flex items-center ">
                <h4 className="mr-2">LinkedIn - </h4>
                <FaLinkedin className="text-xl" />
              </div>
            </div>
          </div>
          <div className="w-[270px] h-[370px] rounded-xl text-center bg-grey border-gold border-2 flex flex-col">
            <div className="h-[75%] bg-grey rounded-xl border-b-2 border-gold">
              <img
                src={teamMemberImage}
                className="w-full h-[100%] rounded-xl shadow-3xl-white"
              />
            </div>
            <div className="px-4 md:pb-4 flex flex-col justify-center items-center text-white">
              <div className="w-full flex flex-col items-center mt-1">
                <h3 className="text-2xl text-gold font-medium leading-tight text-addington">
                  Morgan Ellis
                </h3>
                <h4 className="text-lg font-light text-gray-300 ">
                  Managing Partner
                </h4>
              </div>
              <div className="flex items-center ">
                <h4 className="mr-2">LinkedIn - </h4>
                <FaLinkedin className="text-xl" />
              </div>
            </div>
          </div>
          <div className="w-[270px] h-[370px] rounded-xl text-center bg-grey border-gold border-2 flex flex-col">
            <div className="h-[75%] bg-grey rounded-xl border-b-2 border-gold">
              <img
                src={teamMemberImage}
                className="w-full h-[100%] rounded-xl shadow-3xl-white"
              />
            </div>
            <div className="px-4 md:pb-4 flex flex-col justify-center items-center text-white">
              <div className="w-full flex flex-col items-center mt-1">
                <h3 className="text-2xl text-gold font-medium leading-tight text-addington">
                  Riley Jordan
                </h3>
                <h4 className="text-lg font-light text-gray-300 ">
                  Managing Partner
                </h4>
              </div>
              <div className="flex items-center ">
                <h4 className="mr-2">LinkedIn - </h4>
                <FaLinkedin className="text-xl" />
              </div>
            </div>
          </div>
          <div className="w-[270px] h-[370px] rounded-xl text-center bg-grey border-gold border-2 flex flex-col">
            <div className="h-[75%] bg-grey rounded-xl border-b-2 border-gold">
              <img
                src={teamMemberImage}
                className="w-full h-[100%] rounded-xl shadow-3xl-white"
              />
            </div>
            <div className="px-4 md:pb-4 flex flex-col justify-center items-center text-white">
              <div className="w-full flex flex-col items-center mt-1">
                <h3 className="text-2xl text-gold font-medium leading-tight text-addington">
                  Avery Quinn
                </h3>
                <h4 className="text-lg font-light text-gray-300 ">
                  Managing Partner
                </h4>
              </div>
              <div className="flex items-center ">
                <h4 className="mr-2">LinkedIn - </h4>
                <FaLinkedin className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="sm:hidden flex flex-col w-full min-h-screen bg-cover bg-center justify-center border-t-2 border-gold"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex flex-col md:flex-row place-content-around py-4">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <h3 className="text-white text-4xl md:text-6xl text-addington text-center md:text-start leading-[150%] italic">
              We Are Pleased To
              <br />
              <span className="text-aesthete text-gold">Meet You</span>
            </h3>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 mt-4 md:mt-0 px-2">
            {[
              {
                name: "Alex Morgan",
                title: "Founder & CEO",
                image: founder,
              },
              {
                name: "Casey Taylor",
                title: "Co-Founder",
                image: teamMemberImage,
              },
              {
                name: "Jamie Parker",
                title: "Managing Partner",
                image: teamMemberImage,
              },
              {
                name: "Morgan Ellis",
                title: "Managing Partner",
                image: teamMemberImage,
              },
              {
                name: "Riley Jordan",
                title: "Managing Partner",
                image: teamMemberImage,
              },
              {
                name: "Avery Quinn",
                title: "Managing Partner",
                image: teamMemberImage,
              },
            ].map((member, index) => (
              <div
                key={index}
                className="w-full h-auto rounded-xl text-center bg-grey border-gold border-2 flex flex-col mb-4 md:mb-0"
              >
                <div className="h-56 md:h-[75%] bg-grey rounded-t-xl border-b-2 border-gold">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-t-xl shadow-3xl-white"
                  />
                </div>
                <div className="px-4 py-2 md:pb-4 flex flex-col justify-center items-center text-white">
                  <div className="w-full flex flex-col items-center mt-1">
                    <h3 className="text-lg md:text-2xl text-gold font-medium leading-tight text-addington">
                      {member.name}
                    </h3>
                    <h4 className="text-sm md:text-lg font-light text-gray-300">
                      {member.title}
                    </h4>
                  </div>
                  <div className="flex items-center mt-2">
                    <h4 className="text-xs md:text-base">LinkedIn - </h4>
                    <FaLinkedin className="ml-1 text-lg md:text-xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPageMembers;
