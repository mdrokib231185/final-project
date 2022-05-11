import React from 'react';
import quote from '../../assets/icons/quote.svg'
import img1 from '../../assets/images/people1.png'
import img2 from '../../assets/images/people2.png'
import img3 from '../../assets/images/people3.png'
import Reviews from './Reviews';

const Testimonial = () => {
      const reviews = [
        {
          _id: 1,
          name: "Winson hary",
          img: img1,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quisquam optio, dolorum soluta corrupti odio maxime esse id magni a repellendus veritatis ex commodi unde repellat libero minus nihil minima.",
          location: "california",
        },
        {
          _id: 2,
          name: "Winson hary",
          img: img2,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quisquam optio, dolorum soluta corrupti odio maxime esse id magni a repellendus veritatis ex commodi unde repellat libero minus nihil minima.",
          location: "california",
        },
        {
          _id: 3,
          name: "Winson hary",
          img: img3,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quisquam optio, dolorum soluta corrupti odio maxime esse id magni a repellendus veritatis ex commodi unde repellat libero minus nihil minima.",
          location: "california",
        },
      ];
      return (
            <section>
                  
                  <div className='flex justify-between'>
                        <div className='py-5 text-center '>
                              <h1 className='text-primary text-lg'>TESTIMONIAL</h1>
                              <h3 className='text-xl'>What Our Patient Says</h3>
                        </div>
                        <div>
                              <img style={{height:156, width:192}} src={quote} alt="" />
                        </div>
                  </div>
                  <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                              reviews.map(review => <Reviews
                                    key={review._id}
                              review={review}></Reviews>)
                       } 
                  </div>
            </section>
      );
};

export default Testimonial;