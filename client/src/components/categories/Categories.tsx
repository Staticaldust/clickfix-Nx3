import React from 'react';
import commonStyles from '../styles.module.css';
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: 'gardening',
      href: '#',
      imageSrc:
        'https://s42814.pcdn.co/wp-content/uploads/2023/02/Garden_iStock_1414023501-scaled.jpg.webp',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '⭐⭐⭐⭐',
      color: '',
    },
    {
      id: 2,
      name: 'Plumbing',
      href: '#',
      imageSrc:
        'https://gsmplumbing.com.au/wp-content/uploads/bb-plugin/cache/Depositphotos_442581318_l-2015-1024x645-landscape-3b51d9d7152bb07e68399643e5d14ad6-601cdb3faee63.jpg',
      imageAlt: "Front of men's Casual Shirt in blue.",
      price: '⭐⭐⭐⭐⭐',
      color: '',
    },
    {
      id: 3,
      name: 'Mechanics',
      href: '#',
      imageSrc:
        'https://assets-global.website-files.com/63fe4fbdc589b272c333d60b/6407b09eee45b446565a6e70_sitemgr_car-repair.jpg',
      imageAlt: "Front of men's Denim Jeans in indigo.",
      price: '⭐⭐⭐',
      color: '',
    },
  ];

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

      <div className={`${commonStyles['theme-background']}`}>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Topics
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-200 w-full object-contain object-center lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="/cards">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
