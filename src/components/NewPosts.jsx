import React from "react";
const posts = [
  {
    image: "/landing/newpost1.png",
    title: "12 Mobile UX Design Trends For 2018",
    description:
      "Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers...",
    author: "Jon Kantner",
    date: "July 14, 2022",
    authimg:
      "https://s3-alpha-sig.figma.com/img/fb0f/b454/19e0b4ae59e8263cb8acb9810346f4a3?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fTAcyGsAnbq9vZpKjIkCN-np6yOUNDAsCBSD7kT8CiHLcTHgoELvl-GeFsXP1J2GkdhBAxU8lqXO-wJoW977t3zgJxKifLWtadBbsFELpiIzJ8amqNmVrD97kz-UpLsI2Zm7VJr-6PUZhTlmuo-Au1NnwI0EaPDDokg-WYqdW~BomTlE1Gc8V6WXczWwuXFFpCGxuBJCcbekhsQjk1rGWoojRaIUxZcz-WIVt5vQ93XebSVgLaLo7iEcfgZGdmLtPhUnLewO8xVBC8izQP8GXsoi~8wmK7d76z8pEgqEUw9GRAoSYOdnfWQyJNxKqqHhNXxTNYMv~E9WxKaI-4AfgQ__",
  },
  {
    image: "/landing/newpost2.png",
    title: "No Boat Bottomfish: Jetty Fishing On The...",
    description:
      "Cast from the rocks to bring home fresh fish tacos in this iconic spring and summer fishery...",
    author: "Louis Hoebregts",
    date: "July 13, 2022",
    authimg:
      "https://s3-alpha-sig.figma.com/img/28a2/4f9e/47b18684b5d707d49f37f35801d9569f?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z3RtoZ96mMp58LPC3xpZMVOnpCWD1hsUMPJMYotJkPOq1i8ehCKtIenZpau3iOkU~Q-Kn-f8bkXdwICGkiTQn9HDEAkxWCx9xWBT-QtLc3w89nddMeZ-pnTfHA17zOfj8iEow-YmDUx~kOoihJUH2rNMRFwkYtjjSaWkchMIB5k8Mmq48pr~GusFIt7pN1LnaPY6~cpq~qtSW2m1viDNQoZV5JMvJAX-3Xz-0Li8LHeVNCUDn3EkxeX3WYp~54a4Im0kxsz4nMa4TZ~bFBgoZmiWel~sP9GuS6B9sIHR8hDGi8tw4hZWOXnKxD0pvzHLULIKLu0e64CnOnKULQNNlA__",
  },
  {
    image: "/landing/newpost3.png",
    title: "What A Disabled Squirrel Taught Me About Life...",
    description:
      "Why it helps to know what it’s like, and the exquisite beauty of empathy these days, the wood patio area...",
    author: "James",
    date: "July 12, 2022",
    authimg:
      "https://s3-alpha-sig.figma.com/img/454d/baab/c55f3cfd2bb6daeb7d634374476e9de0?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dTCtDdKd0m0QYVOIf4P~EsbtHgU4BQ5yLO3-Ejgvq0C0gEVn55X47ksnBQlzGXXgnZ-RoXH4hR0eRuzEdMAOWLPsTlIEJUin3kdBhzxS846pJoASg62HQbWwxjZt5vXo8bYhgisV-1rgDV~2dwUxUydugIcwoIGt-GksqQhi6W1uAZGRNKPx6tPPOAXzQcJTdJPBSZmRzWOcEdoS1Wu~ThU6bXoZzyC5uqLEyB2u7Hx5VoyeF~A9L-B62BB7VK0zaFw43ydiXjK1L55Q1gZIjMr-HOSxukcrWJYWpqtouslICf60ArXVsFOUoZEE~~CSPn~RZxIeW3G8i6z0zQXqVg__",
  },
  {
    image: "/landing/newpost4.png",
    title: "Becoming A Self-Driving Car & Machine Learning...",
    description:
      "How I left my full-time job, studied at Udacity, and landed a job at BMW. The past year has been quite...",
    author: "Cassie Evans",
    date: "July 12, 2022",
    authimg:
      "https://s3-alpha-sig.figma.com/img/b1d3/5c60/23241fdd0f610c113af537d254c750ec?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mj9wwNF6i8Rlq~C4aSic9SNo~pfBcu1p-Q4B3m0qNjvrjNBjNqGdT4DclR6ZMk0JI3gHx8-A0UpwNo0u7i9Nxi8oW2wIfV8qvXV4CxrljHiDbCsBMyWznY4FBX4gqjgpec3QB9ytqXHo7mjTWkZcrV83Qdjjr-1KmfoEutudURkMPsE18XFm1BIGfikW3A5eKbqKB4x0kWxvV~w0F4osaS-KwcLzEJXS0hFlcz1CDsTxi2s~Wn~TkcKzcxhkORC5i2~in8IVT5VTBqj2tlb982MYcwGdLVC3-BXmrTnTnsYaSCUUc1D7HE1GsSh0GafZq1nlWLbMWOY4Zt-jh8yEAw__",
  },
  {
    image: "/landing/newpost5.png",
    title: "How To Become A Master Designer",
    description:
      "Many outsiders believe that designers are unicorns, gifted or special in some way. We have an innate...",
    author: "Linda",
    date: "July 10, 2022",
    authimg:
      "https://s3-alpha-sig.figma.com/img/b1d3/5c60/23241fdd0f610c113af537d254c750ec?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mj9wwNF6i8Rlq~C4aSic9SNo~pfBcu1p-Q4B3m0qNjvrjNBjNqGdT4DclR6ZMk0JI3gHx8-A0UpwNo0u7i9Nxi8oW2wIfV8qvXV4CxrljHiDbCsBMyWznY4FBX4gqjgpec3QB9ytqXHo7mjTWkZcrV83Qdjjr-1KmfoEutudURkMPsE18XFm1BIGfikW3A5eKbqKB4x0kWxvV~w0F4osaS-KwcLzEJXS0hFlcz1CDsTxi2s~Wn~TkcKzcxhkORC5i2~in8IVT5VTBqj2tlb982MYcwGdLVC3-BXmrTnTnsYaSCUUc1D7HE1GsSh0GafZq1nlWLbMWOY4Zt-jh8yEAw__",
  },
  {
    image: "/landing/newpost6.png",
    title: "This Free Course Can Teach You Music...",
    description:
      "A Berlin-based music software company, just released a free interactive music course that runs right in your...",
    author: "Patricia",
    date: "July 09, 2022",
    authimg:
      "https://s3-alpha-sig.figma.com/img/b1d3/5c60/23241fdd0f610c113af537d254c750ec?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mj9wwNF6i8Rlq~C4aSic9SNo~pfBcu1p-Q4B3m0qNjvrjNBjNqGdT4DclR6ZMk0JI3gHx8-A0UpwNo0u7i9Nxi8oW2wIfV8qvXV4CxrljHiDbCsBMyWznY4FBX4gqjgpec3QB9ytqXHo7mjTWkZcrV83Qdjjr-1KmfoEutudURkMPsE18XFm1BIGfikW3A5eKbqKB4x0kWxvV~w0F4osaS-KwcLzEJXS0hFlcz1CDsTxi2s~Wn~TkcKzcxhkORC5i2~in8IVT5VTBqj2tlb982MYcwGdLVC3-BXmrTnTnsYaSCUUc1D7HE1GsSh0GafZq1nlWLbMWOY4Zt-jh8yEAw__",
  },
];
const NewPosts = () => {
  return (
    <div>
      {/* latest news */}
      <div className="p-6 bg-gray-50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">New Posts</h2>
          <button className="text-sm text-blue-600 hover:underline">
            Show All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 flex"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-1/3 h-auto object-cover"
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 truncate">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 truncate">
                    {post.description}
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src={post.authimg}
                      alt={post.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-800">
                      {post.author}
                    </p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                  <button className="ml-auto text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewPosts;
