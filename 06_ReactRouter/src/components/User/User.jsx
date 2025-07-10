import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userid } = useParams();
  return (
    <h1
      className="text-3xl p-4 text-gray-600 flex
    items-center justify-center text-center m-8"
    >
      User:{userid}
    </h1>
  );
}

export default User;
