import styles from './categories.module.css';

/* eslint-disable-next-line */
export interface CategoriesProps {}

export function Categories(props: CategoriesProps) {
  return (
    <div className={styles['container']}>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="/cards">
          <img
            className="rounded-t-lg"
            src="https://celebsoutfits.com/wp-content/uploads/2022/07/fast-and-furious-fast-and-furious-presents-hobbs-and-shaw-deckard-shaw-dwayne-johnson-jason-statham-hd-wallpaper-preview-1-510x574.gif"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="/cards">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Electricians
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Categories;
