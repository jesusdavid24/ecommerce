import { Link } from 'react-router-dom';
import image from '../../assets/failed-payment.webp';

const NotFound = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <h5 className="text-5xl font-semibold text-gray-700 mb-4">404 NOT FOUND</h5>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="mb-6">
          <figure className="w-full">
            <img src={image} alt="Not Found" className="w-80 h-64 object-cover" />
          </figure>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          I have bad news for you
        </h1>
        <p className="text-gray-600 text-center mb-6">
          The page you are looking for might be removed or is temporarily unavailable
        </p>
        <Link to="/">
          <button
            type="button"
            className="px-6 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition duration-300"
          >
            BACK TO HOMEPAGE
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound;