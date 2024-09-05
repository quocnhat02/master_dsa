export interface PaginationOptions {
  page?: number;
  limit?: number;
  sort?: string;
  fields?: string;
}

export interface QueryResult<T> {
  results: T[];
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}
