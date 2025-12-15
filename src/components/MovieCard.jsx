const MovieCard = ({
  movie: { poster_path, title, vote_average, release_date, overview },
}) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="group relative w-60 overflow-hidden rounded-2xl bg-white shadow-lg transition hover:scale-105">
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="h-80 w-full object-cover" />
      ) : (
        <div className="flex h-80 w-full items-center justify-center bg-gray-200 text-gray-500">
          No image available
        </div>
      )}

      <div className="p-4">
        <h3 className="truncate text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
          <span>⭐ {vote_average?.toFixed(1)}</span>
          <span>{release_date?.split("-")[0]}</span>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex items-end bg-black/70 p-4 opacity-0 transition group-hover:opacity-100">
        <p className="line-clamp-5 text-sm text-gray-200">
          {overview || "No description available."}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
