import { PaginationResponse } from '../types';

export function formatPaginationResponse<T>(
  data: T[],
  totalRecords: number,
  page: number,
  limit: number,
): PaginationResponse<T> {
  const totalPages = Math.ceil(totalRecords / limit);

  return {
    data,
    currentPage: page,
    limit,
    totalRecords,
    totalPages,
  };
}
