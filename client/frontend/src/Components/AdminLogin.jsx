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

  const [isloading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  
 
  function Login(e){
    e.preventDefault();
    setIsLoading(true)
    const credentials = {
      username: username,
      password: password,
    }
    adminAxiosClient.post('admin/login',credentials )
        .then(({data}) => {
        setAdmin(data.admin)
        getToken(data.token)
        setIsLoading(true)
        navigate('/admin')
      })
      .catch(err => {
        const response = err.response;
        if(response) {
          if(response.status === 422){
            setErrors(response.data.errors)
            setIsLoading(false)
          }else if(response.status === 401){
            setErrors({ message: [response.data.message] });
           setIsLoading(false)
          }
        }
      });
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">Admin Login</h1>
                  {/*SHOW ERRORS*/}
                  {errors && (
                      <div className="bg-red-500 rounded p-2">
                        {Object.keys(errors).map((key) => (
                          <li className="text-white pl-5" key={key}>{errors[key][0]}</li>
                        ))}
                      </div>
                    )}



          <form onSubmit={Login}>
            <div className="mb-4 text-left">
              <label htmlFor="username" className="block text-gray-600 mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                disabled={isloading}
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
                disabled={isloading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              disabled={isloading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
            >
              {isloading? <span>Logging in...</span> : <span>Login</span>}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
