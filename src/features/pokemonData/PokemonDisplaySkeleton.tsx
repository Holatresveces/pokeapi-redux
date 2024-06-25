import logo from "../../assets/logo.png";

const PokemonDisplaySkeleton = () => {
  return (
    <div className="h-full flex flex-col items-center">
      <img className="py-20" src={logo} alt="PokéAPI Logo" />
      <div className="w-60 h-60 my-20 rounded-full bg-neutral-100 animate-pulse"></div>
    </div>
  );
};

export default PokemonDisplaySkeleton;
