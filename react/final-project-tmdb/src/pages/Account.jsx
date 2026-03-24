import { useUser } from "@/hooks/useUser";
import { useLogout } from "@/hooks/useAuth";
import { useNavigate } from "react-router";

const Account = () => {
  const { data: user } = useUser();
  const { mutate: logout } = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => navigate("/login"),
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-lg mx-auto">
        {/* Avatar + name */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <div className="w-20 h-20 rounded-full bg-main flex items-center justify-center text-white text-3xl font-bold">
            {user?.user_metadata?.username?.[0]?.toUpperCase() ??
              user?.email?.[0]?.toUpperCase()}
          </div>
          <h1 className="text-2xl font-bold text-white">
            {user?.user_metadata?.username ?? "User"}
          </h1>
          <p className="text-sm text-gray-400">{user?.email}</p>
        </div>

        {/* Info card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl divide-y divide-white/10 mb-6">
          <div className="flex justify-between items-center px-6 py-4">
            <span className="text-sm text-gray-400">Username</span>
            <span className="text-sm text-white font-medium">
              {user?.user_metadata?.username ?? "—"}
            </span>
          </div>
          <div className="flex justify-between items-center px-6 py-4">
            <span className="text-sm text-gray-400">Email</span>
            <span className="text-sm text-white font-medium">
              {user?.email}
            </span>
          </div>
          <div className="flex justify-between items-center px-6 py-4">
            <span className="text-sm text-gray-400">Member since</span>
            <span className="text-sm text-white font-medium">
              {user?.created_at
                ? new Date(user.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "—"}
            </span>
          </div>
        </div>

        {/* Sign out button */}
        <button
          onClick={handleLogout}
          className="cursor-pointer w-full py-3 rounded-xl border border-red-500/40 text-red-400 text-sm font-semibold hover:bg-red-500/10 transition-all"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Account;
