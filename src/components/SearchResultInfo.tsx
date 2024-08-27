import { Link } from "react-router-dom";

type Props = {
  total: number;
};

export const SearchResultInfo = ({ total }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <span>
        {total} restaurant{total > 1 ? "s" : ""} found matching your search
        <Link
          className="text-orange-500 text-sm font-semibold hover:underline cursor-pointer ml-1"
          to="/"
        >
          Change location
        </Link>
      </span>
    </div>
  );
};
