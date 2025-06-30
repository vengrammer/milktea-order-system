import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import userAxiosClient from "./userAxiosClient";
import {useUserContext} from "../Context/UserContextProvider";

function Login() {

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors,setErrors] =  useState("");

  const {setUser,getToken} = useUserContext();
  const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault();
    setLoading(true);

    const credentials = {
      email: email,
      password: password,
    }
    userAxiosClient.post('user/login', credentials)
      .then(({data}) => {
        setUser(data.user)
        getToken(data.token)
        console.log(data)
        setLoading(false);
        return(
          navigate('/')
        )
      })
      .catch(err => {
        const response = err.response;
        if(response && response.status === 422){
          setErrors(response.data.error)
        }
      })
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

          <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">Login</h1>

          {errors && 
            <div className="bg-red-500 rounded p-2">
              <p className="text-white p-2">{errors}</p>
            </div>
          }
          <form onSubmit={handleLogin}>
            <div className="mb-4 text-left">
              <label htmlFor="username" className="block text-gray-600 mb-2">
                Username
              </label>
              <input
                disabled={loading}
                type="text"
                name="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4 text-left">
              <label htmlFor="password" className="block text-gray-600 mb-2">
                Password
              </label>
              <input
                disabled={loading}
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
            >
              {loading? <span>Logging in...</span> : <span>Log in</span>}
            </button>

            {!loading &&  <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
