import styles from "./ProductCard.module.css";
export default function ProductCard() {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img src="url" alt="alt" />
        {/* badge later */}
      </div>

      <div className={styles.content}>
        <h3>Title</h3>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ab
          eveniet inventore, fugiat illum corrupti vero sint adipisci non
          doloribus blanditiis a unde minima dolorum magnam cumque eius maxime
          quis.
        </p>

        <div className={styles.price}>
          <span>$70.00</span>
        </div>
      </div>

      <div className={styles.actions}>
        <button>Add to cart</button>
      </div>
    </article>
  );
}
