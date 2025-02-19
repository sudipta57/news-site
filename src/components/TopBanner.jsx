import React from "react";

const TopBanner = () => {
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
      {/* top Sliding */}
      <div className="relative bg-gray-100 py-4">
        <div className="flex items-center space-x-2">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200"
          >
            {"<"}
          </button>

          {/* Tags Slider */}
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth px-8"
          >
            {[
              { id: 1, label: "#Food", bg: "bg-yellow-500" },
              { id: 2, label: "#Animal", bg: "bg-green-500" },
              { id: 3, label: "#Car", bg: "bg-orange-500" },
              { id: 4, label: "#Sport", bg: "bg-blue-500" },
              { id: 5, label: "#Music", bg: "bg-yellow-600" },
              { id: 6, label: "#Technology", bg: "bg-purple-500" },
              { id: 7, label: "#Abstract", bg: "bg-pink-500" },
              { id: 8, label: "#Car", bg: "bg-orange-500" },
              { id: 9, label: "#Sport", bg: "bg-blue-500" },
              { id: 10, label: "#Music", bg: "bg-yellow-600" },
              { id: 11, label: "#Food", bg: "bg-yellow-500" },
            ].map((tag) => (
              <div
                key={tag.id}
                className={`${tag.bg} min-w-[100px] h-16 rounded-full flex items-center justify-center shadow-md`}
              >
                <span className="text-white font-semibold">{tag.label}</span>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200"
          >
            {">"}
          </button>
        </div>
      </div>
      {/* end top sliding */}
    </div>
  );
};

export default TopBanner;
