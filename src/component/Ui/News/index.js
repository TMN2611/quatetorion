import styles from './News.module.css';
import clsx from 'clsx';

export default function News({ news, inHomePage }) {
  return (
    <ul className={styles.newList}>
      {news.map((newItem, index) => (
        <li
          key={index}
          className={clsx(styles.newItem, {
            [styles.newItemLightHover]: inHomePage,
            [styles.newItemBoldHover]: !inHomePage,
          })}
        >
          <a href='#' className={styles.newLink}>
            <img className={styles.newImg} src={newItem.newUrl} alt='' />

            <div className={styles.newContent}>
              <div className={styles.newButtonWrapper}>
                <button className={styles.newButton}>Xem ngay</button>
              </div>
              <h3 className={styles.newName}>{newItem.name}</h3>

              <p className={styles.newDescription}>{newItem.description}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
