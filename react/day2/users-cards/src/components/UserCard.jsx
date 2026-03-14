const UserCard = ({ user }) => {
  const { profilePic, userName, email, Phone, birthday, role } = user;

  const roleColors = {
    Admin: "bg-red-500 text-white",
    Moderator: "bg-yellow-500 text-white",
    User: "bg-green-500 text-white",
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center gap-5 border border-stone-100">
      <div className="relative">
        <img
          src={profilePic}
          alt={userName}
          className="w-20 h-20 rounded-full object-cover border-2 border-stone-50 shadow-inner"
        />
        <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-bold text-stone-800 leading-tight">
            {userName}
          </h3>

          <span
            className={`text-[10px] px-2.5 py-0.5 rounded-full border font-bold uppercase tracking-wider ${roleColors[role]}`}
          >
            {role}
          </span>
        </div>
        <div className="space-y-0.5">
          <p className="text-sm text-stone-500 flex items-center gap-2">
            {email}
          </p>
          <p className="text-xs text-stone-400 flex items-center gap-2">
            {Phone}
          </p>
          <p className="text-[11px] text-right text-stone-400 mt-2 font-medium italic">
            {birthday}
          </p>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
