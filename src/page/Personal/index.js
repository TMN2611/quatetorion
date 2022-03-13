import React, { useEffect } from 'react';
import './personal.css';
import Whychoiceme from '../../component/Whychoiceme';
import Footer from '../../component/Footer';
import Slogan from '../../component/Ui/Slogan';
import Products from '../../component/Ui/Products';

export default function Personal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      name: 'Bộ quà Orion - An II',
      productUrl: './img/products/orion-an2.png',
      priceTitle: 'Giá tham khảo',
      price: 193000,
      description:
        'Thiết kế sang trọng nhưng rất gần gũi, đây sẽ là một lựa chọn hoàn hảo để Quý Khách Hàng biếu tặng người thân và bạn bè trong dịp Tết Nhâm Dần 2022',
    },
    {
      name: 'Bộ quà Orion - An III',
      productUrl: './img/products/orion-an3.png',
      priceTitle: 'Giá tham khảo',
      price: 235000,
      description:
        'Thiết kế sang trọng nhưng rất gần gũi, đây sẽ là một lựa chọn hoàn hảo để Quý Khách Hàng biếu tặng người thân và bạn bè trong dịp Tết Nhâm Dần 2022',
    },
    {
      name: 'Bộ Quà Tết Orion – Tết Phúc',
      productUrl: './img/products/-1639729923.png',
      priceTitle: 'Giá tham khảo',
      price: 240000,
      description:
        'Thiết kế sang trọng nhưng rất gần gũi, đây sẽ là một lựa chọn hoàn hảo để Quý Khách Hàng biếu tặng người thân và bạn bè trong dịp Tết Nhâm Dần 2022',
    },
    {
      name: 'Bộ Quà Tết Orion – Bình An I',
      productUrl: './img/products/-1639729940.png',
      priceTitle: 'Giá tham khảo',
      price: 140000,
      description:
        'Thiết kế sang trọng nhưng rất gần gũi, đây sẽ là một lựa chọn hoàn hảo để Quý Khách Hàng biếu tặng người thân và bạn bè trong dịp Tết Nhâm Dần 2022',
    },
    {
      name: 'Bộ Quà Tết Orion – Bình An II',
      productUrl: './img/products/-1639729955.png',
      priceTitle: 'Giá tham khảo',
      price: 180000,
      description:
        'Thiết kế sang trọng nhưng rất gần gũi, đây sẽ là một lựa chọn hoàn hảo để Quý Khách Hàng biếu tặng người thân và bạn bè trong dịp Tết Nhâm Dần 2022',
    },
    {
      name: 'Hộp Marika 28P (nhỏ)',
      productUrl: './img/products/-1638158070.png',
      priceTitle: 'Giá tham khảo',
      price: 80000,
      description:
        'Hộp quà thiếc Marika chính là sự tái hiện của vẻ sang trọng, đẳng cấp qua thiết kế đầy tinh tế lẫn hượng vị thật ấn tượng',
    },
    {
      name: 'Hộp Marika 48P (lớn)',
      productUrl: './img/products/-1638158841.png',
      priceTitle: 'Giá tham khảo',
      price: 135000,
      description:
        'Hộp quà thiếc Marika chính là sự tái hiện của vẻ sang trọng, đẳng cấp qua thiết kế đầy tinh tế lẫn hượng vị thật ấn tượng',
    },
    {
      name: 'Hộp Goute 12P (nhỏ)',
      productUrl: './img/products/-1638159064.png',
      priceTitle: 'Giá tham khảo',
      price: 165000,
      description:
        'Hộp quà thiếc Goute chính là sự tái hiện của vẻ sang trọng, đẳng cấp qua thiết kế đầy tinh tế lẫn hượng vị thật ấn tượng',
    },
    {
      name: 'Hộp Goute 18P (lớn)',
      productUrl: './img/products/-1638159764.png',
      priceTitle: 'Giá tham khảo',
      price: 222000,
      description:
        'Hộp quà thiếc Goute chính là sự tái hiện của vẻ sang trọng, đẳng cấp qua thiết kế đầy tinh tế lẫn hượng vị thật ấn tượng',
    },
    {
      name: 'Hộp Quà Tặng ChocoPie',
      productUrl: './img/products/-1641799829.png',
      priceTitle: 'Giá tham khảo',
      price: 92000,
      description:
        'Phiên bản quà Tết đặc biệt của ChocoPie đa dạng và đầy đủ các vị bánh, thay lời cầu chúc một năm mới mẻ muôn màu muôn vẻ, an khang hạnh phúc',
    },
    {
      name: 'Hộp Quà Tặng Custas (2 loại)',
      productUrl: './img/products/-1640764257.png',
      priceTitle: 'Giá tham khảo',
      price: 92000,
      description:
        'Phiên bản quà Tết đặc biệt của ChocoPie đa dạng và đầy đủ các vị bánh, thay lời cầu chúc một năm mới mẻ muôn màu muôn vẻ, an khang hạnh phúc',
    },
    {
      name: 'Bộ Quà Tặng Khoẻ Premium',
      productUrl: './img/products/-1641800555.png',
      priceTitle: 'Giá tham khảo',
      price: 560000,
      description:
        'Bộ quà KHỎE - Hạt Dinh Dưỡng Tự Nhiên là kết tinh dưỡng chất từ các loại hạt, hạt khô cao cấp đã qua chọn lọc và chế biến kỹ lưỡng Với ước mong, không gì quý giá hơn, một sức khỏe dồi dào cho tân niên sung túc.',
    },
  ];
  return (
    <div>
      <div className='personal-products'>
        <div className='container'>
          <Slogan
            sloganTop='Món quà ý nghĩa'
            sloganTitle='Dành tặng gia đình, bạn bè'
            description='Thiết kế quai xách sang trọng và đẳng cấp sẽ là lựa chọn hoàn hảo để gửi tặng đối tác, đồng nghiệp hoặc người thân trong dịp Tết. Ngoài các sản phẩm chất lượng của Orion thì điểm nhấn của của bộ quà tặng là hộp thiếc bánh quy bơ tươi cao cấp từ Marika kèm thêm túi giấy sang trọng bên trong.'
            maxWidthDesc='777.5px'
            textColor='white'
            center
          />
          <Products products={personalProducts} VAT />
        </div>
      </div>

      <Whychoiceme />
      <Footer />
    </div>
  );
}
