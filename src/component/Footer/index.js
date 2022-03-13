import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footerContainer}>
          <ul className={styles.footerList}>
            <li className={styles.footerItem}>
              <img
                className={styles.footerLogo}
                src='./img/logo-dark.png'
                alt=''
              />
              <h3 className={styles.FooterCompanyName}>
                Công ty TNHH Thực phẩm Orion Vina
              </h3>

              <div className={styles.footerAddressWrapper}>
                <span className={styles.footerAddressIcon}>
                  <i className='fa-solid fa-building-columns'></i>
                </span>
                <div className={styles.footerAddressList}>
                  <p className={styles.footerAddressItem}>
                    Văn phòng: Tầng 22, tòa nhà Pearl Plaza, 561A, Điện Biên
                    Phủ, Phường 25, Quận Bình Thạnh, TP.HCM, Việt Nam
                  </p>
                  <p className={styles.footerAddressItem}>Nhà máy:</p>
                  <p className={styles.footerAddressItem}>
                    - Lô E-13-CN, Đường NA3, Khu công nghiệp Mỹ Phước II, Thị Xã
                    Bến Cát, tỉnh Bình Dương, Việt Nam.
                  </p>
                  <p className={styles.footerAddressItem}>
                    - Khu Công Nghiệp Yên Phong, Xã Yên Trung, huyện Yên Phong,
                    tỉnh Bắc Ninh, Việt Nam.
                  </p>
                </div>
              </div>
              <div className={styles.footerPhoneWrapper}>
                <span className={styles.footerPhoneIcon}>
                  <i className='fa-solid fa-phone'></i>
                </span>
                <a href='tel:0971 998 755' className={styles.footerPhone}>
                  0971 998 755
                </a>
              </div>
            </li>

            <li className={styles.footerItemRight}>
              <img
                className={styles.footerItemRightImg}
                src='./img/An-img.png'
                alt=''
              />

              <div className={styles.footerRight}>
                <h3 className={styles.footerRightTitle}>
                  Tân niên vạn sự khởi đầu an
                </h3>
                <p className={styles.footerRightDesc}>
                  Hãy cùng mở ra tấm chân tình được gói ghém trong Bộ Quà Tết
                  Orion năm 2022. Thiết kế đặc biệt, sang trọng và vững chãi từ
                  bên ngoài, đầy trân quý với những sản phẩm chất lượng tốt từ
                  bên trong. Bộ Quà Tết Orion sẽ mang những lời chúc tốt đẹp
                  nhất về một năm mới đầy Bình An gửi đến những người yêu thương
                  và trân trọng nhất.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
