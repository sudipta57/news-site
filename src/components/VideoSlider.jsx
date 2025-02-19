import { useState } from "react";

const VideoSlider = () => {
  // Dummy data for the slider cards
  const cards = [
    {
      title: "5 Reasons Why You Should Wrap Your Hands",
      description:
        "So, you finally went to your first boxing class and learned the basics of the sport. You also learned that it’s recommended to wrap your hands before putting on the gloves.",
      image:
        "https://s3-alpha-sig.figma.com/img/6261/8ea1/55008dccd2b071e799822f639b8a79e8?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UEvRtVSCXFhKt4Klo75SaZZeaAZhNsZT0bUizGxzHOOMgEP66poMG0TRaH8vx0Dikvt6WtUl5dMv5R0vHZUOGyob1eLxpekNBUrY~HgQfSlrJ0W1kUYcqRJzxwNVU8K1nf4gBVerBXinjLs-CexRFzdWeCpi5gYQDYoafRyAMTtLp89jncCacVHJz2zElSRqFND~ptmv0DAvYTZczBJDYAepcq0ZhEqhm9p4HmIABfWnvqdicKA75TVk31YjARhb6tX9u1aci-fK-TuHtKKq4tqisT6xTO4zQyThEXZRSftOQJYIA0yS9IqGONTPUgDIoTCwwMz-tglQNtvP6k7HWg__",
    },
    {
      title: "Music Genre Classification With Python",
      description:
        "A guide to analyzing audio/music signals in Python — Music is like a mirror, and it tells people a lot about who you are and what you care about.",
      image:
        "https://s3-alpha-sig.figma.com/img/48c3/5599/0e0b42a55b6294e1746696582c707405?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tnm7QjoRe2v7D3aPS0tmz3yO6JihiK7tbODZUxAeBfKHslAaD9rCwzi6~pgDNVFrTApcrDXWvj01ElozsmFO71JHUUtfLWlmIq81pPx19jVGhFGwpyA7THhYRlFgxMZzx1bay~0DnuGX8OVDJQ1ZT~XcDkLzAM6zZ5ox64qYhNuAJT43WF0Qy1CT~9aBlx-BhHGIqVczau9yyurqKQGvsT1hYRI4~FXyfy66NYzafk1Zt9MIHiLeeSHuZiRKIkRLSdwWC~7tO4qxMSWNKYVNVlffbu3YSLOiFUVLqxc1tavEEmJdQNN7QliZkuoJWr0TClMTJmKeGOj92yPR1IVOcA__",
    },
    {
      title: "Healthy Breakfast Ideas",
      description:
        "Discover easy and healthy breakfast ideas that keep you energized throughout the day. From avocado toast to smoothie bowls.",
      image:
        "https://s3-alpha-sig.figma.com/img/7533/35b1/0c86fa95528cea3bb49e74330d276776?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J-xdGQq5Ydqk16C6bfCZ3ARKMdBcAx7RyvyQJtaUT4tYfhpIeh94xlApD~~ZKozsmFVh8iKbXhgVqGCb9~0qUw6aq1oHVbA6ta3lLrD~nEA9GE6tilPFOU6XR7t0ykrrD0pWnxyhDQm1BzNFaj~t7R7FCtpg8LPKAaNxHb-qijwud11Cfm2D-u9JGiarGznKmS-qtiMTYXd6sCVINhjyqNCSp7pf6lDCLHudCdXx0cyZDw6orgz7WkUqb8JhEvgyTJW-TDXA6ZoaFmfJ1t8ImQ-MFfJKh7TnQA2uVebmfI5yfJUC0U~RR4TZxicP8766FwzLI-qbC9V4UGYJhse1Nw__",
    },
    {
      title: "How to Set Up a Minimalist Workspace",
      description:
        "Transform your workspace into a minimalist's dream with simple tips and tricks. Create a productive and clutter-free environment.",
      image:
        "https://s3-alpha-sig.figma.com/img/eecd/b98c/904886bd6452747c84f1bbd6648e6805?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MGUl18Pbl74op7pTrlgniwIWL7NH481zLVpsB3mH0gy5wSx~Afvb-pLWdoINc2I8V2A6tndF6-Kxsjaoe2LSv~9vsrPetwxD5aVpbVBRSE7BMDv46m4RXtHnc3GHQkO0TOYAX2M8liWsRYxQTsHqzMNYVurLFu5yr8i1SZ8QWmkphleiHRPZ2zyIDyA4GmaRFrr3vGAOgQfsayYPKiToRrS8bEVRX1DxXFrjwzz8aP2vv97pyWTXvfD3VaAyMTX4a~-hd34CXNkyWUhyQUT69XzueX~iKN0A2CWTYKKdrVG29gcJMFFzUS6g0TpBBG6dNcf9lEAfULRIdFf3otMm1g__",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Navigate to the next slide
  const nextSlide = () => {
    if (currentSlide < Math.ceil(cards.length / 2) - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg font-bold mb-4">Latest Videos</h2>
        {/* Slider Controls */}
        <div className="flex justify-between px-4 space-x-3">
          <button
            onClick={prevSlide}
            className="bg-gray-300 p-2 rounded-full shadow hover:bg-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-300 p-2 rounded-full shadow hover:bg-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8">
        {/* Left-Side Video */}
        <div className="relative">
          <img
            src="/landing/video.png"
            alt="Main Video"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Right-Side Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {cards.map((card, index) => (
              <div className="w-full lg:w-1/2 px-4 flex-shrink-0 space-y-4">
                <div key={index} className="flex space-x-4">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="rounded-lg w-full h-40 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {card.title}
                    </h4>
                    <p className="text-sm text-gray-600">{card.description}</p>
                  </div>
                </div>
                <div
                  key={index}
                  //   className="w-full lg:w-1/2 px-4 flex-shrink-0 space-y-4 flex"
                  className="flex space-x-4"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="rounded-lg w-full h-40 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {card.title}
                    </h4>
                    <p className="text-sm text-gray-600">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
