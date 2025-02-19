const Footer2 = () => {
  return (
    <footer className="bg-[#363636] text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-[#DA2228] p-10 flex flex-col md:flex-row items-center justify-between relative">
        <div>
          <h2 className="text-[40px] font-bold text-white font-notoBengali mb-2">
            Subscribe to our Newsletter
          </h2>
          <p className="text-[20px] font-[400] text-[#ECECEC] font-notoBengali mb-6">
            Subscribe for Updates: Stay informed about the latest investor
            updates, <br /> financial results, and announcements by subscribing
            to our newsletter.
          </p>
        </div>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-l-[7px] md:w-[574px] focus:outline-none text-white bg-[#FFFFFF1A]"
          />
          <button className="bg-white text-[#DA2228] px-6 py-3 rounded-r-[7px] font-medium">
            Subscribe
          </button>
        </div>

        {/* Back to Top Button */}
        {/* <div className="flex justify-center items-center p-4 absolute bottom-[-50px] left-0 right-0">
          <img
            src="/back to top btn.png"
            alt="backtotop"
            className="w-16 h-16"
          />
        </div> */}
      </div>

      {/* Footer Links Section */}
      <div className="p-20 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left Column */}
        <div>
          <img
            src="/footer_news_logo.png"
            alt="news_logo"
            className="h-12 mb-3"
          />

          <p className=" text-[#CCCCCC] text-[14.67px] font-[400] font-notoBengali leading-[25px]">
            A108 Adam Street New York, NY 535022 United States
          </p>
          <p className=" text-[#CCCCCC] text-[14.67px] font-[400] font-notoBengali mt-4">
            Phone: +91 1234567890
          </p>
          <p className=" text-[#CCCCCC] text-[14.67px] font-[400] font-notoBengali mt-4">
            Email: info@example.com
          </p>
          <div className="flex mt-4 space-x-2">
            <a href="#">
              <img src="/footer-insta.png" alt="insta" />
            </a>
            <a href="#">
              <img src="/footer-linkedin.png" alt="linkedin" />
            </a>

            <a href="#">
              <img src="/footer-facebook.png" alt="facebook" />
            </a>
            <a href="#">
              <img src="/footer-yt.png" alt="yt" />
            </a>
            <a href="#">
              <img src="/footer-x.png" alt="x" />
            </a>
            <a href="#">
              <img src="/footer-twitter.png" alt="twitter" />
            </a>
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h4 className="text-white text-[18.67px] font-[600] font-notoBengali mb-7">
            Technology
          </h4>
          <ul className="space-y-4 text-[#CCCCCC] text-[14.67px] font-[400] font-notoBengali">
            <li>Email Marketing</li>
            <li>Social Media Marketing</li>
            <li>Search Engine Optimization</li>
            <li>Product Development</li>
            <li>Web Development</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-[18.67px] font-[600] font-notoBengali mb-7">
            Economy
          </h4>
          <ul className="space-y-4 text-[#CCCCCC] text-[14.67px] font-[400] font-notoBengali">
            <li>Digital Marketing Agency</li>
            <li>SEO Agency</li>
            <li>PPC Agency</li>
            <li>Content Marketing Agency</li>
            <li>Internet Marketing Agency</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-[18.67px] font-[600] font-notoBengali mb-7">
            Sports
          </h4>
          <ul className="space-y-4 text-[#CCCCCC] text-[14.67px] font-[400] font-notoBengali">
            <li>Internet Marketing</li>
            <li>Content Marketing</li>
            <li>Social Media</li>
            <li>Web Design</li>
            <li>PPC</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-[18.67px] font-[600] font-notoBengali mb-7">
            Partners
          </h4>
          <ul className="space-y-4 text-[#CCCCCC] text-[14.67px] font-[400] font-notoBengali">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>SEO Checker</li>
            <li>Tools</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="p-4 text-center text-[18.67px] font-[400] font-notoBengali text-[#FFFFFF] border-t border-[#DA2228] py-8">
        <span className="text-[#000000]">©</span> Copyright{" "}
        <span className="font-bold">secwebxperts.Pvt.Ltd.</span> All Rights
        Reserved to <span className="font-bold">News Pole</span>
      </div>
    </footer>
  );
};
export default Footer2;
