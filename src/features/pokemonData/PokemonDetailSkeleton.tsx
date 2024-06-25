const PokemonDetailSkeleton = () => {
  return (
    <div>
      <button disabled className="border rounded-md p-3 text-gray-300">
        Go back
      </button>
      <div className="mt-10 flex flex-col space-y-8">
        <div className="flex flex-col items-center">
          <div className="mb-4 w-20 h-6 bg-neutral-100 animate-pulse rounded-lg"></div>
          <div className="flex space-x-8 justify-center">
            {Array(2)
              .fill(null)
              .map((item, i) => {
                return (
                  <div
                    className="w-20 h-6 bg-neutral-100 animate-pulse rounded-lg"
                    key={i}
                  ></div>
                );
              })}
          </div>
        </div>
        <div className="flex space-x-16 justify-center">
          {Array(4)
            .fill(null)
            .map((item, i) => {
              return (
                <div className="w-20 h-6 bg-neutral-100 animate-pulse rounded-lg"></div>
              );
            })}
        </div>
        <div className="flex">
          <div className="w-1/2">
            <div className="mb-2 w-20 h-6 bg-neutral-100 animate-pulse rounded-lg"></div>
            <div className="flex flex-col space-y-2">
              {Array(6)
                .fill(null)
                .map((item, i) => {
                  return (
                    <div className="w-40 h-6 bg-neutral-100 animate-pulse rounded-lg"></div>
                  );
                })}
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <div className="mb-2 w-20 h-6 bg-neutral-100 animate-pulse rounded-lg"></div>
            <div className="flex flex-col space-y-2">
              {Array(3)
                .fill(null)
                .map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="w-24 h-6 bg-neutral-100 rounded-lg  animate-pulse"
                    ></div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailSkeleton;
