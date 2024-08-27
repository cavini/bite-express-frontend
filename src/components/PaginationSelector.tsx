import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const PaginationSelector = ({ page, pages, onPageChange }: Props) => {
  const maxPagesToShow = 10;
  let startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(pages, startPage + maxPagesToShow - 1);

  if (endPage - startPage < maxPagesToShow - 1) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <PaginationContent>
        {page !== 1 && (
          <PaginationItem>
            <PaginationPrevious
              size={"default"}
              href="#"
              onClick={() => onPageChange(page - 1)}
            />
          </PaginationItem>
        )}

        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              size={"default"}
              href="#"
              onClick={() => onPageChange(number)}
              isActive={page === number}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        {page !== pages && (
          <PaginationItem>
            <PaginationNext
              size={"default"}
              href="#"
              onClick={() => onPageChange(page + 1)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSelector;
