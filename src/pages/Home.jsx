import React from "react";
import AfterBanner from "./components/AfterBanner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewPosts from "./components/NewPosts";
import PopularPosts from "./components/PopularPosts";
import TopBanner from "./components/TopBanner";
import TopPosts from "./components/TopPosts";
import TrendyPosts from "./components/TrendyPosts";
import VideoSlider from "./components/VideoSlider";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <TopBanner /> */}
      {/* <AfterBanner /> */}
      <img
        src="/landing/Frame 16.png"
        alt="landing"
        className="object-cover w-full h-auto"
      />
      <PopularPosts />
      <img
        src="/landing/sports-widget.png"
        alt="sports-widget"
        className="object-cover w-full h-auto"
      />
      <NewPosts />
      <VideoSlider />
      <TrendyPosts />
      <img
        src="/landing/weather.png"
        alt="weather"
        className="object-cover w-full h-auto"
      />
      <TopPosts />
      <Footer />
    </div>
  );
};

export default Home;
