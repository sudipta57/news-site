import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const posts = [
  {
    image: "/landing/popular1.png",
    title: "Opening Day of Boating Season, Seattle WA",
    description:
      "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
    author: "Mary",
    date: "July 14, 2022",
    authimg:
      "https://s3-alpha-sig.figma.com/img/fb0f/b454/19e0b4ae59e8263cb8acb9810346f4a3?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fTAcyGsAnbq9vZpKjIkCN-np6yOUNDAsCBSD7kT8CiHLcTHgoELvl-GeFsXP1J2GkdhBAxU8lqXO-wJoW977t3zgJxKifLWtadBbsFELpiIzJ8amqNmVrD97kz-UpLsI2Zm7VJr-6PUZhTlmuo-Au1NnwI0EaPDDokg-WYqdW~BomTlE1Gc8V6WXczWwuXFFpCGxuBJCcbekhsQjk1rGWoojRaIUxZcz-WIVt5vQ93XebSVgLaLo7iEcfgZGdmLtPhUnLewO8xVBC8izQP8GXsoi~8wmK7d76z8pEgqEUw9GRAoSYOdnfWQyJNxKqqHhNXxTNYMv~E9WxKaI-4AfgQ__",
  },
  {
    image: "/landing/popular2.png",
    title: "How to choose the right laptop for programming",
    description:
      "Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when",
    author: "Mary",
    date: "July 14, 2022",
    authimg:
      "https://s3-alpha-sig.figma.com/img/28a2/4f9e/47b18684b5d707d49f37f35801d9569f?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z3RtoZ96mMp58LPC3xpZMVOnpCWD1hsUMPJMYotJkPOq1i8ehCKtIenZpau3iOkU~Q-Kn-f8bkXdwICGkiTQn9HDEAkxWCx9xWBT-QtLc3w89nddMeZ-pnTfHA17zOfj8iEow-YmDUx~kOoihJUH2rNMRFwkYtjjSaWkchMIB5k8Mmq48pr~GusFIt7pN1LnaPY6~cpq~qtSW2m1viDNQoZV5JMvJAX-3Xz-0Li8LHeVNCUDn3EkxeX3WYp~54a4Im0kxsz4nMa4TZ~bFBgoZmiWel~sP9GuS6B9sIHR8hDGi8tw4hZWOXnKxD0pvzHLULIKLu0e64CnOnKULQNNlA__",
  },
  {
    image: "/landing/popular3.png",
    title: "How we built the first real self-driving car",
    description:
      "Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when",
    author: "James",
    date: "July 14, 2022",
    authimg:
      "https://s3-alpha-sig.figma.com/img/454d/baab/c55f3cfd2bb6daeb7d634374476e9de0?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dTCtDdKd0m0QYVOIf4P~EsbtHgU4BQ5yLO3-Ejgvq0C0gEVn55X47ksnBQlzGXXgnZ-RoXH4hR0eRuzEdMAOWLPsTlIEJUin3kdBhzxS846pJoASg62HQbWwxjZt5vXo8bYhgisV-1rgDV~2dwUxUydugIcwoIGt-GksqQhi6W1uAZGRNKPx6tPPOAXzQcJTdJPBSZmRzWOcEdoS1Wu~ThU6bXoZzyC5uqLEyB2u7Hx5VoyeF~A9L-B62BB7VK0zaFw43ydiXjK1L55Q1gZIjMr-HOSxukcrWJYWpqtouslICf60ArXVsFOUoZEE~~CSPn~RZxIeW3G8i6z0zQXqVg__",
  },
  {
    image: "/landing/popular4.png",
    title: "How to Persuade Your Parents to Buy Fast Food",
    description:
      "Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.",
    author: "Jon Kantner",
    date: "July 14, 2022",
    authimg:
      "https://s3-alpha-sig.figma.com/img/b1d3/5c60/23241fdd0f610c113af537d254c750ec?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mj9wwNF6i8Rlq~C4aSic9SNo~pfBcu1p-Q4B3m0qNjvrjNBjNqGdT4DclR6ZMk0JI3gHx8-A0UpwNo0u7i9Nxi8oW2wIfV8qvXV4CxrljHiDbCsBMyWznY4FBX4gqjgpec3QB9ytqXHo7mjTWkZcrV83Qdjjr-1KmfoEutudURkMPsE18XFm1BIGfikW3A5eKbqKB4x0kWxvV~w0F4osaS-KwcLzEJXS0hFlcz1CDsTxi2s~Wn~TkcKzcxhkORC5i2~in8IVT5VTBqj2tlb982MYcwGdLVC3-BXmrTnTnsYaSCUUc1D7HE1GsSh0GafZq1nlWLbMWOY4Zt-jh8yEAw__",
  },
];

const PopularPosts = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
    ],
  };

  return (
    <div className="w-full mx-auto p-6 bg-[#FFFFFF] my-4">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center space-x-0 sm:space-x-20 text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
          popular posts
        </h2>

        <div className="flex space-x-4 sm:space-x-10 text-sm sm:text-base font-semibold text-gray-600 ml-0">
          <div className="flex items-center space-x-4">
            <div
              onClick={() => sliderRef.current?.slickPrev()}
              className="cursor-pointer"
            >
              <img src="/landing/Left.png" alt="Previous" className="w-6 h-6" />
            </div>
            <div
              onClick={() => sliderRef.current?.slickNext()}
              className="cursor-pointer"
            >
              <img src="/landing/right.png" alt="Next" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col sm:flex-row max-w-[1400px] mx-auto items-center justify-center space-y-6 sm:space-y-0">
        <div className="w-full sm:w-4/4">
          <Slider ref={sliderRef} {...settings}>
            {posts.map((post, index) => (
              <div key={index} className="px-3">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover p-2 rounded-2xl"
                  />
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-800 truncate">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {post.description}
                    </p>
                    <div className="flex items-center mt-4">
                      <img
                        src={post.authimg}
                        alt={post.author}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {post.author}
                        </p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                      <button className="ml-auto">
                        <img src="/landing/save_icon.png" alt="save" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PopularPosts;
