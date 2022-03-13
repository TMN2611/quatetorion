import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Slogan from '../../component/Ui/Slogan';
import Products from '../../component/Ui/Products';
import Button from '../../component/Ui/Button';
import Whychoiceme from '../../component/Whychoiceme';
import News from '../../component/Ui/News';
import Footer from '../../component/Footer';

export default function Home() {
  const personalProducts = [
    {
      name: 'Bộ quà Orion - An I',
      productUrl: './img/products/orion-an1.png',
      priceTitle: 'Giá tham khảo',
      price: 145000,
      description:
        'Thiết kế sang trọng nhưng rất gần gũi, đây sẽ là một lựa chọn hoàn hảo để Quý Khách Hàng biếu tặng người thân và bạn bè trong dịp Tết Nhâm Dần 2022',
    },
    {
      name: 'Bộ quà Orion - An I',
      productUrl: './img/products/orion-an2.png',
      priceTitle: 'Giá tham khảo',
      price: 145000,
      description:
        'Thiết kế sang trọng nhưng rất gần gũi, đây sẽ là một lựa chọn hoàn hảo để Quý Khách Hàng biếu tặng người thân và bạn bè trong dịp Tết Nhâm Dần 2022',
    },
    {
      name: 'Bộ quà Orion - An I',
      productUrl: './img/products/orion-an3.png',
      priceTitle: 'Giá tham khảo',
      price: 145000,
      description:
        'Thiết kế sang trọng nhưng rất gần gũi, đây sẽ là một lựa chọn hoàn hảo để Quý Khách Hàng biếu tặng người thân và bạn bè trong dịp Tết Nhâm Dần 2022',
    },
  ];
  const compamyProducts = [
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
  ];
  const newsList = [
    {
      name: 'Xu hướng chọn mua quà Tết 2022 trong thời dịch',
      newUrl: './img/news/new-01.jpg',
      description:
        'Chịu ảnh hưởng bởi dịch Covid-19, thị trường quà Tết 2022 có một số thay đổi nhằm phù hợp với nhu cầu chung, khi mọi người quan tâm hơn đến sức khỏe và tiêu dùng xanh.',
    },
    {
      name: '5 món quà thay lời chúc Tết giúp thắt chặt tình cảm đồng nghiệp',
      newUrl: './img/news/new-02.png',
      description:
        'Những món quà giản dị, thiết thực và mang thông điệp kết nối như lịch để bàn, giỏ trái cây, bánh kẹo, quà handmade… có thể giúp mối quan hệ đồng nghiệp thêm gắn bó, thân tình.',
    },
    {
      name: 'GIẢI MÃ SỨC HÚT ĐẶC BIỆT CỦA HỘP QUÀ TẾT 2022',
      newUrl: './img/news/new-03.png',
      description:
        'Với thiết kế sang trọng, đẳng cấp nhưng rất gần gũi, đây sẽ là một lựa chọn hoàn hảo để Quý Doanh Nghiệp sử dụng như một món quà tri ân đến các đối tác, nhân viên của mình trong dịp Tết Nhâm Dần 2022.',
    },
    {
      name: 'CẬN CẢNH 10 HỘP QUÀ TẾT 2022 ĐỘC ĐÁO CỦA ORION',
      newUrl: './img/news/new-04.png',
      description:
        'Xu hướng tặng quà Tết tri ân đang ngày càng được nhiều doanh nghiệp quan tâm. Doanh nghiệp chú trọng những món quà Tết cao cấp vừa gửi gắm lời cảm ơn đến nhân viên, khách hàng, vừa khéo léo thể hiện bộ mặt doanh nghiệp, giúp tạo dựng cảm tình để từ đó thúc đẩy mối quan hệ hợp tác bền lâu. Trong 10 hộp quà Tết Orion, 4 bộ hộp quà An V, VI, VII, VIII là những chọn lựa nên được doanh nghiệp cân nhắc hơn cả. Có thiết kế hộp lớn, kèm quai xách tiện lợi và lịch sự, 4 bộ quà Tết này nổi bật nhờ sự tinh tế cùng bộ sản phẩm bánh kẹo chất lượng bên trong. Từ hộp bánh quy mè Goute Moulin Rouge nổi tiếng cho đến bánh quy bơ tươi cao cấp Marika được đựng trong các hộp thiếc, đây sẽ là món quà xuân thiết thực mà không kém phần sang trọng và ấn tượng. Các bộ hộp quà An V, VI, VII, VIII có giá chiết khấu hấp dẫn (áp dụng cho đơn hàng từ 50 hộp trở lên) lần lượt là 253.000 – 313.500 – 363.000 – 379.500đ/hộp mang đến nhiều sự lựa chọn phong phú cho doanh nghiệp và tổ chức.',
    },
  ];
  return (
    <div className='home'>
      <section className='home-banner'>
        <img src='./img/home-banner.png' alt='' />
      </section>

      <section className='personal'>
        <div className='container'>
          <div className='personal-container'>
            <Slogan
              sloganTop='Món quà ý nghĩa'
              sloganTitle='Dành tặng gia đình, bạn bè'
              description='Thiết kế quai xách sang trọng và đẳng cấp sẽ là lựa chọn hoàn hảo để gửi
              tặng đối tác, đồng nghiệp hoặc người thân trong dịp Tết. Ngoài các sản
              phẩm chất lượng của Orion thì điểm nhấn của của bộ quà tặng là hộp thiếc
              bánh quy bơ tươi cao cấp từ Marika kèm thêm túi giấy sang trọng bên
              trong.'
              right
              maxWidthDesc='750px'
            />

            <Products products={personalProducts} />
            <Link to='/personal-customer'>
              <div className='f-center'>
                <Button title='Xem tất cả' primary />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className='company'>
        <div className='container'>
          <div className='company-container'>
            <Slogan
              sloganTop='Món quà ý nghĩa'
              sloganTitle='Doanh nghiệp dành tặng Đối tác, nhân viên công ty'
              description=' Với thiết kế hộp quà có quai xách sang trọng, đẳng cấp nhưng rất gần gũi, đây sẽ là lựa chọn hoàn hảo để Quý Doanh Nghiệp sử dụng như món quà tri ân đến các đối tác, nhân viên của mình trong dịp Tết Nhâm Dần 2022'
              maxWidthDesc='758.3px'
              maxWidthTitle='650px'
              textColor='white'
            />

            <Products products={compamyProducts} VAT />
            <Link to='/company-customer'>
              <div className='f-center'>
                <Button title='Xem tất cả' secondary />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Whychoiceme />
      <section className='home-news'>
        <div className='container'>
          <div className='home-news-container'>
            <Slogan
              sloganTop='Cập nhật mới nhất'
              sloganTitle='Tin tức'
              description=''
              maxWidth='758.3px'
              center
              uppercaseTitle
            />

            <News news={newsList} inHomePage />
            <Link to='/personal-customer'>
              <div className='f-center'>
                <Button title='Xem tất cả' primary />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
