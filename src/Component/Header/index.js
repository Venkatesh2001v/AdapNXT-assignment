import companyLogo from "../../Assest/AdaptNxt.png";
import { MdOutlineFormatAlignRight } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdGTranslate } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import "./index.css";

const Header = () => {
  return (
    <div className="main-header">
      <div className="main-responsive-header">
        <div className="logo-container">
          <button className="logo-button">
            <img
              className="company-logo"
              src={companyLogo}
              alt="Company Logo"
            />
          </button>
          <button>
            <MdOutlineFormatAlignRight className="header-icon" />
          </button>
        </div>
        <div className="main-header-options-container">
          <div className="main-header-responsive-options-container">
            <button>
              <IoMoonOutline className="header-icon" />
            </button>
            <button>
              <IoIosNotificationsOutline className="header-icon" />
            </button>
            <button>
              <MdGTranslate className="header-icon" />
            </button>
            <button>
              <RxAvatar className="header-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
