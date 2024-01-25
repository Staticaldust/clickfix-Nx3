import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { trpc } from '../../utils/trpc';
import { TpType } from 'server/src/models/tp';
import TpDetails from '../tpDetails/TpDetails';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  const navigate = useNavigate();
  const [tps, setTps] = useState<TpType[]>([]);
  if (!localStorage.getItem('TOKEN')) {
    return <Navigate replace to={'/login'} />;
  }
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get('category');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await trpc.tps.query();
        const fetchedTps = response?.tps || [];
        const filteredTps = selectedCategory
          ? fetchedTps.filter((tp) => tp.profession === selectedCategory)
          : fetchedTps;

        setTps(filteredTps);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  if (tps.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="container mx-auto my-8 px-4">
        <div className="flex flex-wrap -mx-4">
          {tps.map((tp) => (
            <div
              key={tp.tp_id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8"
            >
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-t-lg object-cover w-full h-40"
                  src={tp.image}
                  alt=""
                />

                <div className="p-5">
                  <button>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {tp.name}
                    </h5>
                  </button>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {tp.profession}
                  </p>

                  <button
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() =>
                      navigate(
                        `/reviews?tp_id=${encodeURIComponent(
                          tp.tp_id
                        )}&tp_image=${tp.image}&tp_name=${tp.name}`
                      )
                    }
                  >
                    פרטים
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
