import { useInfiniteQuery } from "@tanstack/react-query";
import { SourceType, ApiResponse, GetResultType } from "src/types";

const httpClient = async <T = unknown>(
  url: string,
  options?: Headers
): Promise<T> => {
  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  };
  try {
    const res = await fetch(url, {
      ...options,
      headers,
    });
    return res.json();
  } catch (err) {
    throw new Error(`Something went wrong!`);
  }
};

const getData = <T extends SourceType>(source: T, page: number) =>
  httpClient<ApiResponse<GetResultType<T>>>(
    `${import.meta.env.VITE_API_URL}/${source}?page=${page}`
  );

// TODO: can be changed to custom hook
export const useGetDataQuery = <T extends SourceType>(
  source: T,
  initialPage: number
) =>
  useInfiniteQuery({
    queryKey: [source, initialPage],
    queryFn: ({ pageParam = initialPage }) => getData(source, pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.pages ? lastPage.page + 1 : undefined;
    },
  });
