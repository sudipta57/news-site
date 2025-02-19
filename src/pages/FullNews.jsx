import { useEffect, useState } from "react";
import "../App.css"; // Import your custom CSS
import Navbar2 from "../components/Navbar2";
import Footer2 from "../components/Footer2";

const FullNews = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark", !darkMode); // Toggle dark mode on the body
  };
  return (
    <div className="max-w-[1600px] mx-auto font-notoBengali">
      <Navbar2 />
      {/* End Headlines Section */}

      {/* main content */}

      <div className="grid grid-cols-4 gap-4 p-4">
        {/* Left Section */}
        <div className="col-span-4 md:col-span-3 border shadow-sm rounded-e-md p-4">
          {/* heading section */}
          <div className="mb-6">
            <h1 className="text-[#363636] text-[36px] font-[800]">
              ₹48 crore per day! Indian CEO Jagdeep Singh’s per day income is
              more than annual revenue of large corporations
            </h1>
            <div className="bg-[#FDDE861A] my-8 p-2">
              <p className="text-[#212121] text-[20px] font-[400] leading-[31.88px]">
                Quantumscape CEO Jagdeep Singh, is the highest-paid employee
                globally with an annual salary of ₹17,500 crore. His success
                reflects the growing influence of Indian talent in the EV
                sector, showcasing the potential for innovation in India's
              </p>
            </div>
          </div>

          <div>
            <p className="text-[#363636] text-[16px] font-[100]">
              Written By: <span className="font-[500]"> Sayantani</span>
            </p>
            <p className="text-[#363636] text-[16px] font-[100] mt-3">
              Updated :{" "}
              <span className="font-[500]">4 Jan 2025, 08:44 AM IST</span>
            </p>
            <img
              src="/landing/full-news.png"
              alt="news"
              className="w-full my-6 rounded-md"
            />
            <p className="text-[#363636] text-[16px] font-[100]">
              Clicked By:{" "}
              <span className="font-[500] text-[#4640DE]">Aakash Kumar</span>
            </p>
            <p className="text-[#363636] text-[16px] font-[100] mt-3">
              Edited By:{" "}
              <span className="font-[500] text-[#4640DE]">Hritika Gupta</span>
            </p>

            <p className="text-[16px] font-[100] mt-4">
              <span className="text-[16px] font-[600]">
                Image Description:{" "}
              </span>
              The image shows two individuals exchanging a clipboard over a
              small, round table. One person's hands are handing
              <span className="font-[500] text-[#4640DE] hover:underline">
                {" "}
                View More
              </span>
            </p>
            <p className="text-[#616161] text-[20px] font-[400] mt-10">
              Quantumscape CEO Jagdeep Singh’s exceptional earnings not only
              highlight his personal success but also reflect the growing
              influence of Indian talent on the global stage.
            </p>
            <p className="my-3 mt-8 text-[30px] font-[400]">
              Indian CEO Jagdeep Singh has emerged as the highest-paid employee
              globally, earning an astonishing annual salary of ₹17,500 crore.
              This figure translates to an average daily income of ₹48 crore,
              surpassing the annual revenue of many large corporations and
              making 'Singh' a ‘King’.
            </p>
            <p className="my-3 text-[30px] font-[400]">
              Quantumscape founder and ex-CEO Jagdeep Singh v 's exceptional
              earnings not highlight his personal success but also reflect the
              growing influence of Indian talent on the global stage.
            </p>
          </div>
          <div className="bg-[#DA22281A] p-3 border-l-4 border-[#DA2228] my-5">
            <p className="max-w-xl">
              <strong className="text-[#616161]">Also Read | </strong>
              Arvind Kejriwal: ₹18,000 salary for priests if AAP wins Delhi
              Election 2025{" "}
              <span className="text-[#DA2228] font-bold">&gt;</span>
            </p>
          </div>
          <div>
            <h1 className="text-[36px] font-[800]">
              Jagdeep Singh's Journey to Unprecedented Success
            </h1>
            <p className="my-3 text-[30px] font-[400]">
              <a href="" className="underline">
                Jagdeep Singh is the former CEO and founder of Quantumscape{" "}
                {"  "}
              </a>
              Pioneering company at the forefront of electric vehicle (EV)
              battery technology. His journey to this extraordinary position
              began with a solid educational foundation, having earned a B.Tech
              from Stanford University and an MBA from the University of
            </p>
            <p className="text-[30px] font-[400]">
              Before establishing Quantumscape in 2010, Jagdeep Singh spent over
              a decade honing his skills in various roles across multiple
              companies. His breakthrough came when he recognised the potential
              for innovation in battery technology, leading him to create a
              company that is now crucial to the future of electric vehicles.
            </p>
          </div>
          <div className="bg-[#DA22281A] p-3 border-l-4 border-[#DA2228] my-5">
            <p className="max-w-xl">
              <strong className="text-[#616161]">Also Read | </strong>
              Arvind Kejriwal: ₹18,000 salary for priests if AAP wins Delhi
              Election 2025{" "}
              <span className="text-[#DA2228] font-bold">&gt;</span>
            </p>
          </div>
          <div>
            <p className="my-3 text-[30px] font-[400]">
              <a href="" className="underline">
                Quantumscape{"  "}
              </a>
              has quickly risen to prominence, attracting significant from
              industry giants such as Bill Gates and Volkswagen. The company
              focuses on the news developing next-generation solid-state
              batteries that promise to revolutionise electric .
            </p>
            <p className="my-3 text-[30px] font-[400]">
              Jagdeep Singh's leadership has positioned Quantumscape as a leader
              in this rapidly growing sector, contributing to his remarkable
              salary package, which includes stock options potentially valued at
              $2.3 billion.
            </p>
            <p className="my-3 text-[30px] font-[400]">
              Jagdeep Singh gave up the CEO position of Quantumscape to Siva
              Sivaram on 16 February 2024. He now is recognised as the CEO of
              ‘Stealth Startup’. Notably, Jagdeep Singh's X (formerly Twitter)
              handle reads ‘@startupjag’.
            </p>
            <div className="bg-[#DA22281A] p-3 border-l-4 border-[#DA2228] my-5">
              <p className="max-w-xl">
                <strong className="text-[#616161]">Also Read | </strong>
                Arvind Kejriwal: ₹18,000 salary for priests if AAP wins Delhi
                Election 2025{" "}
                <span className="text-[#DA2228] font-bold">&gt;</span>
              </p>
            </div>
            <p className="my-3 text-[30px] font-[400]">
              As India continues its transformation into a global
              <a href="" className=" underline">
                {"  "}
                economic{"  "}
              </a>
              powerhouse, figure Jagdeep Singh remind us of the limitless
              possibilities that lie ahead. With his remarkable journey from
              employee to the highest-paid employee in the world, Singh embodies
              the spirit of entrepreneurship and serves as a beacon of hope for
              those who dare to dream.
            </p>
            <p className=" text-[30px] font-[400]">
              His success is not just about personal wealth; it reflects the
              potential for innovation and excellence within India's dynamic
              economic landscape.
            </p>
          </div>

          {/* next news */}
          <div className="flex items-center justify-center w-full mt-4">
            <div className="border-t border-black flex-grow"></div>
            <span className="mx-4 text-[12px] font-[400] text-black uppercase">
              Read Next Story
            </span>
            <div className="border-t border-black flex-grow"></div>
          </div>
          {/* heading section */}
          <div className="mb-6 mt-4">
            <h1 className="text-[#363636] text-[36px] font-[800]">
              Jamnagar Refinery, world’s largest, turns 25: Mukesh Ambani
              highlights role in future growth and nature conservation
            </h1>
            <div className="bg-[#FDDE861A] my-8 p-2">
              <p className="text-[#212121] text-[20px] font-[400] leading-[31.88px]">
                During Jamnagar refinery's 25th anniversary, Mukesh Ambani
                emphasized its importance for future growth, mentioning the
                establishment of AI infrastructure and the end of the year
                Vantara initiative to protect wildlife. its employees and the
                coming generations. 
              </p>
            </div>
          </div>

          <div>
            <p className="text-[#363636] text-[16px] font-[100]">
              Written By: <span className="font-[500]">Riya R Alex</span>
            </p>
            <p className="text-[#363636] text-[16px] font-[100] mt-3">
              Published :{" "}
              <span className="font-[500]">4 Jan 2025, 11:01 AM IST</span>
            </p>
            <img
              src="/landing/full-news.png"
              alt="news"
              className="w-full my-6 rounded-md"
            />
            <p className="text-[#363636] text-[16px] font-[100]">
              Clicked By:{" "}
              <span className="font-[500] text-[#4640DE]">Aakash Kumar</span>
            </p>
            <p className="text-[#363636] text-[16px] font-[100] mt-3">
              Edited By:{" "}
              <span className="font-[500] text-[#4640DE]">Hritika Gupta</span>
            </p>

            <p className="text-[16px] font-[100] mt-4">
              <span className="text-[16px] font-[600]">
                Image Description:{" "}
              </span>
              The image shows two individuals exchanging a clipboard over a
              small, round table. One person's hands are handing
              <span className="font-[500] text-[#4640DE] hover:underline">
                {" "}
                View More
              </span>
            </p>
            <p className="text-[#616161] text-[20px] font-[400] mt-10">
              Quantumscape CEO Jagdeep Singh’s exceptional earnings not only
              highlight his personal success but also reflect the growing
              influence of Indian talent on the global stage.
            </p>
            <p className="my-3 mt-8 text-[30px] font-[400]">
              Mukesh Ambani, Chairman and Managing Director of Reliance
              Industries Ltd, stated that Jamnagar, the world's largest
              refinery, is the platform for the long-term growth for Reliance,
              its employees and the coming generations. Ambani was addressing
              employees in Jamnagar during the 25th-anniversary celebrations of
              the flagship .
            </p>
          </div>
          <div>
            <p className="my-3 text-[30px] font-[400]">
              <a href="" className="underline">
                Jamnagar {"  "}
              </a>
              is not only the best oil refinery in the world, but it also has
              the biggest {"  "}
              {/* </p>
            <p className="text-[30px] font-[400]"> */}
              gigafactory in the world, the biggest solar energy, and the
              world's artificial intelligence infrastructure. Besides, the
              digital factory will also be in Jamnagar,"
            </p>
            <p className="text-[30px] font-[400]">
              "It sets a platform, which will be a platform for growth for the
              next many decades, for all of you, for your children," he added.
            </p>
          </div>
          <div className="bg-[#DA22281A] p-3 border-l-4 border-[#DA2228] my-5">
            <p className="max-w-xl">
              <strong className="text-[#616161]">Also Read | </strong>
              Businessman scraps Dubai New Year plan to attend Ambani Jamnagar
              <span className="text-[#DA2228] font-bold">&gt;</span>
            </p>
          </div>
          <div>
            <p className="my-3 text-[30px] font-[400]">
              <a href="" className="underline">
                Reliance{"  "}
              </a>
              is establishing an AI infrastructure in Jamnagar, expected to be
              complet{"  "}
              {/* </p>
            <p className="my-3 text-[30px] font-[400]"> */}
              24 months. Speaking at the same event, Akash Ambani, the Chairman
              of Reliance Jio Infocomm Limited (RJIL) said, “The AI
              infrastructure we are beginning to build in Jamnagar will not only
              make the city a leader in AI technology but will position it among
              the world’s top-ranked cities. We've already started constructing
              this in Jamnagar, and we plan to finish it in true Jamnagar style
              — fast and efficiently, as we always have, within 24 months.”
            </p>
          </div>
        </div>
        {/* Right Section */}
        <div className="col-span-4 md:col-span-1 p-6 max-w-4xl mx-auto space-y-8">
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
          <div className="border rounded-[4px]">
            <h2 className="text-[#616161] font-[14px] text-[400] font-inter text-center py-3">
              Advertisement
            </h2>
            <div className="rounded-lg overflow-hidden relative p-4 pt-0">
              <img
                src="/landing/ad3.png"
                alt="Advertisement"
                className="w-full h-full object-cover"
              />
              {/* <div className="flex absolute right-2 top-2 space-x-2">
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
              </div> */}
            </div>
          </div>

          {/* Advertisement */}
          <div className="border rounded-[4px]">
            <h2 className="text-[#616161] font-[14px] text-[400] font-inter text-center py-3">
              Advertisement
            </h2>
            <div className="rounded-lg overflow-hidden relative p-4 pt-0">
              <img
                src="/landing/ad4.png"
                alt="Advertisement"
                className="w-full h-full object-cover"
              />
              {/* <div className="flex absolute right-2 top-2 space-x-2">
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
              </div> */}
            </div>
          </div>
          {/* Advertisement */}
          <div className="border rounded-[4px]">
            <h2 className="text-[#616161] font-[14px] text-[400] font-inter text-center py-3">
              Advertisement
            </h2>
            <div className="rounded-lg overflow-hidden relative p-4 pt-0">
              <img
                src="/landing/ad5.png"
                alt="Advertisement"
                className="w-full h-full object-cover"
              />
              {/* <div className="flex absolute right-2 top-2 space-x-2">
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
              </div> */}
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

      {/* footer */}
      <Footer2 />
    </div>
  );
};

export default FullNews;
