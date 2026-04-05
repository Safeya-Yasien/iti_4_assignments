import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 flex items-center px-4 md:px-8 lg:px-12">
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">My App</h1>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-4">
            <li>
              <Link href={"/products"} className="hover:text-blue-600">Products</Link>
            </li>
            <li>
              <Link href={"/recipes"} className="hover:text-blue-600">Recipes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
