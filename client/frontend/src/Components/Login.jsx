import { Link} from "react-router-dom";


function Login() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">Login</h1>
          <form>
            <div className="mb-4 text-left">
              <label htmlFor="username" className="block text-gray-600 mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4 text-left">
              <label htmlFor="password" className="block text-gray-600 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
            >
              Login
            </button>

            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-green-600 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
