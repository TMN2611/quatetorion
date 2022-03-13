import styles from './Products.module.css';

export default function Products({ products, VAT }) {
  return (
    <ul className={styles.productList}>
      {products.map((product, index) => (
        <li key={index} className={styles.productItem}>
          <a href='#' className={styles.productLink}>
            <img
              className={styles.productImg}
              src={product.productUrl}
              alt=''
            />
            <div className={styles.productContent}>
              <h3 className={styles.productName}>{product.name}</h3>
              <h5 className={styles.productPriceTitle}>{product.priceTitle}</h5>
              <p className={styles.productPrice}>
                {product.price
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}{' '}
                VNĐ
              </p>
              {VAT ? (
                <h5 className={styles.productPriceTitle}>(Đã bao gồm VAT)</h5>
              ) : (
                ''
              )}
              <p className={styles.productDescription}>{product.description}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
