import { Link, NavLink } from "react-router";
import Searchbar from "./Searchbar";

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, logout, user }) => {
  const mobileNavLinkClass = ({ isActive }) =>
    `text-xl font-semibold py-4 border-b border-white/10 w-full text-center ${
      isActive ? "text-blue-500" : "text-white"
    }`;

  return (
    <div
      className={`fixed w-full h-auto top-16 bg-black z-40 lg:hidden flex flex-col items-center p-8 transition-all duration-300 ${
        isMenuOpen
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-2"
      }`}
    >
      <div className="w-full mb-8">
        <Searchbar setIsMenuOpen={setIsMenuOpen} />
      </div>

      <NavLink
        to="/"
        onClick={() => setIsMenuOpen(false)}
        className={mobileNavLinkClass}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        onClick={() => setIsMenuOpen(false)}
        className={mobileNavLinkClass}
      >
        Movies
      </NavLink>
      <NavLink
        to="/tv-shows"
        onClick={() => setIsMenuOpen(false)}
        className={mobileNavLinkClass}
      >
        TV Shows
      </NavLink>
      <NavLink
        to="/favorites"
        onClick={() => setIsMenuOpen(false)}
        className={mobileNavLinkClass}
      >
        My List
      </NavLink>

      <div className="mt-auto w-full flex flex-col gap-4">
        {user ? (
          <button
            onClick={() => {
              logout();
              setIsMenuOpen(false);
            }}
            className="w-full py-4 bg-red-600/20 text-red-500 rounded-xl font-bold"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/login"
            onClick={() => setIsMenuOpen(false)}
            className="w-full py-4 bg-blue-600 text-white text-center rounded-xl font-bold"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
