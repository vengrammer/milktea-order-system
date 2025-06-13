import darkchocolate from "../assets/Dark chocolate.png";
import matcha from "../assets/matcha.png";
import wintermelon from "../assets/wintermelon.png";

function ShowMilktea() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">Milk Tea Available</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center px-4">
        {/* Dark Chocolate */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-sm p-4 hover:shadow-xl transition-shadow">
          <img
            src={darkchocolate}
            alt="Dark Chocolate"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800">Dark Chocolate</h2>
            <p className="text-gray-600 mt-2">Price:</p>
            <ul className="text-gray-700 ml-4 list-disc">
              <li>Large - 100 pesos</li>
              <li>Medium - 70 pesos</li>
              <li>Small - 40 pesos</li>
            </ul>
            <p className="m-2">Available: <span className="text-red-500 font-semibold">Not Available</span></p>
            <div className="mt-4 space-y-2">
              <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                Add to Cart
              </button>
              <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                Order
              </button>
            </div>
          </div>
        </div>

        {/* Matcha */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-sm p-4 hover:shadow-xl transition-shadow">
          <img
            src={matcha}
            alt="Matcha"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800">Matcha</h2>
            <p className="text-gray-600 mt-2">Price:</p>
            <ul className="text-gray-700 ml-4 list-disc">
              <li>Large - 100 pesos</li>
              <li>Medium - 70 pesos</li>
              <li>Small - 40 pesos</li>
            </ul>
            <p className="m-2">Available: <span className="text-green-600 font-semibold">Yes</span></p>
            <div className="mt-4 space-y-2">
              <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                Add to Cart
              </button>
              <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                Order
              </button>
            </div>
          </div>
        </div>

        {/* Wintermelon */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-sm p-4 hover:shadow-xl transition-shadow">
          <img
            src={wintermelon}
            alt="Wintermelon"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800">Wintermelon</h2>
            <p className="text-gray-600 mt-2">Price:</p>
            <ul className="text-gray-700 ml-4 list-disc">
              <li>Large - 100 pesos</li>
              <li>Medium - 70 pesos</li>
              <li>Small - 40 pesos</li>
            </ul>
            <p className="m-2">Available: <span className="text-green-600 font-semibold">Yes</span></p>
            <div className="mt-4 space-y-2">
              <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                Add to Cart
              </button>
              <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                Order
              </button>
            </div>
          </div>
        </div>

        {/* Duplicate Wintermelon (optional: you can remove or update this) */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-sm p-4 hover:shadow-xl transition-shadow">
          <img
            src={wintermelon}
            alt="Wintermelon"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800">Wintermelon</h2>
            <p className="text-gray-600 mt-2">Price:</p>
            <ul className="text-gray-700 ml-4 list-disc">
              <li>Large - 100 pesos</li>
              <li>Medium - 70 pesos</li>
              <li>Small - 40 pesos</li>
            </ul>
            <p className="m-2">Available: <span className="text-green-600 font-semibold">Yes</span></p>
            <div className="mt-4 space-y-2">
              <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                Add to Cart
              </button>
              <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowMilktea;
