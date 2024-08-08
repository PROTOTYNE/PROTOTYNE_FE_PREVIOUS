import React from 'react';
import Date from '@/entities/element/detail/Date';
import ImageSlide from '@/entities/element/detail/ImageSlide';
import Product from '@/entities/element/detail/Product';
import ProductInfo from '@/entities/element/detail/ProductInfo';
import Footer from '@/entities/element/detail/Footer';

const DetailPage: React.FC = () => {
  return <div>
    <ImageSlide/>
    <Product
    category='#식품'
    name='마라탕후루 만두 마라맛'
    company='(주)서영식품'
    quantity={2}/>
    <Date/>
    <ProductInfo
    productName='마라탕후루 만두 12개입'
    productDescription='한국에서는 밀가루피에 고기, 두부, 채소 등 소를 넣어 조리한 모든 음식을 통칭해서 만두라고 부른다. 고기와 채소가 아닌 단팥 등을 넣은 것은 보통 찐빵이라 한다.  하지만 일반적으로 우리가 만두라고 부르는 것은 중국이나 일본에서는 교자라고 부르며 만두와는 구별된다.'
    additionalNotes='제공받은 제품 양도하면 안되고.. 후기 작성 하지 않으면 불이익 어쩌구 저쩌구'/>
    <Footer/>
  </div>;
};

export default DetailPage;
