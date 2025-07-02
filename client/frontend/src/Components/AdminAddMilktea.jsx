import { useRef, useState } from "react";
import adminAxiosClient from "./adminAxiosClient";
import UserAddToCart from "./UserAddToCart";
function AdminAddMIlktea(){

    const image = useRef()
    const [flavor, setFlavor] = useState('')
    const [lprice, setLprice] = useState()
    const [mprice, setMprice] = useState()
    const [sprice, setSprice] = useState()
    const [available, setAvailable] = useState(true)
    const [disabled, setDisabled] = useState(false);
    const [errors, setErrors] = useState(null);


    function addmilktea(e){
        e.preventDefault();
        setDisabled(true);
        const formData = new FormData();
        formData.append('flavor', flavor);
        formData.append('image', image.current.files[0]);
        formData.append('price_large', lprice);
        formData.append('price_medium', mprice);
        formData.append('price_small', sprice);
        formData.append('available', available? 1: 0);

        adminAxiosClient.post('admin/milkteas', formData)
            .then(({data}) => {
                console.log(data)
                setDisabled(false);
            })
            .catch(err => {
                const response = err.response;
                console.log(response)
                if(response && response.status === 422){

                    setErrors(response.data.errors)
                    setDisabled(false);
                }
            })
    }

    
    
    return(
         <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">  
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                    <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">Add Milktea</h1>

                    {/* show error */}
                     {errors && 
                        <div className="bg-red-500 rounded p-2">
                            {Object.keys(errors).map(key => (
                                <li className="text-white pl-5"  key={key}>{errors[key][0]}</li>
                            ))}
                        </div>
                    }

                    <form onSubmit={addmilktea} encType="multipart/form-data"> 

                        <div className="mb-4 text-left">
                            <label htmlFor="image" className="block text-gray-600 mb-2">
                                Image
                            </label>
                            <input
                                type="file"
                                id="image"
                                ref={image}
                                disabled={disabled}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="mb-4 text-left">
                            <label htmlFor="flavor" className="block text-gray-600 mb-2">
                                Flavor
                            </label>
                            <input
                                type="text"
                                id="flavor"
                                value={flavor}
                                onChange={(e) => setFlavor(e.target.value)}
                                disabled={disabled}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="mb-4 text-left">
                        <label htmlFor="lprice" className="block text-gray-600 mb-2">
                            Large price
                        </label>
                        <input
                            type="number"
                            id="lprice"
                            value={lprice}
                            onChange={(e) => setLprice(e.target.value)}
                            disabled={disabled}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        </div>

                        <div className="mb-4 text-left">
                        <label htmlFor="mprice" className="block text-gray-600 mb-2">
                            Medium price
                        </label>
                        <input
                            type="number"
                            id="mprice"
                            value={mprice}
                            onChange={(e) => setMprice(e.target.value)}
                            disabled={disabled}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        </div>

                        <div className="mb-4 text-left">
                        <label htmlFor="sprice" className="block text-gray-600 mb-2">
                            Small price
                        </label>
                        <input
                            type="number"
                            id="sprice"
                            value={sprice}
                            onChange={(e) => setSprice(e.target.value)}
                            disabled={disabled}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        </div>

                        <div className="mb-4 text-left">
                            <label htmlFor="available" className="block text-gray-600 mb-2">
                                Available
                            </label>
                            <select 
                                name="available" 
                                id="available" 
                                value={available ? "true" : "false"} 
                                onChange={(e) => setAvailable(e.target.value === 'true')} 
                                disabled={disabled} 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            disabled={disabled}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
                            >
                                {disabled? <span>Loading.....</span> : <span>Add</span>  }
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default AdminAddMIlktea;