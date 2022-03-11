import React from 'react'
import './testimonial.css'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Pagination } from "swiper";

import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5> 
      <h2>Testimonials</h2> 
      <Swiper className="container testimonial__container"
        spaceBetween={40}
        slidesPerView={1}
      pagination={true} modules={[Pagination]}
      >
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={avatar1} alt='Avatar1'/>
          </div>
          <h5 className='client__name'>Bimalesh Kumar Yadav</h5>  
            <small className='client__review'>
            “Great job here showcasing different fonts for a project about lettering. The examples are clear and read well. Plus your overall headline is easy to read with the image. But how do you feel about the color choices? They feel a little “safe” to me. Did you look at something with more saturation?"  
            </small>
        </SwiperSlide>  
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={avatar2} alt='Avatar1'/>
          </div>
          <h5 className='client__name'>Reshmi Chaurasiya</h5>  
            <small className='client__review'>
            “Finally, think about the content and the visuals. You want them to match as much as possible. The big words talk about alternate lettering. The background panels should be more representative of that".  
            </small>
        </SwiperSlide>  
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={avatar3} alt='Avatar1'/>
          </div>
          <h5 className='client__name'>Amit Kumar Gupta</h5>  
            <small className='client__review'>
              Man of his words.  
            </small>
        </SwiperSlide>  
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={avatar4} alt='Avatar1'/>
          </div>
          <h5 className='client__name'>Anurag Kumar Gupta</h5>  
            <small className='client__review'>
           "Overall, your design is simple and organized well. If you were going to try this again, look closer at the details and consider jumping outside your comfort zone when it comes to color.”  
            </small>
        </SwiperSlide>  
      </Swiper>
    </section>
  )
}

export default Testimonial