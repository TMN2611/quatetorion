import styles from './Whychoiceme.module.css';
import Slogan from '../Ui/Slogan';

export default function Whychoiceme() {
  return (
    <section className={styles.whychoiceme}>
      <div className='container'>
        <div className={styles.companyContainer}>
          <Slogan
            sloganTop='Tại sao lại nên chọn quà Tết Orion'
            sloganTitle='Quà Tết Orion'
            description=' Bộ quà Tết Orion không chỉ thu hút bởi thiết kế đa dạng, thiết kế sang trọng mà còn cực kỳ hấp dẫn bởi mức giá hợp lý và nhiều ưu đãi dành riêng cho Quý Khách Hàng. Bộ Quà Tết Orion hứa hẹn sẽ là một lựa chọn hoàn hảo để phục vụ nhu cầu mua sắm, sử dụng quà Tết cho cá nhân, gia đình và kể cả các doanh nghiệp.'
            maxWidthDesc='585px'
            center
            uppercaseTitle
          />
          <ul className={styles.whychoicemeList}>
            <li className={styles.whychoicemeItem}>
              <img
                className={styles.whychoicemeImg}
                src='./img/whychoiceme/gift-orion-item-ho.png'
                alt=''
              />
              <p className={styles.whychoicemeText}>
                Giá cả phù hợp với nhiều đối tượng khách hàng
              </p>
            </li>
            <li className={styles.whychoicemeItem}>
              <img
                className={styles.whychoicemeImg}
                src='./img/whychoiceme/gift-orion-item-ho.png'
                alt=''
              />
              <p className={styles.whychoicemeText}>
                Thiết kế sang trọng nhưng vẫn gần gũi với không khí Tết truyền
                thống của Việt Nam
              </p>
            </li>
            <li className={styles.whychoicemeItem}>
              <img
                className={styles.whychoicemeImg}
                src='./img/whychoiceme/gift-orion-item-ho.png'
                alt=''
              />
              <p className={styles.whychoicemeText}>
                Sản phẩm rất phù hợp để sử dụng vào dịp Tết
              </p>
            </li>
            <li className={styles.whychoicemeItem}>
              <img
                className={styles.whychoicemeImg}
                src='./img/whychoiceme/gift-orion-item-ho.png'
                alt=''
              />
              <p className={styles.whychoicemeText}>
                Sản phẩm được sử dụng cho nhiều mục đích khác nhau dịp Tế
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
