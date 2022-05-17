import React from 'react';
import Info from '../Info/Info';
import Service from '../OurServices/Service';
import Appointment from './MakeAppointment';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Testimonial from './Testimonial';
import Footer from './Shared/Footer';


const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <Info></Info>
                  <Service></Service>
                  <Appointment></Appointment>
                  <Testimonial></Testimonial>
                  <ContactUs></ContactUs>
                  <Footer></Footer>
            </div>
      );
};

export default Home;