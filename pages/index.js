import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Result from "../components/Result";
import requests from "../Utils/requests";
export default function Home({ results }) {
  console.log({ results });
  return (
    <>
      <Head>
        {/* <tital>HULU 2.o</tital> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Result results={results} />
    </>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
