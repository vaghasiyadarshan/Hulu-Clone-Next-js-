import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Result({ results }) {
  console.log(results);
  return (
    <FlipMove className="p-5 my-5 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:flex flex-wrap justify-center ">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default Result;
