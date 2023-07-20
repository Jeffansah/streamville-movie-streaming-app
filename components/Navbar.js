import genres from "@/utils/requests";

const Navbar = () => {
  return (
    <nav className="relative">
      <div>
        {genres.map((genre) => {
          return (
            <div
              key={Object.keys(genre)[0]}
              className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide"
            >
              {Object.entries(genre).map(([key, { title, url }]) => (
                <div key={key}>
                  <h2 className="sm:last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">
                    {title}
                  </h2>
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
};

export default Navbar;
