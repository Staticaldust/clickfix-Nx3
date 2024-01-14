import { trpc } from '../../utils/trpc';

export const Cards = () => {
  const tpsQuery = trpc.tps.useQuery();
  const tps = tpsQuery.data?.tps || [];
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
                <a href="#">
                  <img className="rounded-t-lg" src={tp.image} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {tp.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {tp.profession}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Show TP
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
                  </a>
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
