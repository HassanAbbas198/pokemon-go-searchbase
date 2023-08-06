export type PaginationResponse<T> = {
  data: T[];
  currentPage: number;
  limit: number;
  totalRecords: number;
  totalPages: number;
};
