import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/jagdeepSingh13")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  const data = useLoaderData();

  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center">
      Github Followers: {data.followers}
      <h3 className="mt-4 ">{data.name}</h3>
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/jagdeepSingh13");
  return response.json();
};
