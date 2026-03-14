import UserCard from "./UserCard";

const users = [
  {
    id: 1,
    profilePic: "https://i.pravatar.cc/150?u=1",
    userName: "Ahmed Zaki",
    email: "ahmed.z@tech.com",
    Phone: "+20 100 123 4567",
    birthday: "15/05/1992",
    role: "Admin",
  },
  {
    id: 2,
    profilePic: "https://i.pravatar.cc/150?u=2",
    userName: "Sara El-Sayed",
    email: "sara.s@design.io",
    Phone: "+20 111 987 6543",
    birthday: "22/10/1995",
    role: "Moderator",
  },
  {
    id: 3,
    profilePic: "https://i.pravatar.cc/150?u=3",
    userName: "Omar Khaled",
    email: "omar.k@dev.net",
    Phone: "+20 122 555 0123",
    birthday: "03/01/1988",
    role: "User",
  },
  {
    id: 4,
    profilePic: "https://i.pravatar.cc/150?u=4",
    userName: "Laila Hassan",
    email: "laila.h@support.com",
    Phone: "+20 155 444 7890",
    birthday: "19/07/1998",
    role: "User",
  },
  {
    id: 5,
    profilePic: "https://i.pravatar.cc/150?u=5",
    userName: "Youssef Ali",
    email: "y.ali@company.org",
    Phone: "+20 101 222 3333",
    birthday: "12/12/1990",
    role: "Moderator",
  },
];

const UsersList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {/* {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))} */}
      <UserCard user={users[0]} />
      <UserCard user={users[1]} />
      <UserCard user={users[2]} />
      <UserCard user={users[3]} />
    </div>
  );
};
export default UsersList;
