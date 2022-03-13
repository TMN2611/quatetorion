import React, { useEffect } from 'react';
import './company.css';

import Whychoiceme from '../../component/Whychoiceme';
import Footer from '../../component/Footer';
import Slogan from '../../component/Ui/Slogan';
import Products from '../../component/Ui/Products';

export default function Company() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const companyProducts = [
    {
      name: 'Bộ quà tết AN 1',
      productUrl: './img/products/quatet-an1.png',
      priceTitle: 'Giá tham khảo',
      price: 143000,
      description:
        'Thiết kế sang trọng nhưng rất gần gũi, đây sẽ là một lựa chọn hoàn hảo để Quý Khách Hàng biếu tặng người thân và bạn bè trong dịp Tết Nhâm Dần 2022',
    },
    {
      name: 'Bộ quà tết AN 2',
      productUrl: './img/products/quatet-an2.png',
      priceTitle: 'Giá tham khảo',
      price: 198000,
      description:
        'Thiết kế sang trọng, đẳng cấp nhưng rất gần gũi, đây sẽ là một lựa chọn hoàn hảo để Quý Khách Hàng gửi tặng đối tác, đồng nghiệp hoặc người thân trong dịp Tết Nhâm Dần 2022.',
    },
    {
      name: 'Bộ quà tết AN 3',
      productUrl: './img/products/quatet-an3.png',
      priceTitle: 'Giá tham khảo',
      price: 242000,
      description:
        'Với thiết kế sang trọng, đẳng cấp nhưng rất gần gũi, đây sẽ là một lựa chọn hoàn hảo để Quý Doanh Nghiệp sử dụng như một món quà tri ân đến các đối tác, nhân viên của mình trong dịp Tết Nhâm Dần 2022.',
    },
    {
      name: 'Bộ quà tết AN 1',
      productUrl: './img/products/-1635933856.png',
      priceTitle: 'Giá tham khảo',
      price: 143000,
      description:
        'Với thiết kế sang trọng, đẳng cấp nhưng rất gần gũi, đây sẽ là một lựa chọn hoàn hảo để Quý Doanh Nghiệp sử dụng như một món quà tri ân đến các đối tác, nhân viên của mình trong dịp Tết Nhâm Dần 2022.',
    },
    {
      name: 'Bộ quà tết AN 2',
      productUrl: './img/products/-1636015378.png',
      priceTitle: 'Giá tham khảo',
      price: 198000,
      description:
        'Thiết kế sang trọng, đẳng cấp nhưng rất gần gũi, đây sẽ là một lựa chọn hoàn hảo để Quý Khách Hàng gửi tặng đối tác, đồng nghiệp hoặc người thân trong dịp Tết Nhâm Dần 2022.',
    },
    {
      name: 'Bộ quà tết AN 3',
      productUrl: './img/products/-1636097741.png',
      priceTitle: 'Giá tham khảo',
      price: 242000,
      description:
        'Với thiết kế sang trọng, đẳng cấp nhưng rất gần gũi, đây sẽ là một lựa chọn hoàn hảo để Quý Doanh Nghiệp sử dụng như một món quà tri ân đến các đối tác, nhân viên của mình trong dịp Tết Nhâm Dần 2022.',
    },
  ];
  return (
    <div>
      <div className='company-products'>
        <div className='container'>
          <Slogan
            sloganTop='Món quà ý nghĩa'
            sloganTitle='Doanh nghiệp dành tặng Đối tác, nhân viên công ty'
            description='Với thiết kế hộp quà có quai xách sang trọng, đẳng cấp nhưng rất gần gũi, đây sẽ là lựa chọn hoàn hảo để Quý Doanh Nghiệp sử dụng như món quà tri ân đến các đối tác, nhân viên của mình trong dịp Tết Nhâm Dần 2022'
            maxWidthDesc='777.5px'
            maxWidthTitle='630px'
            textColor='white'
            center
          />
          <Products products={companyProducts} VAT />

          <div className='condition'>
            <h3 className='condition-title'>Điều kiện áp dụng</h3>
            <p className='condition-item'>
              <img src='./img/img-list.png' alt='' />
              Áp dụng cho Doanh Nghiệp đặt đơn hàng từ 100 hộp trở lên
            </p>
            <p className='condition-item'>
              <img src='./img/img-list.png' alt='' />
              Áp dụng in logo, chọn thiết kế mẫu (giữ nguyên kích thước giỏ quà
              tặng đã niêm yết) hoặc sử dụng 1 thiết kế trên hình và thay đổi
              các sản phẩm bên trong (áp dụng cho đơn hàng từ 3,000 hộp trở lên)
            </p>
          </div>
        </div>
      </div>

      <Whychoiceme />
      <Footer />
    </div>
  );
}
