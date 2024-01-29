import { useNavigate } from 'react-router-dom';

interface CategoriesProps {
  category_id: number | undefined;
  name: string | number | boolean;
  image: string | undefined;
}

const CategoryButton: React.FC<CategoriesProps> = ({
  category_id,
  name,
  image,
}) => {
  const navigate = useNavigate();
  return (
    <div
      key={category_id}
      className="group relative"
      onClick={() => {
        // setSelectedCategory(category.name);
        navigate(`/cards?category=${encodeURIComponent(name)}`);
      }}
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={image}
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
        <p className="text-xl font-medium text-blue-900">{name}</p>
      </div>
    </div>
  );
};
export default CategoryButton;
