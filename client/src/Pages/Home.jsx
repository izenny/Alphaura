import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import HeroBanner from "../Components/Home/HeroBanner";
import Banner2 from "../Components/Home/Banner2";
import CustomerReview from "../Components/Home/CustomerReview";
import SixReasons from "../Components/Home/SixReasons";
import Ingredients from "../Components/Home/Ingredients";
import Stories from "../Components/Home/Stories";
import Quality from "../Components/Home/Quality";
import Questions from "../Components/Home/Questions";
import Satisfaction from "../Components/Home/Satisfaction";
import Compare from "../Components/Home/Compare";
import ProductDetails from "../Components/Product/ProductDetails";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col  scrollbar-hide  ">
      <Navbar />
      <HeroBanner />
      <Banner2 />
      <CustomerReview />
      <SixReasons />
      <Ingredients />
      <Stories />
      <Quality />
      <ProductDetails/>
      <Satisfaction />
      <Compare/>
      <Questions />
    </div>
  );
};

export default Home;
