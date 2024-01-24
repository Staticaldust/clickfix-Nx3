import { Typography } from '@material-tailwind/react';
import { trpc } from '../../utils/trpc';
import { useState, useEffect } from 'react';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { ReviewType } from 'server/src/models/reviewe';
import { Buy } from './Buy';
import Map from '../map/Map';
export const Reviews = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  if (!localStorage.getItem('TOKEN')) {
    return <Navigate replace to={'/login'} />;
  }
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedTpId = queryParams.get('tp_id');
  const selectedTpImage = queryParams.get('tp_image');
  const selectedTpName = queryParams.get('tp_name');
  const selectedTpAsNumber = selectedTpId ? parseInt(selectedTpId, 10) : null;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await trpc.reviews.query();
        const fetchedReviews = response?.reviews || [];
        const filteredReviews = selectedTpAsNumber
          ? fetchedReviews.filter(
              (review) => review.tp_id === selectedTpAsNumber
            )
          : fetchedReviews;

        setReviews(filteredReviews);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedTpAsNumber]);

  if (reviews.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 flex">
          <figure className="relative h-60 w-60 md:h-80 md:w-80">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src={selectedTpImage || undefined}
              alt="nature image"
            />

            <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border py-4 px-6 shadow-lg shadow-white/5 saturate-200 backdrop-blur-sm">
              <Buy name={selectedTpName!} />
            </figcaption>
          </figure>
          <Map />
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.review_id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={review.createdAt} className="text-gray-500">
                  {review.createdAt}
                </time>
                <button className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  title
                </button>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <button>
                    <span className="absolute inset-0" />
                    title
                  </button>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {review.comment}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={review.image}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <button>
                      <span className="absolute inset-0" />
                      שם משתמש
                    </button>
                  </p>
                  <p className="text-gray-600">תיאור משתמש</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
