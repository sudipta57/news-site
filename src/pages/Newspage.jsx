import React from "react";
import "../App.css"; // Import your custom CSS
import Navbar2 from "../components/Navbar2";
import {
  ArticleData,
  HeadlineNewsData,
  SportsData,
  TechNewsData,
  TrendingNewsData,
} from "../components/Constant";
import Footer2 from "../components/Footer2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const HeadlineNavbar = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark", !darkMode); // Toggle dark mode on the body
  };

  return (
    <div className="max-w-[1600px] mx-auto">
      <Navbar2 />
      {/* breaking news section */}

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="/landing/breaking.png"
              alt="breaking"
              className="w-full object-cover rounded-lg"
            />
            <div className="bg-[linear-gradient(90deg,_#74439C_0%,_#260E42_98.85%)] w-[300px] h-[139px] absolute bottom-7 left-2 p-2 md:p-4">
              <h2 className="text-white text-[32px] font-[600] font-poppins">
                BREAKING NEWS
              </h2>
            </div>
            <div className=" absolute bottom-0 md:bottom-5 left-0 right-0 ">
              <div className="bg-white mx-5 p-2 md:p-1">
                <h2 className="text-[#000000] text-[14px] md:text-[36px] font-[700] font-poppins p-2 md:p-4 text-center md:text-left">
                  SECWEBXPERTS: Company Announces 11 Days Break For Employees
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="/landing/breaking2.png"
              alt="breaking"
              className="w-full object-cover rounded-lg"
            />
            <div className="bg-[linear-gradient(90deg,_#74439C_0%,_#260E42_98.85%)] w-[300px] h-[139px] absolute bottom-7 left-2 p-2 md:p-4">
              <h2 className="text-white text-[32px] font-[600] font-poppins">
                BREAKING NEWS
              </h2>
            </div>
            <div className=" absolute bottom-0 md:bottom-5 left-0 right-0 ">
              <div className="bg-white mx-5 p-2 md:p-1">
                <h2 className="text-[#000000] text-[14px] md:text-[30px] font-[700] p-2 md:p-4 text-center md:text-left">
                  कैसे बना लोकप्रिय भजन 'ऐसी लागी लगन'? अनूप जलोटा ने धर्म संसद
                  में सुनाया किस्सा
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="relative">
            <img
              src="/landing/breaking3.png"
              alt="breaking"
              className="w-full object-cover rounded-lg"
            />
            <div className="bg-[linear-gradient(90deg,_#74439C_0%,_#260E42_98.85%)] w-[300px] h-[139px] absolute bottom-7 left-2 p-2 md:p-4">
              <h2 className="text-white text-[32px] font-[600] font-poppins">
                BREAKING NEWS
              </h2>
            </div>
            <div className=" absolute bottom-0 md:bottom-5 left-0 right-0 ">
              <div className="bg-white mx-5 p-2 md:p-1">
                <h2 className="text-[#000000] text-[14px] md:text-[36px] font-[700] font-poppins p-2 md:p-4 text-center md:text-left">
                  करण जौहर को 'हीरो' बनाना चाहती हैं कंगना रनौत, बोलीं- फिल्म
                  में उन्हें एक अच्छा रोल दूंगी
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="/landing/breaking4.png"
              alt="breaking"
              className="w-full object-cover rounded-lg"
            />
            <div className="bg-[linear-gradient(90deg,_#74439C_0%,_#260E42_98.85%)] w-[300px] h-[139px] absolute bottom-7 left-2 p-2 md:p-4">
              <h2 className="text-white text-[32px] font-[600] font-poppins">
                BREAKING NEWS
              </h2>
            </div>
            <div className=" absolute bottom-0 md:bottom-5 left-0 right-0 ">
              <div className="bg-white mx-5 p-2 md:p-1">
                <h2 className="text-[#000000] text-[14px] md:text-[36px] font-[700] font-poppins p-2 md:p-4 text-center md:text-left">
                  Khel Ratna & Arjuna Award 2024: डी गुकेश, मनु भाकर समेत इन 4
                  को खेल रत्न...
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* main content */}

      <div className="grid grid-cols-4 gap-4 p-4">
        {/* Left Section */}
        <div className="col-span-4 md:col-span-3 border shadow-sm rounded-e-md p-4">
          {/* video section */}
          <div className="mb-10">
            <div className="flex items-center mb-5">
              <h2 className="text-[32px] font-[600] font-notoBengali">
                Videos
              </h2>
              <i class="fa-solid fa-chevron-right mt-[3px] ms-1"></i>
            </div>
            {/* <iframe
              src="https://www.ndtv.com/video/russian-gas-supply-to-europe-halted-882988"
              title="Video"
              className="w-full h-full rounded-lg"
              allowFullScreen
            ></iframe> */}
            <iframe
              allow="autoplay; fullscreen"
              src="https://www.ndtv.com/video/embed-player/?site=classic&id=882988&autostart=false&autoplay=0&pWidth=500&pHeight=281&category=embed"
              frameborder="0"
              scrolling="no"
              allowfullscreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              className="w-full h-[500px] rounded-lg"
            ></iframe>
          </div>
          {/* Headline News */}
          <div className="pb-4 mb-8">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center mb-5">
                <h2 className="text-[32px] font-[600] font-notoBengali">
                  Headline News
                </h2>
                <i class="fa-solid fa-chevron-right mt-2 ms-1"></i>
              </div>
              {/* <div className="flex space-x-2">
                <img src="/prev.png" alt="prev" />
                <img src="/next.png" alt="next" />
              </div> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {HeadlineNewsData.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#E31837] rounded-lg overflow-hidden group relative"
                >
                  {/* Image Section */}
                  <div className="relative h-[315px] overflow-hidden group">
                    <div className="absolute inset-0 flex animate-slideImages">
                      {item.img.map((imgSrc, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={imgSrc}
                          alt={`Card ${index + 1} - Image ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="p-4 bg-white">
                    <p className="text-[26px] font-[500] font-notoBengali text-[#000000]">
                      {item.description}
                    </p>
                    <p className="text-[#DA2228] text-[20px] font-notoBengali mt-4 font-[500] flex items-center">
                      और पढ़ें{" "}
                      <img
                        src="/landing/readmore.png"
                        alt="readmore"
                        className="ms-1"
                      />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Trending News */}

          {/* <div className="border-b border-[#E1E1E1] pb-4 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[20px] font-[700]">Web Stories &gt;</h2>
          
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="border border-[#E31837] rounded-lg overflow-hidden shadow-lg">
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/c651/0666/e09427e711f9477a06c20855ba573f70?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ioqI5BuuOmVxjxr4xdAFATyFy8jD4YoZnyiFSzbHI3qY1cZOZnMqBCIgve1WEjSsX-cJRpoxX5MDtbyeitqzypktktNNAy5Oc~XImwRFcZ--WO4F9N1YiQb3xplD7lm3CBlh7AIW0K~OM3NDslor7m3VEOhD3L4FG5dKb8JH7rsn9izj8GKTTBuHplfMsTUZk5hO41t-PrJ2pHkdwg0isz7hjaEqgN7CAqToSuCFrqFPlFqzQNP~V-M-fdjFlwj9hbQUUIlqmBJ3G9Ih48Px6zz37LD~IDGL9hWynunhyAh3IZ807ks0u5nhlkJW2ee8HF7DuWaXk2nuaofLJoi8Fw__" // Replace this with your image URL
                    className="w-full rounded-xl"
                    alt="Card"
                  />
                </div>

                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-800">
                    नरसिम्हा राव के फैवरेट मनमोहन, दो दोस्त जिनकी पार एक रही,
                    लेकिन अंतिम विवाद की किस्मत जुद
                  </p>
                  <p className="text-[#E31837] text-[12px] font-[500] mt-4">
                    December 30, 2024
                  </p>
                </div>
              </div>
              <div className="border border-[#E31837] rounded-lg overflow-hidden shadow-lg">
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/c651/0666/e09427e711f9477a06c20855ba573f70?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ioqI5BuuOmVxjxr4xdAFATyFy8jD4YoZnyiFSzbHI3qY1cZOZnMqBCIgve1WEjSsX-cJRpoxX5MDtbyeitqzypktktNNAy5Oc~XImwRFcZ--WO4F9N1YiQb3xplD7lm3CBlh7AIW0K~OM3NDslor7m3VEOhD3L4FG5dKb8JH7rsn9izj8GKTTBuHplfMsTUZk5hO41t-PrJ2pHkdwg0isz7hjaEqgN7CAqToSuCFrqFPlFqzQNP~V-M-fdjFlwj9hbQUUIlqmBJ3G9Ih48Px6zz37LD~IDGL9hWynunhyAh3IZ807ks0u5nhlkJW2ee8HF7DuWaXk2nuaofLJoi8Fw__" // Replace this with your image URL
                    className="w-full rounded-xl"
                    alt="Card"
                  />
                </div>

                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-800">
                    नरसिम्हा राव के फैवरेट मनमोहन, दो दोस्त जिनकी पार एक रही,
                    लेकिन अंतिम विवाद की किस्मत जुद
                  </p>
                  <p className="text-[#E31837] text-[12px] font-[500] mt-4">
                    December 30, 2024
                  </p>
                </div>
              </div>{" "}
              <div className="border border-[#E31837] rounded-lg overflow-hidden shadow-lg">
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/c651/0666/e09427e711f9477a06c20855ba573f70?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ioqI5BuuOmVxjxr4xdAFATyFy8jD4YoZnyiFSzbHI3qY1cZOZnMqBCIgve1WEjSsX-cJRpoxX5MDtbyeitqzypktktNNAy5Oc~XImwRFcZ--WO4F9N1YiQb3xplD7lm3CBlh7AIW0K~OM3NDslor7m3VEOhD3L4FG5dKb8JH7rsn9izj8GKTTBuHplfMsTUZk5hO41t-PrJ2pHkdwg0isz7hjaEqgN7CAqToSuCFrqFPlFqzQNP~V-M-fdjFlwj9hbQUUIlqmBJ3G9Ih48Px6zz37LD~IDGL9hWynunhyAh3IZ807ks0u5nhlkJW2ee8HF7DuWaXk2nuaofLJoi8Fw__" // Replace this with your image URL
                    className="w-full rounded-xl"
                    alt="Card"
                  />
                </div>

                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-800">
                    नरसिम्हा राव के फैवरेट मनमोहन, दो दोस्त जिनकी पार एक रही,
                    लेकिन अंतिम विवाद की किस्मत जुद
                  </p>
                  <p className="text-[#E31837] text-[12px] font-[500] mt-4">
                    December 30, 2024
                  </p>
                </div>
              </div>{" "}
              <div className="border border-[#E31837] rounded-lg overflow-hidden shadow-lg">
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/c651/0666/e09427e711f9477a06c20855ba573f70?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ioqI5BuuOmVxjxr4xdAFATyFy8jD4YoZnyiFSzbHI3qY1cZOZnMqBCIgve1WEjSsX-cJRpoxX5MDtbyeitqzypktktNNAy5Oc~XImwRFcZ--WO4F9N1YiQb3xplD7lm3CBlh7AIW0K~OM3NDslor7m3VEOhD3L4FG5dKb8JH7rsn9izj8GKTTBuHplfMsTUZk5hO41t-PrJ2pHkdwg0isz7hjaEqgN7CAqToSuCFrqFPlFqzQNP~V-M-fdjFlwj9hbQUUIlqmBJ3G9Ih48Px6zz37LD~IDGL9hWynunhyAh3IZ807ks0u5nhlkJW2ee8HF7DuWaXk2nuaofLJoi8Fw__" // Replace this with your image URL
                    className="w-full rounded-xl"
                    alt="Card"
                  />
                </div>

                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-800">
                    नरसिम्हा राव के फैवरेट मनमोहन, दो दोस्त जिनकी पार एक रही,
                    लेकिन अंतिम विवाद की किस्मत जुद
                  </p>
                  <p className="text-[#E31837] text-[12px] font-[500] mt-4">
                    December 30, 2024
                  </p>
                </div>
              </div>{" "}
            </div>
          </div> */}
          <div className="pb-4 mb-8">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center mb-5">
                {" "}
                <h2 className="text-[32px] font-[600] font-notoBengali">
                  Trending News{" "}
                </h2>
                <i class="fa-solid fa-chevron-right mt-2 ms-1"></i>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TrendingNewsData.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#E31837] rounded-lg overflow-hidden group relative"
                >
                  {/* Image Section */}
                  <div className="relative h-[315px] overflow-hidden group">
                    <div className="absolute inset-0 flex animate-slideImages">
                      {item.img.map((imgSrc, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={imgSrc}
                          alt={`Card ${index + 1} - Image ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="p-4 bg-white">
                    <p className="text-[26px] font-[500] font-notoBengali text-[#000000]">
                      {item.description}
                    </p>
                    <p className="text-[#DA2228] text-[20px] font-notoBengali mt-4 font-[500] flex items-center">
                      Read More{" "}
                      <img
                        src="/landing/readmore.png"
                        alt="readmore"
                        className="ms-1"
                      />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="col-span-4 md:col-span-1 p-6 max-w-4xl mx-auto space-y-8 border border-[#E1E1E1] rounded-[10px]">
          {/* Short Videos */}
          {/* <div className="bg-gray-900 rounded-lg p-4 shadow-lg">
            <h2 className="text-[#DA2228] font-bold text-lg mb-4 border-b border-[#DA2228]">
              Short Videos
            </h2>
            <div className="space-y-4 overflow-y-auto max-h-72 scrollbar-custom">
             
              <div className="flex items-center space-x-4 relative">
                <div className="relative w-20 h-14">
                  <img
                    src="https://via.placeholder.com/80"
                    alt="Video Thumbnail"
                    className="w-full h-full rounded-md object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="text-red-500 text-2xl">▶</button>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-200 text-sm font-semibold">
                    2024: The Year That Was
                  </p>
                  <p className="text-gray-400 text-xs">01:33</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 relative">
                <div className="relative w-20 h-14">
                  <img
                    src="https://via.placeholder.com/80"
                    alt="Video Thumbnail"
                    className="w-full h-full rounded-md object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="text-red-500 text-2xl">▶</button>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-200 text-sm font-semibold">
                    2024: The Year That Was
                  </p>
                  <p className="text-gray-400 text-xs">01:33</p>
                </div>
              </div>{" "}
              <div className="flex items-center space-x-4 relative">
                <div className="relative w-20 h-14">
                  <img
                    src="https://via.placeholder.com/80"
                    alt="Video Thumbnail"
                    className="w-full h-full rounded-md object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="text-red-500 text-2xl">▶</button>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-200 text-sm font-semibold">
                    2024: The Year That Was
                  </p>
                  <p className="text-gray-400 text-xs">01:33</p>
                </div>
              </div>{" "}
              <div className="flex items-center space-x-4 relative">
                <div className="relative w-20 h-14">
                  <img
                    src="https://via.placeholder.com/80"
                    alt="Video Thumbnail"
                    className="w-full h-full rounded-md object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="text-red-500 text-2xl">▶</button>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-200 text-sm font-semibold">
                    2024: The Year That Was
                  </p>
                  <p className="text-gray-400 text-xs">01:33</p>
                </div>
              </div>{" "}
              <div className="flex items-center space-x-4 relative">
                <div className="relative w-20 h-14">
                  <img
                    src="https://via.placeholder.com/80"
                    alt="Video Thumbnail"
                    className="w-full h-full rounded-md object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="text-red-500 text-2xl">▶</button>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-200 text-sm font-semibold">
                    2024: The Year That Was
                  </p>
                  <p className="text-gray-400 text-xs">01:33</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Share Market */}
          {/* <div>
            <h2 className="text-red-500 font-bold text-lg mb-2">
              Share Market
            </h2>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/500x300"
                alt="Share Market Chart"
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}

          {/* Advertisement */}
          <div>
            <h2 className="text-[#BF2025] font-[16px] text-[600] font-notoBengali">
              Advertisement
            </h2>
            <div className="h-[2px] bg-[#BF2025] w-[119px] mb-5"></div>
            <div className="rounded-lg shadow-lg overflow-hidden relative">
              <img
                src="/landing/ad.png"
                alt="Advertisement"
                className="w-full h-full object-cover"
              />
              <div className="flex absolute right-2 top-2 space-x-2">
                <div className="bg-white p-2 rounded-[5px]">
                  <img
                    src="/landing/adicon1.png"
                    alt="adicon"
                    className="w-[24px] h-[24px] cursor-pointer"
                  />
                </div>
                <div className="bg-white p-2 rounded-[5px]">
                  <img
                    src="/landing/adicon2.png"
                    alt="adicon"
                    className="w-[24px] h-[24px] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Advertisement */}
          <div>
            <h2 className="text-[#BF2025] font-[16px] text-[600] font-notoBengali">
              Advertisement
            </h2>
            <div className="h-[2px] bg-[#BF2025] w-[119px] mb-5"></div>
            <div className="rounded-lg shadow-lg overflow-hidden relative">
              <img
                src="/landing/ad2.png"
                alt="Advertisement"
                className="w-full h-full object-cover"
              />
              <div className="flex absolute right-2 top-2 space-x-2">
                <div className="bg-white p-2 rounded-[5px]">
                  <img
                    src="/landing/adicon1.png"
                    alt="adicon"
                    className="w-[24px] h-[24px] cursor-pointer"
                  />
                </div>
                <div className="bg-white p-2 rounded-[5px]">
                  <img
                    src="/landing/adicon2.png"
                    alt="adicon"
                    className="w-[24px] h-[24px] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Weather */}
          <div className="bg-[#1C1C1C] rounded-lg p-6 flex justify-between shadow-lg">
            <div>
              <h2 className="text-[#BF2025] font-[600] text-[16px] font-notoBengali w-[70px] border-b-2 border-[#BF2025] mb-4">
                Weather
              </h2>
              <div className="text-white">
                <p className="flex items-center space-x-2 mb-2">
                  <span className="bg-[#D83232] text-white px-2 py-1 w-[119px] h-[40px] flex justify-center items-center rounded-full">
                    <img
                      src="/landing/location.png"
                      alt="location"
                      className="me-2 w-[15px] h-[20px]"
                    />
                    India
                  </span>
                </p>
                <p className="text-[32px] font-[500] font-inter">Monday</p>
                <p className="text-[16px] font-[400] font-inter">
                  30 Dec, 2024
                </p>
                <p className="text-[64px] font-[500] font-inter my-4">26°C</p>
                <p className="text-[16px] font-[400] font-inter mb-4">
                  High: 27 Low: 10
                </p>
              </div>
            </div>
            <div>
              {/* Login Button */}
              <div
                onClick={toggleDarkMode}
                className={`w-[60px] h-[28px] rounded-full flex items-center cursor-pointer ${
                  darkMode ? "bg-white" : "bg-white"
                } transition-all duration-300`}
              >
                <div
                  className={`w-[30px] h-[30px] flex items-center justify-center font-[400] font-inter rounded-full shadow-md transform ${
                    darkMode
                      ? "translate-x-10 bg-[#F8832E]"
                      : "bg-black text-white translate-x-0"
                  } transition-all duration-300`}
                >
                  {!darkMode ? <p>F</p> : <p>C</p>}
                </div>
              </div>
              <img src="/landing/sun.png" alt="weather" />
              <p className="text-[#FFFFFF] font-[400] text-[24px] font-inter">
                Cloudy
              </p>
              <p className="font-[400] text-[12px] font-inter text-gray-400">
                Feels Like 26
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* articler */}
      {/* <div className="mt-10 p-4 border border-[#E1E1E14D] m-3 shadow-sm rounded-md">
        <h2 className="text-[20px] font-[700]">Articles &rsaquo;</h2>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
            <div>
              <div className="flex items-center space-x-2 border-b border-[#DA222833] pt-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f2f2/e546/612d128311cbb0dd7cc17d4cbab5c31a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTQywx5Mv6RCEOO4DScNlBTqT-t5yK8yOuGZ1Pp-7AEIqHQO6txUelOHfcWF0j6JWIdhWPJovCeO9LuBGdkjkDyBkDM5yM1SN0DhUnTZSr9XRTohuPDxYOJv8TK9b4tnpogWuPocpezqsDbB9RYnP6l02nnz5CvFvAoQq9BDHn2wqhTKNChprRpjctnAmO79b3RO8pd18SYV2P~8o9zZFiu1~DPm26~t0fQSq9VwJeUzrvVtv4cuasq0NLDq2Yub3FpFBI-3Am9sqItxQ9q-uxZj9viutQyAQ6AUmvOHFVqj16XvrXU0LIH7AvTnsfn2544JpAGnGtBOFbi52iHzPg__"
                  alt="img1"
                  className="rounded-md"
                />
                <p className="text-gray-900 text-sm leading-5">
                  Odisha Tigress Migrated To Bengal, Tranquilised After 21 Days
                </p>
              </div>{" "}
              <div className="flex items-center space-x-2 border-b border-[#DA222833] pt-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f2f2/e546/612d128311cbb0dd7cc17d4cbab5c31a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTQywx5Mv6RCEOO4DScNlBTqT-t5yK8yOuGZ1Pp-7AEIqHQO6txUelOHfcWF0j6JWIdhWPJovCeO9LuBGdkjkDyBkDM5yM1SN0DhUnTZSr9XRTohuPDxYOJv8TK9b4tnpogWuPocpezqsDbB9RYnP6l02nnz5CvFvAoQq9BDHn2wqhTKNChprRpjctnAmO79b3RO8pd18SYV2P~8o9zZFiu1~DPm26~t0fQSq9VwJeUzrvVtv4cuasq0NLDq2Yub3FpFBI-3Am9sqItxQ9q-uxZj9viutQyAQ6AUmvOHFVqj16XvrXU0LIH7AvTnsfn2544JpAGnGtBOFbi52iHzPg__"
                  alt="img1"
                  className="rounded-md"
                />
                <p className="text-gray-900 text-sm leading-5">
                  Odisha Tigress Migrated To Bengal, Tranquilised After 21 Days
                </p>
              </div>{" "}
              <div className="flex items-center space-x-2 border-b border-[#DA222833] pt-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f2f2/e546/612d128311cbb0dd7cc17d4cbab5c31a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTQywx5Mv6RCEOO4DScNlBTqT-t5yK8yOuGZ1Pp-7AEIqHQO6txUelOHfcWF0j6JWIdhWPJovCeO9LuBGdkjkDyBkDM5yM1SN0DhUnTZSr9XRTohuPDxYOJv8TK9b4tnpogWuPocpezqsDbB9RYnP6l02nnz5CvFvAoQq9BDHn2wqhTKNChprRpjctnAmO79b3RO8pd18SYV2P~8o9zZFiu1~DPm26~t0fQSq9VwJeUzrvVtv4cuasq0NLDq2Yub3FpFBI-3Am9sqItxQ9q-uxZj9viutQyAQ6AUmvOHFVqj16XvrXU0LIH7AvTnsfn2544JpAGnGtBOFbi52iHzPg__"
                  alt="img1"
                  className="rounded-md"
                />
                <p className="text-gray-900 text-sm leading-5">
                  Odisha Tigress Migrated To Bengal, Tranquilised After 21 Days
                </p>
              </div>{" "}
              <div className="flex items-center space-x-2 border-b border-[#DA222833] pt-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f2f2/e546/612d128311cbb0dd7cc17d4cbab5c31a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTQywx5Mv6RCEOO4DScNlBTqT-t5yK8yOuGZ1Pp-7AEIqHQO6txUelOHfcWF0j6JWIdhWPJovCeO9LuBGdkjkDyBkDM5yM1SN0DhUnTZSr9XRTohuPDxYOJv8TK9b4tnpogWuPocpezqsDbB9RYnP6l02nnz5CvFvAoQq9BDHn2wqhTKNChprRpjctnAmO79b3RO8pd18SYV2P~8o9zZFiu1~DPm26~t0fQSq9VwJeUzrvVtv4cuasq0NLDq2Yub3FpFBI-3Am9sqItxQ9q-uxZj9viutQyAQ6AUmvOHFVqj16XvrXU0LIH7AvTnsfn2544JpAGnGtBOFbi52iHzPg__"
                  alt="img1"
                  className="rounded-md"
                />
                <p className="text-gray-900 text-sm leading-5">
                  Odisha Tigress Migrated To Bengal, Tranquilised After 21 Days
                </p>
              </div>{" "}
              <div className="flex items-center space-x-2 border-b border-[#DA222833] pt-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f2f2/e546/612d128311cbb0dd7cc17d4cbab5c31a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTQywx5Mv6RCEOO4DScNlBTqT-t5yK8yOuGZ1Pp-7AEIqHQO6txUelOHfcWF0j6JWIdhWPJovCeO9LuBGdkjkDyBkDM5yM1SN0DhUnTZSr9XRTohuPDxYOJv8TK9b4tnpogWuPocpezqsDbB9RYnP6l02nnz5CvFvAoQq9BDHn2wqhTKNChprRpjctnAmO79b3RO8pd18SYV2P~8o9zZFiu1~DPm26~t0fQSq9VwJeUzrvVtv4cuasq0NLDq2Yub3FpFBI-3Am9sqItxQ9q-uxZj9viutQyAQ6AUmvOHFVqj16XvrXU0LIH7AvTnsfn2544JpAGnGtBOFbi52iHzPg__"
                  alt="img1"
                  className="rounded-md"
                />
                <p className="text-gray-900 text-sm leading-5">
                  Odisha Tigress Migrated To Bengal, Tranquilised After 21 Days
                </p>
              </div>
            </div>
 
            <div>
              <div className="flex items-center space-x-2 border-b border-[#DA222833] pt-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f2f2/e546/612d128311cbb0dd7cc17d4cbab5c31a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTQywx5Mv6RCEOO4DScNlBTqT-t5yK8yOuGZ1Pp-7AEIqHQO6txUelOHfcWF0j6JWIdhWPJovCeO9LuBGdkjkDyBkDM5yM1SN0DhUnTZSr9XRTohuPDxYOJv8TK9b4tnpogWuPocpezqsDbB9RYnP6l02nnz5CvFvAoQq9BDHn2wqhTKNChprRpjctnAmO79b3RO8pd18SYV2P~8o9zZFiu1~DPm26~t0fQSq9VwJeUzrvVtv4cuasq0NLDq2Yub3FpFBI-3Am9sqItxQ9q-uxZj9viutQyAQ6AUmvOHFVqj16XvrXU0LIH7AvTnsfn2544JpAGnGtBOFbi52iHzPg__"
                  alt="img1"
                  className="rounded-md"
                />
                <p className="text-gray-900 text-sm leading-5">
                  Odisha Tigress Migrated To Bengal, Tranquilised After 21 Days
                </p>
              </div>
              <div className="flex items-center space-x-2 border-b border-[#DA222833] pt-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f2f2/e546/612d128311cbb0dd7cc17d4cbab5c31a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTQywx5Mv6RCEOO4DScNlBTqT-t5yK8yOuGZ1Pp-7AEIqHQO6txUelOHfcWF0j6JWIdhWPJovCeO9LuBGdkjkDyBkDM5yM1SN0DhUnTZSr9XRTohuPDxYOJv8TK9b4tnpogWuPocpezqsDbB9RYnP6l02nnz5CvFvAoQq9BDHn2wqhTKNChprRpjctnAmO79b3RO8pd18SYV2P~8o9zZFiu1~DPm26~t0fQSq9VwJeUzrvVtv4cuasq0NLDq2Yub3FpFBI-3Am9sqItxQ9q-uxZj9viutQyAQ6AUmvOHFVqj16XvrXU0LIH7AvTnsfn2544JpAGnGtBOFbi52iHzPg__"
                  alt="img1"
                  className="rounded-md"
                />
                <p className="text-gray-900 text-sm leading-5">
                  Odisha Tigress Migrated To Bengal, Tranquilised After 21 Days
                </p>
              </div>{" "}
              <div className="flex items-center space-x-2 border-b border-[#DA222833] pt-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f2f2/e546/612d128311cbb0dd7cc17d4cbab5c31a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTQywx5Mv6RCEOO4DScNlBTqT-t5yK8yOuGZ1Pp-7AEIqHQO6txUelOHfcWF0j6JWIdhWPJovCeO9LuBGdkjkDyBkDM5yM1SN0DhUnTZSr9XRTohuPDxYOJv8TK9b4tnpogWuPocpezqsDbB9RYnP6l02nnz5CvFvAoQq9BDHn2wqhTKNChprRpjctnAmO79b3RO8pd18SYV2P~8o9zZFiu1~DPm26~t0fQSq9VwJeUzrvVtv4cuasq0NLDq2Yub3FpFBI-3Am9sqItxQ9q-uxZj9viutQyAQ6AUmvOHFVqj16XvrXU0LIH7AvTnsfn2544JpAGnGtBOFbi52iHzPg__"
                  alt="img1"
                  className="rounded-md"
                />
                <p className="text-gray-900 text-sm leading-5">
                  Odisha Tigress Migrated To Bengal, Tranquilised After 21 Days
                </p>
              </div>{" "}
              <div className="flex items-center space-x-2 border-b border-[#DA222833] pt-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f2f2/e546/612d128311cbb0dd7cc17d4cbab5c31a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTQywx5Mv6RCEOO4DScNlBTqT-t5yK8yOuGZ1Pp-7AEIqHQO6txUelOHfcWF0j6JWIdhWPJovCeO9LuBGdkjkDyBkDM5yM1SN0DhUnTZSr9XRTohuPDxYOJv8TK9b4tnpogWuPocpezqsDbB9RYnP6l02nnz5CvFvAoQq9BDHn2wqhTKNChprRpjctnAmO79b3RO8pd18SYV2P~8o9zZFiu1~DPm26~t0fQSq9VwJeUzrvVtv4cuasq0NLDq2Yub3FpFBI-3Am9sqItxQ9q-uxZj9viutQyAQ6AUmvOHFVqj16XvrXU0LIH7AvTnsfn2544JpAGnGtBOFbi52iHzPg__"
                  alt="img1"
                  className="rounded-md"
                />
                <p className="text-gray-900 text-sm leading-5">
                  Odisha Tigress Migrated To Bengal, Tranquilised After 21 Days
                </p>
              </div>{" "}
              <div className="flex items-center space-x-2 border-b border-[#DA222833] pt-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f2f2/e546/612d128311cbb0dd7cc17d4cbab5c31a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTQywx5Mv6RCEOO4DScNlBTqT-t5yK8yOuGZ1Pp-7AEIqHQO6txUelOHfcWF0j6JWIdhWPJovCeO9LuBGdkjkDyBkDM5yM1SN0DhUnTZSr9XRTohuPDxYOJv8TK9b4tnpogWuPocpezqsDbB9RYnP6l02nnz5CvFvAoQq9BDHn2wqhTKNChprRpjctnAmO79b3RO8pd18SYV2P~8o9zZFiu1~DPm26~t0fQSq9VwJeUzrvVtv4cuasq0NLDq2Yub3FpFBI-3Am9sqItxQ9q-uxZj9viutQyAQ6AUmvOHFVqj16XvrXU0LIH7AvTnsfn2544JpAGnGtBOFbi52iHzPg__"
                  alt="img1"
                  className="rounded-md"
                />
                <p className="text-gray-900 text-sm leading-5">
                  Odisha Tigress Migrated To Bengal, Tranquilised After 21 Days
                </p>
              </div>
            </div>
 
            <div>
              <div className="flex items-center space-x-2 border-b border-[#DA222833] pt-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f2f2/e546/612d128311cbb0dd7cc17d4cbab5c31a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTQywx5Mv6RCEOO4DScNlBTqT-t5yK8yOuGZ1Pp-7AEIqHQO6txUelOHfcWF0j6JWIdhWPJovCeO9LuBGdkjkDyBkDM5yM1SN0DhUnTZSr9XRTohuPDxYOJv8TK9b4tnpogWuPocpezqsDbB9RYnP6l02nnz5CvFvAoQq9BDHn2wqhTKNChprRpjctnAmO79b3RO8pd18SYV2P~8o9zZFiu1~DPm26~t0fQSq9VwJeUzrvVtv4cuasq0NLDq2Yub3FpFBI-3Am9sqItxQ9q-uxZj9viutQyAQ6AUmvOHFVqj16XvrXU0LIH7AvTnsfn2544JpAGnGtBOFbi52iHzPg__"
                  alt="img1"
                  className="rounded-md"
                />
                <p className="text-gray-900 text-sm leading-5">
                  Odisha Tigress Migrated To Bengal, Tranquilised After 21 Days
                </p>
              </div>{" "}
              <div className="flex items-center space-x-2 border-b border-[#DA222833] pt-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f2f2/e546/612d128311cbb0dd7cc17d4cbab5c31a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTQywx5Mv6RCEOO4DScNlBTqT-t5yK8yOuGZ1Pp-7AEIqHQO6txUelOHfcWF0j6JWIdhWPJovCeO9LuBGdkjkDyBkDM5yM1SN0DhUnTZSr9XRTohuPDxYOJv8TK9b4tnpogWuPocpezqsDbB9RYnP6l02nnz5CvFvAoQq9BDHn2wqhTKNChprRpjctnAmO79b3RO8pd18SYV2P~8o9zZFiu1~DPm26~t0fQSq9VwJeUzrvVtv4cuasq0NLDq2Yub3FpFBI-3Am9sqItxQ9q-uxZj9viutQyAQ6AUmvOHFVqj16XvrXU0LIH7AvTnsfn2544JpAGnGtBOFbi52iHzPg__"
                  alt="img1"
                  className="rounded-md"
                />
                <p className="text-gray-900 text-sm leading-5">
                  Odisha Tigress Migrated To Bengal, Tranquilised After 21 Days
                </p>
              </div>{" "}
              <div className="flex items-center space-x-2 border-b border-[#DA222833] pt-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f2f2/e546/612d128311cbb0dd7cc17d4cbab5c31a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTQywx5Mv6RCEOO4DScNlBTqT-t5yK8yOuGZ1Pp-7AEIqHQO6txUelOHfcWF0j6JWIdhWPJovCeO9LuBGdkjkDyBkDM5yM1SN0DhUnTZSr9XRTohuPDxYOJv8TK9b4tnpogWuPocpezqsDbB9RYnP6l02nnz5CvFvAoQq9BDHn2wqhTKNChprRpjctnAmO79b3RO8pd18SYV2P~8o9zZFiu1~DPm26~t0fQSq9VwJeUzrvVtv4cuasq0NLDq2Yub3FpFBI-3Am9sqItxQ9q-uxZj9viutQyAQ6AUmvOHFVqj16XvrXU0LIH7AvTnsfn2544JpAGnGtBOFbi52iHzPg__"
                  alt="img1"
                  className="rounded-md"
                />
                <p className="text-gray-900 text-sm leading-5">
                  Odisha Tigress Migrated To Bengal, Tranquilised After 21 Days
                </p>
              </div>{" "}
              <div className="flex items-center space-x-2 border-b border-[#DA222833] pt-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f2f2/e546/612d128311cbb0dd7cc17d4cbab5c31a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTQywx5Mv6RCEOO4DScNlBTqT-t5yK8yOuGZ1Pp-7AEIqHQO6txUelOHfcWF0j6JWIdhWPJovCeO9LuBGdkjkDyBkDM5yM1SN0DhUnTZSr9XRTohuPDxYOJv8TK9b4tnpogWuPocpezqsDbB9RYnP6l02nnz5CvFvAoQq9BDHn2wqhTKNChprRpjctnAmO79b3RO8pd18SYV2P~8o9zZFiu1~DPm26~t0fQSq9VwJeUzrvVtv4cuasq0NLDq2Yub3FpFBI-3Am9sqItxQ9q-uxZj9viutQyAQ6AUmvOHFVqj16XvrXU0LIH7AvTnsfn2544JpAGnGtBOFbi52iHzPg__"
                  alt="img1"
                  className="rounded-md"
                />
                <p className="text-gray-900 text-sm leading-5">
                  Odisha Tigress Migrated To Bengal, Tranquilised After 21 Days
                </p>
              </div>{" "}
              <div className="flex items-center space-x-2 border-b border-[#DA222833] pt-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f2f2/e546/612d128311cbb0dd7cc17d4cbab5c31a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTQywx5Mv6RCEOO4DScNlBTqT-t5yK8yOuGZ1Pp-7AEIqHQO6txUelOHfcWF0j6JWIdhWPJovCeO9LuBGdkjkDyBkDM5yM1SN0DhUnTZSr9XRTohuPDxYOJv8TK9b4tnpogWuPocpezqsDbB9RYnP6l02nnz5CvFvAoQq9BDHn2wqhTKNChprRpjctnAmO79b3RO8pd18SYV2P~8o9zZFiu1~DPm26~t0fQSq9VwJeUzrvVtv4cuasq0NLDq2Yub3FpFBI-3Am9sqItxQ9q-uxZj9viutQyAQ6AUmvOHFVqj16XvrXU0LIH7AvTnsfn2544JpAGnGtBOFbi52iHzPg__"
                  alt="img1"
                  className="rounded-md"
                />
                <p className="text-gray-900 text-sm leading-5">
                  Odisha Tigress Migrated To Bengal, Tranquilised After 21 Days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* technologies */}

      <div className="mb-8 p-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center mb-5">
            <h2 className="text-[32px] font-[600] font-notoBengali">
              Technologies
            </h2>
            <i class="fa-solid fa-chevron-right mt-1 ms-1"></i>
          </div>
          {/* <div className="flex space-x-2">
                <img src="/prev.png" alt="prev" />
                <img src="/next.png" alt="next" />
              </div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TechNewsData.map((tech) => (
            <div className="border border-[#E31837] rounded-lg overflow-hidden hover:shadow-[0px_0px_30px_0px_#DA22284D] transition-all duration-300">
              {/* Image Section */}
              <div>
                <img
                  src={tech.img} // Replace this with your image URL
                  alt="Card"
                  className="w-full p-[6px] rounded-[10px]"
                />
              </div>

              {/* Description Section */}
              <div className="p-4 bg-white">
                <p className="text-[16px] font-[600] font-notoBengali text-[#000000]">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sports */}

      <div className="mb-8 p-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center mb-5">
            <h2 className="text-[32px] font-[600] font-notoBengali">Sports</h2>
            <i class="fa-solid fa-chevron-right mt-1 ms-1"></i>
          </div>
          {/* <div className="flex space-x-2">
                <img src="/prev.png" alt="prev" />
                <img src="/next.png" alt="next" />
              </div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SportsData.map((tech) => (
            <div className="border border-[#E31837] rounded-lg overflow-hidden hover:shadow-[0px_0px_30px_0px_#DA22284D] transition-all duration-300">
              {/* Image Section */}
              <div>
                <img
                  src={tech.img} // Replace this with your image URL
                  alt="Card"
                  className="w-full p-[6px] rounded-[10px]"
                />
              </div>

              {/* Description Section */}
              <div className="p-4 bg-white">
                <p className="text-[16px] font-[600] font-notoBengali text-[#000000]">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Articles */}

      <div className="mb-8 p-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center mb-5">
            <h2 className="text-[32px] font-[600] font-notoBengali">
              Articles
            </h2>
            <i class="fa-solid fa-chevron-right mt-1 ms-1"></i>
          </div>
          {/* <div className="flex space-x-2">
                <img src="/prev.png" alt="prev" />
                <img src="/next.png" alt="next" />
              </div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ArticleData.map((tech) => (
            <div className="border border-[#E31837] rounded-lg overflow-hidden hover:shadow-[0px_0px_30px_0px_#DA22284D] transition-all duration-300">
              {/* Image Section */}
              <div>
                <img
                  src={tech.img} // Replace this with your image URL
                  alt="Card"
                  className="w-full p-[6px] rounded-[10px]"
                />
              </div>

              {/* Description Section */}
              <div className="p-4 bg-white">
                <p className="text-[16px] font-[600] font-notoBengali text-[#000000]">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* photos */}

      <div className="mt-10 p-4">
        <div>
          <div className="flex items-center mb-5">
            <h2 className="text-[32px] font-[600] font-notoBengali">Photos</h2>
            <i class="fa-solid fa-chevron-right ms-1"></i>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 mt-4">
          <div className="col-span-12 md:col-span-6 rounded-lg overflow-hidden">
            {/* Image Section */}
            <div className="grid grid-cols-2 space-x-5 space-y-4 p-3">
              <div className="border shadow-sm border-[#DA2228] rounded-xl hover:shadow-[0px_0px_30px_0px_#DA22284D] transition-all duration-300">
                <img
                  src="/landing/photo1.png"
                  alt="Card"
                  className="w-full p-[6px] rounded-[10px]"
                />
                <p className="p-3 text-[#000000] text-[19px] font-[500] font-notoBengali">
                  In Pics: Gulzar, Naseeruddin Shah, Boman Irani Pay Their Last
                  Respects To Shyam Benegal
                </p>
              </div>
              <div className="border shadow-sm border-[#DA2228] rounded-xl hover:shadow-[0px_0px_30px_0px_#DA22284D] transition-all duration-300">
                <img
                  src="/landing/photo2.png"
                  alt="Card"
                  className="w-full p-[6px] rounded-[10px]"
                />
                <p className="p-3 text-[#000000] text-[19px] font-[500] font-notoBengali">
                  In Pics: Gulzar, Naseeruddin Shah, Boman Irani Pay Their Last
                  Respects To Shyam Benegal
                </p>
              </div>
              <div className="border shadow-sm border-[#DA2228] rounded-xl hover:shadow-[0px_0px_30px_0px_#DA22284D] transition-all duration-300">
                <img
                  src="/landing/photo3.png"
                  alt="Card"
                  className="w-full p-[6px] rounded-[10px]"
                />
                <p className="p-3 text-[#000000] text-[19px] font-[500] font-notoBengali">
                  In Pics: Gulzar, Naseeruddin Shah, Boman Irani Pay Their Last
                  Respects To Shyam Benegal
                </p>
              </div>
              <div className="border shadow-sm border-[#DA2228] rounded-xl hover:shadow-[0px_0px_30px_0px_#DA22284D] transition-all duration-300">
                <img
                  src="/landing/photo4.png"
                  alt="Card"
                  className="w-full p-[6px] rounded-[10px]"
                />
                <p className="p-3 text-[#000000] text-[19px] font-[500] font-notoBengali">
                  In Pics: Gulzar, Naseeruddin Shah, Boman Irani Pay Their Last
                  Respects To Shyam Benegal
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 rounded-lg overflow-hidden ">
            {/* Image Section */}
            <div className="grid grid-cols-2 space-x-5 space-y-4 p-3">
              <div className="border shadow-sm border-[#DA2228] rounded-xl hover:shadow-[0px_0px_30px_0px_#DA22284D] transition-all duration-300">
                <img
                  src="/landing/photo5.png"
                  alt="Card"
                  className="w-full p-[6px] rounded-[10px]"
                />
                <p className="p-3 text-[#000000] text-[19px] font-[500] font-notoBengali">
                  In Pics: Gulzar, Naseeruddin Shah, Boman Irani Pay Their Last
                  Respects To Shyam Benegal
                </p>
              </div>
              <div className="border shadow-sm border-[#DA2228] rounded-xl hover:shadow-[0px_0px_30px_0px_#DA22284D] transition-all duration-300">
                <img
                  src="/landing/photo6.png"
                  alt="Card"
                  className="w-full p-[6px] rounded-[10px]"
                />
                <p className="p-3 text-[#000000] text-[19px] font-[500] font-notoBengali">
                  In Pics: Gulzar, Naseeruddin Shah, Boman Irani Pay Their Last
                  Respects To Shyam Benegal
                </p>
              </div>
              <div className="border shadow-sm border-[#DA2228] rounded-xl hover:shadow-[0px_0px_30px_0px_#DA22284D] transition-all duration-300">
                <img
                  src="/landing/photo7.png"
                  alt="Card"
                  className="w-full p-[6px] rounded-[10px]"
                />
                <p className="p-3 text-[#000000] text-[19px] font-[500] font-notoBengali">
                  In Pics: Gulzar, Naseeruddin Shah, Boman Irani Pay Their Last
                  Respects To Shyam Benegal
                </p>
              </div>
              <div className="border shadow-sm border-[#DA2228] rounded-xl hover:shadow-[0px_0px_30px_0px_#DA22284D] transition-all duration-300">
                <img
                  src="/landing/photo8.png"
                  alt="Card"
                  className="w-full p-[6px] rounded-[10px]"
                />
                <p className="p-3 text-[#000000] text-[19px] font-[500] font-notoBengali">
                  In Pics: Gulzar, Naseeruddin Shah, Boman Irani Pay Their Last
                  Respects To Shyam Benegal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More News */}
      {/* <div className="mt-10 p-4 border border-[#E1E1E14D] m-3 shadow-sm rounded-md">
        <h2 className="text-[20px] font-[700]">More News &rsaquo;</h2>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
            <div>
              <div className="flex items-start space-x-2 border-b pb-5 border-[#DA222833] pt-3">
                <div className="text-gray-500 mt-1">◯</div>
                <p className="text-gray-900 text-sm leading-5">
                  AAP Alleges 'Operation Lotus' By BJP To Get Names Struck Off
                  Voter List
                </p>
              </div>
              <div className="flex items-start space-x-2 border-b pb-5 border-[#DA222833] pt-3">
                <div className="text-gray-500 mt-1">◯</div>
                <p className="text-gray-900 text-sm leading-5">
                  German President Dissolves Parliament For February 23 Snap
                  Elections
                </p>
              </div>
              <div className="flex items-start space-x-2 border-b pb-5 border-[#DA222833] pt-3">
                <div className="text-gray-500 mt-1">◯</div>
                <p className="text-gray-900 text-sm leading-5">
                  BJP Got Over ₹2,600 Crore Donations In 2023-24, Congress ₹281
                  Crore
                </p>
              </div>
              <div className="flex items-start space-x-2 border-b pb-5 border-[#DA222833] pt-3">
                <div className="text-gray-500 mt-1">◯</div>
                <p className="text-gray-900 text-sm leading-5">
                  Unprecedented Compared To Others: Election Commission Shares
                  Lok Sabha Polls Data
                </p>
              </div>
            </div>
 
            <div>
              <div className="flex items-start space-x-2 border-b pb-5 border-[#DA222833] pt-3">
                <div className="text-gray-500 mt-1">◯</div>
                <p className="text-gray-900 text-sm leading-5">
                  "Misplaced, Misleading": Delhi Official On Arvind Kejriwal's
                  "Arrest" Claim
                </p>
              </div>
              <div className="flex items-start space-x-2 border-b pb-5 border-[#DA222833] pt-3">
                <div className="text-gray-500 mt-1">◯</div>
                <p className="text-gray-900 text-sm leading-5">
                  National Parties Bag Over 63% Of Vote Share In 2024 Lok Sabha
                  Polls
                </p>
              </div>
              <div className="flex items-start space-x-2 border-b pb-5 border-[#DA222833] pt-3">
                <div className="text-gray-500 mt-1">◯</div>
                <p className="text-gray-900 text-sm leading-5">
                  BJP Got ₹2,600-Crore Donations In 2023-24, Congress ₹281
                  Crore: Report
                </p>
              </div>
              <div className="flex items-start space-x-2 border-b pb-5 border-[#DA222833] pt-3">
                <div className="text-gray-500 mt-1">◯</div>
                <p className="text-gray-900 text-sm leading-5">
                  AAP Says Will Ask INDIA Bloc To Remove Congress From Alliance
                  If...
                </p>
              </div>
            </div>
 
            <div>
              <div className="flex items-start space-x-2 border-b pb-5 border-[#DA222833] pt-3">
                <div className="text-gray-500 mt-1">◯</div>
                <p className="text-gray-900 text-sm leading-5">
                  Lt Governor Orders Probe Into AAP's Schemes, Arvind Kejriwal
                  Poses Question
                </p>
              </div>
              <div className="flex items-start space-x-2 border-b pb-5 border-[#DA222833] pt-3">
                <div className="text-gray-500 mt-1">◯</div>
                <p className="text-gray-900 text-sm leading-5">
                  86% Of Candidates Who Contested 2024 Lok Sabha Polls Lost
                  Deposit: Election Body
                </p>
              </div>
              <div className="flex items-start space-x-2 border-b pb-5 border-[#DA222833] pt-3">
                <div className="text-gray-500 mt-1">◯</div>
                <p className="text-gray-900 text-sm leading-5">
                  Reshuffle In Delhi Police Ahead Of Assembly Elections
                </p>
              </div>
              <div className="flex items-start space-x-2 border-b pb-5 border-[#DA222833] pt-3">
                <div className="text-gray-500 mt-1">◯</div>
                <p className="text-gray-900 text-sm leading-5">
                  'BJP May Make Ex MP Parvesh Verma Its Chief Minister Face':
                  Arvind Kejriwal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* footer */}
      <Footer2 />
    </div>
  );
};

export default HeadlineNavbar;
