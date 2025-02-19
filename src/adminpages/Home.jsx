import React, { useState } from "react";
import BreakingNews from "../adminComponents/BreakingNews";
import Dashboard from "../adminComponents/Dashboard";
import TodayHeadline from "../adminComponents/Today_headline";
import ProfilePage from "../pages/AdminProfile";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "Dashboards", label: "Dashboards", icon: "/admin/icon1.png" },
    {
      id: "Today’s Headlines",
      label: "Today’s Head lines",
      icon: "/admin/icon15.png",
    },
    { id: "Breaking News", label: "Breaking News", icon: "/admin/icon14.png" },
    { id: "Politics", label: "Politics", icon: "/admin/icon3.png" },
    { id: "India", label: "India", icon: "/admin/icon4.png" },
    { id: "International", label: "International", icon: "/admin/icon5.png" },
    { id: "Kolkata", label: "Kolkata", icon: "/admin/icon6.png" },
    { id: "District", label: "District", icon: "/admin/icon7.png" },
    { id: "Education", label: "Education", icon: "/admin/icon8.png" },
    { id: "State", label: "State", icon: "/admin/icon9.png" },
    { id: "Health", label: "Health", icon: "/admin/icon10.png" },
    { id: "Science", label: "Science", icon: "/admin/icon11.png" },
    { id: "Crime", label: "Crime", icon: "/admin/icon12.png" },
    { id: "Entertainment", label: "Entertainment", icon: "/admin/icon13.png" },
  ];

  return (
    <div className="bg-[#454545] text-white relative min-h-screen">
      <div className="mb-2 bg-[#363636] p-4">
        <img src="/footer_news_logo.png" alt="Logo" className="h-12 mx-auto" />
      </div>
      <ul className="pb-16">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`flex items-center space-x-3 h-[60px] ps-2 py-4 cursor-pointer ${
              activeTab === tab.id
                ? "bg-[#DA2228] border-none"
                : "border-b-[0.2px] border-[#FFFFFF]"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <img src={tab.icon} alt={tab.label} />
            <p className="text-[20px] font-[500]">{tab.label}</p>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 p-4 bg-black left-0 right-0 text-white flex text-[20px] font-[600] space-x-2 items-center justify-center">
        <img src="/logout.png" alt="logout" />
        <p> Logout</p>
      </div>
    </div>
  );
};

const Header = ({ activeTab }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <h1 className="text-[32px] font-[600] text-[#363636] font-notoBengali">
        <i class="fa-solid fa-chevron-left"></i> {activeTab}
      </h1>
      <input
        type="text"
        placeholder="Search..."
        className="border px-4 py-2 h-[36px] w-[400px] rounded-[20px]"
      />
      <div className="flex items-center">
        <span> Fiona Mahtab</span>
        <img
          src="/admin/profile.png"
          alt="Profile"
          className="h-8 w-8 rounded-full ml-4 cursor-pointer"
        />
      </div>
    </div>
  );
};

const Home = () => {
  const [activeTab, setActiveTab] = useState("Dashboards");

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboards":
        return <Dashboard />;
      case "Today’s Headlines":
        return <TodayHeadline />;
      case "Breaking News":
        return <BreakingNews />;
      case "Politics":
        return <ProfilePage />;
      case "Videos":
        return <div>Videos Content</div>;
      case "Headline News":
        return <div>Headline News Content</div>;
      case "Trending News":
        return <div>Trending News Content</div>;
      case "Technology":
        return <div>Technology Content</div>;
      case "Sports":
        return <div>Sports Content</div>;
      case "Articles":
        return <div>Articles Content</div>;
      case "Photos":
        return <div>Photos Content</div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="grid grid-cols-12 h-screen max-w-[1600px] mx-auto">
      {/* Sidebar */}
      <div className="col-span-2 bg-[#454545] text-white">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Main Content Area */}
      <div className="col-span-10">
        <Header activeTab={activeTab} />
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;
