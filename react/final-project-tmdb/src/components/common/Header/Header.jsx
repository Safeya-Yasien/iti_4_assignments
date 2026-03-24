import { Link, NavLink } from "react-router";
import { useUser } from "@/hooks/useUser";
import { useLogout } from "@/hooks/useAuth";
import Searchbar from "./Searchbar";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: user, isLoading } = useUser();
  const { mutate: logout } = useLogout();

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-blue-500 ${
      isActive ? "text-blue-500" : "text-gray-300"
    }`;

  return (
    <header className="fixed top-0 z-50 w-full h-16 bg-black/60 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 md:px-10 lg:px-14 flex items-center justify-between h-full">
        <Link
          to="/"
          className="text-2xl font-black tracking-tighter text-white"
        >
          TMDB<span className="text-blue-500">FLIX</span>
        </Link>
        {/* left */}
        <nav className="hidden lg:flex items-center gap-8">
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

        {/* right: search, auth, mobile toggle */}
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden lg:block">
            <Searchbar setIsMenuOpen={setIsMenuOpen} />
          </div>

          {!isLoading && (
            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <>
                  <Link
                    to="/account"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {user.user_metadata?.username ?? "Account"}
                  </Link>
                  <button
                    onClick={() => logout()}
                    className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-white hover:bg-white/10"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white"
                >
                  Sign In
                </Link>
              )}
            </div>
          )}

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoMdClose size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        logout={logout}
        user={user}
      />
    </header>
  );
};

export default Header;
