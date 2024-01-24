import Map from '../map/Map';
export const Status = () => {
  return (
    <>
      <section className="flex items-center py-16 bg-gray-100 md:py-20 font-poppins dark:bg-gray-800">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto bg-white border rounded-md dark:border-gray-900 dark:bg-gray-900 md:py-10 md:px-10">
          <div>
            <h1 className="px-4 mb-8 text-2xl font-semibold tracking-wide text-gray-700 dark:text-gray-300">
              Thank you. Your order has been received.
            </h1>
            <div className="flex border-b border-gray-200 dark:border-gray-700 items-stretch justify-start w-full h-full px-4 mb-8 md:flex-row xl:flex-col md:space-x-6 lg:space-x-8 xl:space-x-0">
              {/* ... other code ... */}
            </div>
            <div className="px-4 mb-10">{/* ... other code ... */}</div>
            <div className="flex flex-wrap items-center justify-start gap-4 px-4 mt-6">
              <button className="w-full px-4 py-2 text-fuchsia-500 border border-fuchsia-500 rounded-md md:w-auto hover:text-gray-100 hover:bg-fuchsia-600 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-300">
                Go back shopping
              </button>
              <button className="w-full px-4 py-2 bg-fuchsia-500 rounded-md text-gray-50 md:w-auto dark:text-gray-300 hover:bg-fuchsia-600 dark:hover:bg-gray-700 dark:bg-gray-800">
                View carrier details
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Map />
      </section>
    </>
  );
};

export default Status;
