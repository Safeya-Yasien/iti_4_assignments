import { Link, NavLink } from "react-router";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-blue-500 ${
      isActive ? "text-main" : "text-gray-300"
    }`;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 h-16 bg-transparent backdrop-blur-md border-b border-white/5 overflow-hidden`}
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between h-full w-full box-border">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-black tracking-tighter text-white"
        >
          TMDB<span className="text-main">FLIX</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={navLinkClass}>
            Movies
          </NavLink>
          <NavLink to="/tv-shows" className={navLinkClass}>
            TV Shows
          </NavLink>
          <NavLink to="/favorites" className={navLinkClass}>
            My List
          </NavLink>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          {/* Search Icon (Simulated) */}
          <button className="cursor-pointer text-gray-300 hover:text-white transition-colors">
            <CiSearch className="w-5 h-5" />
          </button>

          {/* User Profile / Auth */}
          <Link
            to="/login"
            className="rounded-full bg-main px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
