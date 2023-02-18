import Movie from "./Movie";

function Movies() {
  return (
    <div className='px-8 mt-8 text-white text-xl font-semibold'>
      <div className='flex justify-between items-center'>
        <h2>Movies</h2>
        <button className='float-right text-xs px-12 text-blue-400 hover:text-white hover:underline'>
          See More
        </button>
      </div>
      <div className='grid grid-cols-4'>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  );
}

export default Movies;
