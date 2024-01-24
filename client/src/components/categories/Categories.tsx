import { trpc } from '../../utils/trpc';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { CategoryType } from 'server/src/models/category';

const Categories = () => {
  const navigate = useNavigate();
  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  if (!localStorage.getItem('TOKEN')) {
    return <Navigate replace to={'/login'} />;
  }
  const [categories, setCategories] = useState<CategoryType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await trpc.categories.query();
        const fetchedCategories = response?.categories || [];
        setCategories(fetchedCategories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  if (categories.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Topics
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {categories.map((category) => (
          <div
            key={category.category_id}
            className="group relative"
            onClick={() => {
              // setSelectedCategory(category.name);
              navigate(`/cards?category=${encodeURIComponent(category.name)}`);
            }}
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={category.image}
                alt="Category Image"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <div>
                    <span aria-hidden="true" className="absolute inset-0" />
                  </div>
                </h3>
                <p className="mt-1 text-sm text-gray-500"></p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {category.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
