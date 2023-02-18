import React from "react";
import Banner from "../components/Banner";
import Languages from "../components/Language/Languages";
import Movies from "../components/Movies/Movies";

async function HomePage() {
  const movieRes = await fetch(
    "http://localhost:4000/movies",
  );

  const categoryRes = await fetch(
    "http://localhost:4000/categories",
  );
  const languageRes = await fetch(
    "http://localhost:4000/languages",
  );

  const movieData = await movieRes.json();
  const languageData = await languageRes.json();
  const categoryData = await categoryRes.json();
  return (
    <div>
      <Banner />
      <Languages languages={languageData} />
      <Languages languages={categoryData} />
      <Movies />
      <Movies />
      <Movies />
    </div>
  );
}

export default HomePage;
