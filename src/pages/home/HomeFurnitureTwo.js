import React from "react";
import HeroSliderTwentyNine from "../../wrappers/hero-slider/HeroSliderTwentyNine";
// import FirstSectiontree from "../../wrappers/content-home/FirstSectiontree";
import SecondSection from "../../wrappers/content-home/SecondSection";
import ByCategory from "../../wrappers/content-home/ByCategory";
// import CategoryFiveSingle from "../../components/category/CategoryFiveSingle";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";


// import NewsletterTwo from "../../wrappers/newsletter/NewsletterTwo";
import LayoutOne from "../../layouts/LayoutOne";
import HomeCategory from "../../components/agricoinpage/HomeCategory";
// import CategoryTwoSlider from "../../wrappers/category/CategoryTwoSlider";
// import TabProductSix from "../../wrappers/product/TabProductSix";
// import FirstSection from "../../wrappers/content-home/FirstSection";
// import AnimateSection from "../../wrappers/content-home/AnimateSection";
// import ThirdSection from "../../wrappers/content-home/ThirdSection";
// import FourthSection from "../../wrappers/content-home/FourthSection";
// import MapSection from "../../wrappers/content-home/MapSection";
// import FifthSection from "../../wrappers/content-home/FifthSection";

const HomeFurnitureTwo = () => {
  return (
    <LayoutOne>
      {/* hero slider */}
      {/* <HeroSliderTwentyEight /> */}
      {/* First Section */}
      {/* Second Store */}
       {/* <FirstSectiontree /> */}
      {/* hero slider */}
      <HeroSliderTwentyNine />
        {/* category grid */}
        <HomeCategory spaceBottomClass="pb-70" />
      {/* Product slider */}
       <SecondSection />

       {/* featured icon */}
       <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" />

      {/* Browse by categor */}
      <ByCategory /> 
      {/* newsletter */}
     {/* <NewsletterTwo spaceBottomClass="pb-100" />  */}
    </LayoutOne>
  );
};

export default HomeFurnitureTwo;
