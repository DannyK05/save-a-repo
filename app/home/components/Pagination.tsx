type PaginationProps = {
  page: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
};
export function Pagination({
  page,
  totalPages,
  handlePageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center space-x-1 text-xl my-2">
      <span>Page</span>
      <button
        type="button"
        onClick={() => {
          if (page > 1) {
            handlePageChange(page - 1);
          }
        }}
        disabled={page === 1}
        className="h-8 w-10 flex items-center justify-center border-2 bg-orange-500 cursor-pointer"
      >
        {"<"}
      </button>
      <input
        className="w-10 h-8 border-2 p-1 text-center bg-white"
        value={page ?? 1}
        onChange={(e) => {
          const value = Number(e.target.value);
          if (!Number.isNaN(value) && value <= totalPages) {
            handlePageChange(Number(e.target.value));
          }
        }}
        title="page"
        name="page"
        type="text"
      />
      <button
        type="button"
        onClick={() => {
          if (page < totalPages) {
            handlePageChange(page + 1);
          }
        }}
        disabled={page >= totalPages}
        className="h-8 w-10 flex items-center justify-center border-2 bg-orange-500 cursor-pointer"
      >
        {">"}
      </button>
      <span>of {totalPages}</span>
    </div>
  );
}
