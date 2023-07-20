import Navbar from "@/components/Navbar";
import Results from "@/components/Results";
import requests from "../utils/requests";

export default function Index({ results }) {
  return (
    <div>
      <Navbar />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const { results } = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((result) => result.json());

  return {
    props: {
      results: results,
    },
  };
}
