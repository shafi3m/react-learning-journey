import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = () => {
    setUser({ Fname, Lname });
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        Login
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="First Name"
          value={Fname}
          onChange={(e) => setFname(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Last Name"
          value={Lname}
          onChange={(e) => setLname(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
