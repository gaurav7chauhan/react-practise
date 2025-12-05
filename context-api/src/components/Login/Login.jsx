import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = () => {
    
  };

  return (
    <div className="w-auto h-screen flex flex-col gap-10 bg-gray-700 text-white items-center pt-20">
      <h2 className="bg-stone-900 p-2">Login</h2>
      <label htmlFor="name" className="bg-stone-600 p-2">Username</label>
      <input
        type="text"
        id="name"
        placeholder="username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="bg-white text-black p-1"
      />
      <label htmlFor="password" className="bg-stone-600 p-2">password</label>
      <input
        type="password"
        id="password"
        placeholder="password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-white text-black p-1"
      />
      <button onClick={handleSubmit} className="bg-blue-600 p-2 cursor-pointer">Submit</button>
    </div>
  );
};

export default Login;
