import React from "react";
import MovieForm from "../../components/MovieForm";

async function AddMovie() {
  const categoryRes = await fetch(
    "http://localhost:4000/categories",
  );
  const languageRes = await fetch(
    "http://localhost:4000/languages",
  );

  const languageData = await languageRes.json();
  const categoryData = await categoryRes.json();
  return (
    <div className='flex flex-col justify-center items-center'>
      <MovieForm
        languages={languageData}
        categories={categoryData}
      />
    </div>
  );
}

export default AddMovie;
