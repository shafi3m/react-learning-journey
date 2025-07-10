import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="min-h-[400px] flex items-center justify-center bg-gray-50 px-4">
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md animate-fade-in">
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          className="w-40 h-40 rounded-full border-4 border-gray-300 shadow"
        />
        <h1 className="text-2xl font-bold text-gray-800 mt-4">
          GitHub Followers: {data.followers}
        </h1>
        <h2 className="text-xl text-gray-700 mt-2">@{data.login}</h2>
        <p className="text-gray-500 text-center">{data.bio}</p>
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
        >
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/shafi3m");
  return response.json();
};
