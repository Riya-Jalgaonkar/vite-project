import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TransformationCard from "./TransformationCard";
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const TransformationSection: React.FC = () => {
  return (
    <Carousel
    responsive={responsive} 
    infinite={true} 
    autoPlay={true} 
    autoPlaySpeed={5000} // Slide change every 3 seconds 
    customTransition="transform 300ms ease-in-out" 
    transitionDuration={500}
     
    >
     <div>
      <TransformationCard
        image= {img1} // Replace with your actual image path
        name="Hinal Patel"
        message="Best experience ever, My life is all set thanks to Mohini Ben"
      />
    </div>
    <div>
      <TransformationCard
        image= {img2} // Replace with your actual image path
        name="Hinal Patel"
        message="Best experience ever, My life is all set thanks to Mohini Ben"
      />
    </div>
    <div>
      <TransformationCard
        image= {img3} // Replace with your actual image path
        name="Hinal Patel"
        message="Best experience ever, My life is all set thanks to Mohini Ben"
      />
    </div>
    </Carousel>
  );
};

export default TransformationSection;
