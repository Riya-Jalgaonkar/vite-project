import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TransformationCard from "./TransformationCard.jsx";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import React from "react";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 }
};

export default function TransformationSection() {
  return (
    <section id="customers" className="py-20 px-4 bg-gradient-to-b from-green-50 via-white to-green-50 text-center">
      <h2 className="text-4xl font-extrabold text-green-700 mb-4">
        Transformations That Inspire
      </h2>
      <p className="text-gray-600 text-sm max-w-xl mx-auto mb-10">
        See how real people have experienced life-changing results with Mohini’s support 🌿
      </p>

      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4500}
        transitionDuration={600}
        containerClass="mx-auto max-w-7xl"
        itemClass="px-2 py-4"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {[img1, img2, img3].map((img, index) => (
          <TransformationCard
            key={index}
            image={img}
            name="Hinal Patel"
            message="Best experience ever, My life is all set thanks to Mohini Ben"
          />
        ))}
      </Carousel>
    </section>
  );
}
