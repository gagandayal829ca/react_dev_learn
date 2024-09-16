import React from "react";
import styles from "../styles/profile.css";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const Profile = () => {
  return (
    <>
      {user.name}
      {/* <img
        className="avatar"
        src={user.imageUrl}
        alt={`photo of: ${user.name}`}
      /> */}
    </>
  );
};

export default Profile;
