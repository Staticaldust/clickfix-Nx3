// import { useNavigate } from 'react-router-dom';

// interface CategoriesProps {
//   categories: string | undefined;
// }

// const CategoryButton = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//       {categories.map((category) => (
//         <div
//           key={category.category_id}
//           className="group relative"
//           onClick={() => {
//             // setSelectedCategory(category.name);
//             navigate(`/cards?category=${encodeURIComponent(category.name)}`);
//           }}
//         >
//           <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//             <img
//               src={category.image}
//               alt="Category Image"
//               className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//             />
//           </div>
//           <div className="mt-4 flex justify-between">
//             <div>
//               <h3 className="text-sm text-gray-700">
//                 <div>
//                   <span aria-hidden="true" className="absolute inset-0" />
//                 </div>
//               </h3>
//               <p className="mt-1 text-sm text-gray-500"></p>
//             </div>
//             <p className="text-xl font-medium text-blue-900">{category.name}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default CategoryButton;
