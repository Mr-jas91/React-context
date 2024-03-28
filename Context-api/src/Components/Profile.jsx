import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <div>
        <h2>Please Login</h2>
      </div>
    );
  return (
    <div>
      <h2>Welcome {user.username}</h2>
    </div>
  );
}

export default Profile;
