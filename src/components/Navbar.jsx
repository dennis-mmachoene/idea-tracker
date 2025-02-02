import { useUser } from "../lib/context/user";

const Navbar = () => {
  const user = useUser();

  return (
    <nav className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <a href="/" className="text-2xl font-bold hover:text-gray-200 transition">
        Ideas Tracker
      </a>
      <div className="flex items-center gap-4">
        {user?.current ? (
          <>
            <span className="text-sm font-medium">{user.current?.email}</span>
            <button
              type="button"
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition text-white font-semibold"
              onClick={async () => {
                try {
                  await user.logout();
                  window.location.reload(); // Ensure UI reflects logout state
                } catch (err) {
                  console.error("Logout failed:", err);
                }
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <a
            href="/login"
            className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition text-white font-semibold"
          >
            Login
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
