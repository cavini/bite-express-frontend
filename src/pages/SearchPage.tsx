import { useParams } from "react-router-dom";
import { useSearchRestaurants } from "../api/RestaurantApi";
import { SearchResultInfo } from "../components/SearchResultInfo";
import SearchResultsCard from "../components/SearchResultsCard";
import { useState } from "react";
import SearchBar, { SearchForm } from "../components/SearchBar";

export type SearchState = {
  searchQuery: string;
};

const SearchPage = () => {
  const { city } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
  });

  const { results, isLoading } = useSearchRestaurants(searchState, city);

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((previousState) => ({
      ...previousState,
      searchQuery: searchFormData.searchQuery,
    }));
  };

  const resetSearch = () => {
    setSearchState((previousState) => ({
      ...previousState,
      searchQuery: "",
    }));
  };

  if (isLoading) {
    <span>Loading...</span>;
  }

  if (!results?.data || !city) {
    return <span>No results found</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list">insert cuisines here </div>
      <div id="main-content" className="flex flex-col gap-5">
        <SearchBar
          searchQuery={searchState.searchQuery}
          placeholder="Search by Cuisine or Restaurant Name"
          onSubmit={setSearchQuery}
          onReset={resetSearch}
        />
        <SearchResultInfo total={results.pagination.total} city={city} />
        {results.data.map((restaurant) => (
          <SearchResultsCard restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
