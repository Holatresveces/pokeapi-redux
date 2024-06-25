import { ITEMS_PER_PAGE } from "./pokemonListSlice";

function PokemonListSkeleton() {
  return (
    <div>
      <div className="flex flex-col space-y-1">
        {Array(ITEMS_PER_PAGE)
          .fill(null)
          .map((item, i) => {
            return (
              <div
                key={i}
                className="w-full h-9 rounded-lg bg-neutral-100 animate-pulse"
              ></div>
            );
          })}
      </div>
      <div className="flex justify-center space-x-10 py-5">
        <button disabled className="border rounded-md p-3 text-gray-300">
          Previous
        </button>
        <button disabled className="border rounded-md p-3 text-gray-300">
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonListSkeleton;
