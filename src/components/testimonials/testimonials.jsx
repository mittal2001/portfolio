import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import {Pagination, Scrollbar} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


const data = [{
  avatar:AVTR1,
  name:'Ayush Kumar',
  review:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, minus? Facere vero labore fuga excepturi suscipit recusandae delectus omnis repudiandae minima deserunt, inventore, quo nesciunt ullam dolor veniam, amet quaerat?"
  
},
{
  avatar:AVTR2,
  name:'Ayush Kumar',
  review:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, minus? Facere vero labore fuga excepturi suscipit recusandae delectus omnis repudiandae minima deserunt, inventore, quo nesciunt ullam dolor veniam, amet quaerat?"
},
{
  avatar:AVTR3,
  name:'Ayush Kumar',
  review:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, minus? Facere vero labore fuga excepturi suscipit recusandae delectus omnis repudiandae minima deserunt, inventore, quo nesciunt ullam dolor veniam, amet quaerat?"
},
{
  avatar:AVTR4,
  name:'Ayush Kumar',
  review:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, minus? Facere vero labore fuga excepturi suscipit recusandae delectus omnis repudiandae minima deserunt, inventore, quo nesciunt ullam dolor veniam, amet quaerat?"
}

]
const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       modules={[Pagination, Scrollbar]}
       spaceBetween={40}
       slidesPerView={1}
      
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}>
       
       {
         data.map(({avatar,name,review},index)=>{
          return(
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
         })
       }

      </Swiper>
    </section>
  )
}

export default testimonials
