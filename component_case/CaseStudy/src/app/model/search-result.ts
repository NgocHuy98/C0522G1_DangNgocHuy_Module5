export interface SearchResult<T> {
  content: T[];
  // pagination: {
  //   _page: number,
  //   _limit: number,
  //   _totalRows: number
  // };
  totalElements: number;
}
