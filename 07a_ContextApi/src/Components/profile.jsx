import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
function Profile() {
  const { user } = useContext(UserContext);

  if (!user || !user.Fname || !user.Lname) {
    return (
      <div className="text-center text-lg text-gray-600">
        Enter Your Full Name
      </div>
    );
  }

  return (
    <div className="text-center text-2xl font-semibold text-green-700">
      Welcome {user.Fname} {user.Lname}
    </div>
  );
}

export default Profile;
