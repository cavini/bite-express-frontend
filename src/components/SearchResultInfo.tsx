import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../lib/utils";

type Props = {
  total: number;
  city: string;
};

export const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <span>
        {total} Restaurants found in {capitalizeFirstLetter(city)}
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
