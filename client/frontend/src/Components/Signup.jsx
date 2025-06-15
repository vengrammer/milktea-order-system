import { Link } from "react-router-dom";

function signup() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">Sign up</h1>
          <form>
            <div className="mb-4 text-left">
              <label htmlFor="fullname" className="block text-gray-600 mb-2">
                Fullname
              </label>
              <input
                type="text"
                name="fullname"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4 text-left">
              <label htmlFor="address" className="block text-gray-600 mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4 text-left">
              <label htmlFor="number" className="block text-gray-600 mb-2">
                Phone number
              </label>
              <input
                type="text"
                name="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

             <div className="mb-4 text-left">
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
            >
                Sign up
            </button>

            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an acount?{" "}
              <Link to="/login" className="text-green-600 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default signup;
