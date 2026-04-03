import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <Link href="/">
        <h1 className="text-2xl font-bold">My Blog</h1>
      </Link>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/" className="hover:text-red-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-red-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog/1" className="hover:text-red-500">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/docs" className="hover:text-red-500">
              docs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
