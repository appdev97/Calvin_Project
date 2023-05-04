import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "src/components/Card";
import { RenderMovie, RenderCharacter, RenderQuote } from "src/components";
import Loading from "src/assets/loading.svg";
import { useGetDataQuery } from "src/utils/api";
import { SourceType, GetResultType, Movie, Character, Quote } from "src/types";

interface ItemListProp {
  type: SourceType;
}

const renderItem = <T extends SourceType>(type: T, item: GetResultType<T>) => {
  switch (type) {
    case SourceType.Movie:
      return <RenderMovie item={item as Movie} />;
    case SourceType.Character:
      return <RenderCharacter item={item as Character} />;
    case SourceType.Quote:
      return <RenderQuote item={item as Quote} />;
    default:
      return null;
  }
};

export const ItemList = ({ type }: ItemListProp) => {
  const { ref, inView } = useInView();
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetDataQuery(type, 1);

  const docs = data?.pages.flatMap((page) => page.docs) ?? [];

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <>
      {isLoading ? (
        <img
          src={Loading}
          alt="Loading ..."
          className="m-auto animate-spin w-12"
        />
      ) : isError ? (
        <p>Error: {(error as Error).message}</p>
      ) : (
        <div>
          <p className="mt-4">
            Loaded {docs.length} of {data.pages[0].total} items
          </p>
          <ul className="flex flex-wrap justify-center">
            {docs.map((item) => (
              <li key={item._id} className="w-80 h-40 m-4">
                <Card className="h-full p-4 text-white text-left">
                  {renderItem(type, item)}
                </Card>
              </li>
            ))}
          </ul>
          <div ref={ref}>
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load Newer"
              : "Nothing more to load"}
          </div>
        </div>
      )}
    </>
  );
};

export default ItemList;
