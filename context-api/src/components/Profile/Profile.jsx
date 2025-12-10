import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) {
    return (
      <div className="flex flex-col gap-10 bg-gray-700 text-white items-center pt-20 text-2xl">
        Please login
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 bg-gray-700 text-white items-center pt-20">
      <h2>Profile</h2>
      <p>Hello my name is {user.username}</p>
    </div>
  );
};

export default Profile;
