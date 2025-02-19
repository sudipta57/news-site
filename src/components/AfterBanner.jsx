import React from "react";
const AfterBanner = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <div>
      {/* sliding section*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Side - Two Cards in Same Line */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/landing/left-img-1.png"
                alt="Card Image"
                className=" object-cover"
              />
            </div>

            <div className="bg-url[('/test/left2.png)] shadow-md rounded-lg overflow-hidden">
              <img
                src="/landing/left-img-2.png"
                alt="Card Image"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Sliding Section */}
          <div className="lg:col-span-2 relative">
            <button
              onClick={() => scroll("left")}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300 z-10"
            >
              {"<"}
            </button>
            <div
              ref={scrollRef}
              className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ maxWidth: "400px" }} // Limit the width of the sliding section
            >
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg min-w-[300px] overflow-hidden"
                >
                  <img
                    src={`/landing/slider1.png`}
                    alt={`Slide ${index + 1}`}
                    className=" object-cover"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll("right")}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300 z-10"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
      {/* end section */}
    </div>
  );
};

export default AfterBanner;
