import styles from '../styles.module.css';
export function Cards() {
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
      {products.map((product) => (
        <div key={product.id} className={styles['container']}>
          <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="#">
              <img
                className="rounded-lg"
                src={product.imageSrc}
                alt={product.imageAlt}
              />
            </a>
            <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <p>{product.name}</p>
            </figcaption>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.price}</p>
            <p>{product.price}</p>
            <p>{product.price}</p>
            <p>{product.price}</p>
            <p>{product.price}</p>
            <p>{product.price}</p>
          </figure>
        </div>
      ))}
    </div>
  );
}

export default Cards;
