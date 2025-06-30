import { useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import adminAxiosClient from "./adminAxiosClient";
import {useAdminContext} from "../Context/AdminContextProvider";


function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setAdmin,getToken} = useAdminContext();
  const [errors, setErrors] = useState('')

  const navigate = useNavigate();
  
 
  function Login(e){
    e.preventDefault();

    const credentials = {
      username: username,
      password: password,
    }
    adminAxiosClient.post('admin/login',credentials )
        .then(({data}) => {
        setAdmin(data.admin)
        getToken(data.token)
        console.log({data})
        return(
          navigate('/admin')
      )
      .catch(err => {
            const response = err.response;
            if(response && response.status === 401){
                setErrors(response.data.error)
            }
        }) 
    })
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">Admin Login</h1>

          {errors && 
            <div className="bg-red-500 rounded p-2">
              <p className="text-white p-2">{errors}</p>
            </div>
          }

          <form onSubmit={Login}>
            <div className="mb-4 text-left">
              <label htmlFor="username" className="block text-gray-600 mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
