import Link from "next/link";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex ">
      <aside>Sidebar</aside>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/info">Info</Link>
      </div>

      <div>{children}</div>
    </div>
  );
};
export default ProfileLayout;
