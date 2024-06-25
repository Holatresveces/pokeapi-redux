import logo from "../../assets/logo.png";

const PokemonDisplaySkeleton = () => {
  return (
    <div className="h-full flex md:flex-col justify-center items-center">
      <img className="md:py-20" src={logo} alt="PokéAPI Logo" />
      <div className="w-40 h-40 md:w-60 md:h-60 md:my-20 rounded-full bg-neutral-100 animate-pulse"></div>
    </div>
  );
};

export default PokemonDisplaySkeleton;
