import searchbar from "../../assets/images/Search.svg";
import moon from "../../assets/header/Moon.svg";
import sun from "../../assets/header/Sun.svg";
import user from "../../assets/header/frame.svg";
import notification from "../../assets/header/Notification.svg"; 
import profile from "../../assets/header/profile.svg"; 
import Arrow from "../../assets/header/Arrow-down.svg"; 

const Header = () => {
  
  return (
    <header className="flex items-center justify-between gap-4 bg-white h-[100px] p-4 ">
      {/* Search Input */}
      <div className="flex items-center bg-[#F6F9F2] rounded-md px-4 py-2 lg:w-[533px] lg:h-[48px]">
        <img src={searchbar} alt="" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent focus:outline-none text-gray-600 ml-2 w-full h-full"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-6">
        {/* Light/Dark Toggle */}
        <div className="flex items-center gap-4 space-x-2 bg-[#F6F9F2] rounded-md px-2 py-1 lg:w-[213px] lg:h-[48px]">
        
          <button className="text-sm flex items-center space-x-1 lg:w-[94px] lg:h-[36px] bg-[#D9F27E] text-gray-700 px-2 py-1 rounded-md shadow-sm">
          <img src={sun} alt="" />
            <span className="font-medium">Light</span>
          </button>
          <button className="flex gap-2 text-sm text-gray-600">
            <img src={moon} alt="" />
            <span className="font-medium">Dark</span>
          </button>
        </div>

        {/* Notification and Profile */}
        <div className="flex items-center space-x-6">
          {/* Notification Icon */}
          <div className="relative flex items-center justify-center lg:w-[44px] lg:h-[44px] rounded-full border-[2px] border-[#A0AEC0] cursor-pointer">
          <img className="p-[10px]" src={notification} alt="" />
            <span className="absolute top-[-3px] right-[-6px] bg-red-400 text-white text-xs rounded-full px-[6px] py-[1px]">
              3
            </span>
          </div>
          <div className="relative flex items-center justify-center lg:w-[44px] lg:h-[44px] rounded-full border-[2px] border-[#A0AEC0] cursor-pointer">
          <img className="p-[10px]" src={user} alt="" />
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <div>
              <p className="text-sm font-medium text-gray-700">Benjamin</p>
              <p className="text-xs text-gray-400">New York, USA</p>
            </div>
            <img
              src={profile}
              alt="Profile"
              className="h-10 w-10 object-cover"
            />
            <img
              src={Arrow}
              alt="Profile"
              className=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
