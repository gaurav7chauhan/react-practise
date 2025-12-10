import React from "react";
import Login from "./components/Login/Login";
import { UserContextProvider } from "./context/UserContextProvider";
import Profile from "./components/Profile/Profile";

export const App = () => {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};
