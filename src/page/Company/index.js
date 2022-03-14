import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './company.css';

import Whychoiceme from '../../component/Whychoiceme';
import Footer from '../../component/Footer';
import Slogan from '../../component/Ui/Slogan';
import Products from '../../component/Ui/Products';
import InputGroup from '../../component/Ui/InputGroup';
import Button from '../../component/Ui/Button';

export default function Company() {
  useEffect(() => {
    // window.scrollTo(0, 0);
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
  };
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
      <div className='customer-partner'>
        <div className='container'>
          <Slogan
            sloganTop='Hơn cả sự tin tưởng là An tâm'
            sloganTitle='khách hàng & đối tác'
            maxWidthDesc='777.5px'
            maxWidthTitle='630px'
            center
            uppercaseTitle
          />
          <Slider {...settings} className='customer-partner--list'>
            <div className='customer-partner--item'>
              <img src='./img/Customer-Partner/-1634876753.png' alt='' />
            </div>
            <div className='customer-partner--item'>
              <img src='./img/Customer-Partner/-1634876785.png' alt='' />
            </div>
            <div className='customer-partner--item'>
              <img src='./img/Customer-Partner/-1634876809.png' alt='' />
            </div>
            <div className='customer-partner--item'>
              <img src='./img/Customer-Partner/-1634876855.png' alt='' />
            </div>
            <div className='customer-partner--item'>
              <img src='./img/Customer-Partner/-1634877150.png' alt='' />
            </div>
            <div className='customer-partner--item'>
              <img src='./img/Customer-Partner/-1635933197.png' alt='' />
            </div>
            <div className='customer-partner--item'>
              <img src='./img/Customer-Partner/-1634876753.png' alt='' />
            </div>
          </Slider>
        </div>
      </div>

      <section className='form-section'>
        <div className='container'>
          <div className='form-wrapper'>
            <h3 className='form-title text-center'>
              Đặt bộ quà tết orion <br /> cho doanh nghiệp của bạn
            </h3>
            <p className='form-desc text-center'>
              Orion mang đến lựa chọn hoàn hảo cho nhu cầu mua sắm quà Tết của
              mọi nhà và các doanh nghiệp.
            </p>

            <form action=''>
              <h4 className='form-subTitle'>Thông tin doanh nghiệp</h4>
              <InputGroup
                placeholder='Nhập tên công ty'
                inputName={'Tên công ty'}
              />
              <div className='form-group-2col'>
                <InputGroup
                  placeholder='Nhập tên công ty'
                  inputName={'Tên công ty'}
                />
                <InputGroup
                  placeholder='Nhập tên công ty'
                  inputName={'Tên công ty'}
                />
              </div>
              <InputGroup
                placeholder='Nhập tên công ty'
                inputName={'Tên công ty'}
              />
              <h4 className='form-subTitle'>Thông tin doanh nghiệp</h4>
              <div className='form-group-2col'>
                <InputGroup
                  placeholder='Nhập tên công ty'
                  inputName={'Tên công ty'}
                />
                <InputGroup
                  placeholder='Nhập tên công ty'
                  inputName={'Tên công ty'}
                />
              </div>
              <Button title={'Gửi yêu cầu'} fullWidth primary hotline />
            </form>
            <div className='faq text-center'>
              <p className='faq-title'>Bạn cần tư vấn? Liên hệ ngay Hotline</p>
              <p className='faq-hotline'>0971 998 755</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
