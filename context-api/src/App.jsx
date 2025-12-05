import Login from "./components/Login/Login";
import { UserContextProvider } from "./context/UserContextProvider";

export const App = () => {
  return (
    <UserContextProvider>
      <Login />
    </UserContextProvider>
  );
};
