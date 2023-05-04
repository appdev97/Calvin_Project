export enum SourceType {
  Movie = "movie",
  Character = "character",
  Quote = "quote",
}

export interface Movie {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}

export interface Character {
  _id: string;
  birth: string;
  hair: string;
  gender: string;
  height: string;
  realm: string;
  spouse: string;
  death: string;
  name: string;
  race: string;
  wikiUrl: string;
}

export interface Quote {
  _id: string;
  id: string;
  dialog: string;
  movie: string;
  character: string;
}

export interface ApiResponse<T> {
  docs: T[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}

export type GetResultType<T extends SourceType> = T extends SourceType.Movie
  ? Movie
  : T extends SourceType.Character
  ? Character
  : T extends SourceType.Quote
  ? Quote
  : never;
