import { useState } from "react";
import { useUser } from "../lib/context/user";

const Login = () => {
  const user = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Login or Register
        </h1>
        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white text-gray-800"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white text-gray-800"
            />
          </div>
          <div className="flex justify-between gap-4">
            <button
              type="button"
              className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
              onClick={() => user.login(email, password)}
            >
              Login
            </button>
            <button
              type="button"
              className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition"
              onClick={() => user.register(email, password)}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
