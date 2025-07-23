// If you want a search icon, install react-icons: npm install react-icons
import { FaSearch } from "react-icons/fa";
import { images } from "../../../assets/images/index";

function SquaresThemeSearchBar() {
  return (
    <div className="flex items-center bg-[#262736] border border-[#3b3c51] rounded-full px-4 py-2 w-full max-w-3xl sm:max-w-md md:max-w-lg lg:max-w-xl shadow-lg">
      <FaSearch className="text-[#3b3c51] mr-4 text-lg" />
      <input
        type="text"
        placeholder="Search Docs"
        className="bg-transparent outline-none border-none text-white placeholder-[#5e5f58] text-base flex-1 font-sans focus:outline-none focus:ring-0"
      />
      {/* Optional: Keyboard Shortcut Indicator */}
      <span className="ml-4 px-3 py-1 text-xs rounded bg-[#1d1e2c] text-[#5e5f58] border border-[#3b3c51] font-mono hidden sm:block">
        ⌘ K
      </span>
    </div>
  );
}

export default SquaresThemeSearchBar;
