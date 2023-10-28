import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Profile = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <p className="text-2xl font-semibold text-gray-800 mb-4">
        Welcome, your email is: {auth.user}
      </p>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
