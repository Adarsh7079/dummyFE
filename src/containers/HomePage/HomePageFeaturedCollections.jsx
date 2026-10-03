import featuredprojects from "../../assets/images/HomePageImages/featuredprojects.webp";

const projectTypes = [
  { firstWord: "Upcoming", secondWord: "Projects" },
  { firstWord: "New", secondWord: "Projects" },
  { firstWord: "Ready to", secondWord: "Move In" },
  { firstWord: "Luxury", secondWord: "Projects" },
  { firstWord: "Ultra Luxury", secondWord: "Projects" },
  { firstWord: "Under ", secondWord: "Construction" }
];

const HomePageFeaturedCollections = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col border-t-4 border-gold justify-center items-center text-center text-white p-8"
      style={{ backgroundImage: `url(${featuredprojects})` }}
    >
      <div className="mb-8">
        <h2 className="text-3xl mb-6 text-gold text-aesthete">Featured</h2>
        <h3 className="text-6xl font-bold mb-4 text-gold text-addington">
          Collections
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full my-10 max-w-4xl place-content-stretch">
        {projectTypes.map((type, index) => (
          <div
            key={index}
            className="w-full h-32 text-2xl font-medium border border-gold p-4 bg-opacity-75 flex flex-col justify-center items-center text-center"
          >
            {type.firstWord} <br /> {type.secondWord}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageFeaturedCollections;
