import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const Github = () => {
    const data = useLoaderData();
//   const [data, setData] = useState(0);

//   useEffect(() => {
//     fetch("https://api.github.com/users/hiteshchoudhary")
//       .then((res) => res.json())
//       .then((result) => {
//         setData(result)
//     });
//   }, []);
  
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <br />
      Github userName: {data.login}
      <img src={data.avatar_url} alt="profile image" />
    </div>
  );
};

// using loader in react-router-dom
export const githubInfoLoader = async() => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary");
    return response.json();
}