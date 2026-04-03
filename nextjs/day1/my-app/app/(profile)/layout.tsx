import Link from "next/link";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex  ">
      <div className="w-50">
        <aside className="mb-4 text-blue-600">Sidebar</aside>
        <div className="flex flex-col  gap-4 mb-8">
          <Link href="/" className="hover:text-red-500">
            Home
          </Link>
          <Link href="/about" className="hover:text-red-500">
            About
          </Link>
          <Link href="/info" className="hover:text-red-500">
            Info
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default ProfileLayout;
