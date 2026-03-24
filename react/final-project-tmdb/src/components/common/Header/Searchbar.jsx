import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";

const Searchbar = ({ setIsMenuOpen }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = query.trim();
    setIsMenuOpen?.(false);
    navigate(`/search?q=${searchTerm}`);
  };
  return (
    <form className="relative flex items-center" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search movies...."
        className="bg-white/10 border border-white/20 rounded-full py-1.5 px-4 pl-10 text-sm focus:outline-none focus:ring-1 focus:ring-main w-40 md:w-64 transition-all"
      />
      <CiSearch className="absolute left-3 w-5 h-5 text-gray-400" />{" "}
    </form>
  );
};
export default Searchbar;
