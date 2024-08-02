import React from "react";
import { useLogin } from "../hooks/useLogin";
import Button from "../components/Elements/Button";

function Profile() {
  const username = useLogin();
  const handleLogout = () => {
    localStorage.removeItem("token");

    window.location.href = "/login";
  };
  return (
    <>
      <div className="flex justify-end bg-blue-600 h-16 items-center px-10 text-white gap-5">
        <div>{username}</div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </>
  );
}

export default Profile;
