import React from "react";

const TodayHeadlines = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-[#343A40] text-[18px] font-[400] font-notoBengali">
            All (1)
          </span>
          <button className="bg-[#DA2228] text-white rounded-[5px] text-[14px] font-[500] font-notoBengali flex space-x-2 h-[36px] w-[140px] justify-center items-center">
            <span>ADD NEW</span>
            <span className="text-xl">+</span>
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="col-span-2 bg-[#F7F7F7] p-6 rounded-md">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#000000] text-[14px] font-[500] font-notoBengali mb-3">
                Topic
              </label>
              <input
                type="text"
                className="w-full border border-[#D5D5D5] px-3 py-2 rounded-[3px]"
                placeholder="Abcd"
              />
            </div>
            <div>
              <label className="block text-[#000000] text-[14px] font-[500] font-notoBengali mb-3">
                Head line
              </label>
              <input
                type="text"
                className="w-full border border-[#D5D5D5] px-3 py-2 rounded-[3px]"
                placeholder="Abcd"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-[#000000] text-[14px] font-[500] font-notoBengali mb-3">
                Tittle
              </label>
              <input
                type="text"
                className="w-full border border-[#D5D5D5] px-3 py-2 rounded-[3px]"
                placeholder="Abcd"
              />
            </div>
            <div>
              <label className="block text-[#000000] text-[14px] font-[500] font-notoBengali mb-3">
                Choose Image File
              </label>
              <input
                type="file"
                className="w-full border border-[#D5D5D5] px-3 py-2 rounded-[3px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-[#000000] text-[14px] font-[500] font-notoBengali mb-3">
                Author Name
              </label>
              <input
                type="text"
                className="w-full border border-[#D5D5D5] px-3 py-2 rounded-[3px]"
                placeholder="Abcd"
              />
            </div>
            <div>
              <label className="block text-[#000000] text-[14px] font-[500] font-notoBengali mb-3">
                Time
              </label>
              <input
                type="time"
                className="w-full border border-[#D5D5D5] px-3 py-2 rounded-[3px]"
                placeholder="Abcd"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-[#000000] text-[14px] font-[500] font-notoBengali mb-3">
              Description:
            </label>
            <textarea
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              rows="3"
              placeholder="Description..."
            ></textarea>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button className="border border-[#DA2228] text-[#DA2228] text-[14px] font-notoBengali font-[600]  rounded-[5px] w-[120px] h-[36px]">
              CANCEL
            </button>
            <button className="bg-[#DA2228] text-white rounded-[5px] font-notoBengali text-[14px] font-[600] w-[120px] h-[36px]">
              SUBMIT
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="rounded-md h-[450px] flex items-center justify-center">
          <iframe
            src="http://localhost:5173/"
            title="Website Preview"
            className="w-full h-full"
            style={{
              border: "none",
              overflow: "hidden",
              clipPath: "inset(230px 0px 120px 0px)", // Adjust based on the section position
            }}
          ></iframe>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="text-[#000000] text-[16px] font-[600] font-notoBengali border-b border-[#DFDFDF]">
              <th className="px-4 py-2">NO OF NEWS</th>
              <th className="px-4 py-2">TITLE</th>
              <th className="px-4 py-2">NEWS</th>
              <th className="px-4 py-2">DURATION (min)</th>
              <th className="px-4 py-2">TIME</th>
              <th className="px-4 py-2">STATUS</th>
              <th className="px-4 py-2">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-[#DFDFDF] text-[16px] font-[500] font-notoBengali">
              <td className="px-4 py-2 text-center">2</td>
              <td className="px-4 py-2 text-center">ABC</td>
              <td className="px-4 py-2 text-center">ABC</td>
              <td className="px-4 py-2 text-center">60</td>
              <td className="px-4 py-2 text-center">12:00PM - 01:00 PM</td>
              <td className="px-4 py-2 text-center">PUBLISH</td>
              <td className="px-4 py-2 text-center">
                <i class="fa-solid fa-ellipsis-vertical cursor-pointer"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodayHeadlines;
