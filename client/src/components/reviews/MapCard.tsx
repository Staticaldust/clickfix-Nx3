import React from 'react';
import { useNavigate } from 'react-router-dom';
interface MapCardProps {
  image: string | null;
  name: string | null;
  about: string | null;
  phone: string | null;
  email: string | null;
  experience: string | null;
}

const MapCard: React.FC<MapCardProps> = ({
  image,
  name,
  about,
  phone,
  email,
  experience,
}) => {
  console.log(about);
  const navigate = useNavigate();
  return (
    <div className="flex relative overflow-hidden space-x-4">
      {image && (
        <img
          className="object-cover w-full rounded-t-lg h-120 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg"
          src={image}
          alt=""
        />
      )}
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {name && (
          <>
            <a href="#">
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name}
              </h3>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {phone}
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {email}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {experience}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {about}
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>

            <button
              onClick={() => navigate('/status')}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              הזמן את {name}
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MapCard;
