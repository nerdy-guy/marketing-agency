import Features from "./Features";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Testimonials
            name="Jane Doe"
            jobTitle="Senior Brand Manager"
            imageSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTN8fGxhZHklMjBoZWFkc2hvdCUyMHNtaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials
            name="Mark Holt"
            jobTitle="Marketing Manager"
            imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials
            name="Karen Schmoe"
            jobTitle="Growth Marketer"
            imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials
            name="John Doe"
            jobTitle="CEO"
            imageSrc="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </SwiperSlide>
      </Swiper>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
