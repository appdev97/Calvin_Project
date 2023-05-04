import { Movie } from "src/types";

export const RenderMovie = ({ item }: { item: Movie }) => {
  return (
    <>
      <p>Title: {item.name}</p>
      <p>Length: {item.runtimeInMinutes} mins</p>
      <p>Revenue: {item.boxOfficeRevenueInMillions} millions</p>
    </>
  );
};

export default RenderMovie;
