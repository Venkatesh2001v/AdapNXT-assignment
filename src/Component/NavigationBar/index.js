import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoPricetagOutline } from "react-icons/io5";
import { MdBorderLeft } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FiShare2 } from "react-icons/fi";

import "./index.css";

const NavigationBar = () => {
  const [activeBtn, setActiveBtn] = useState(3);

  const handleButtonClick = (e) => {
    setActiveBtn(e);
  };
  return (
    <div className="sidebar-container">
      <button
        className={activeBtn === 1 ? "active-btn" : "not-active-btn"}
        onClick={() => handleButtonClick(1)}
      >
        <AiOutlineDashboard className="sidebar-logo" />
        <h1 className={activeBtn === 1 ? "active-heading" : "not-active-heading"}>
          Dashboard
        </h1>
      </button>
      <button
        className={activeBtn === 2 ? "active-btn" : "not-active-btn"}
        onClick={() => handleButtonClick(2)}
      >
        <IoPricetagOutline className="sidebar-logo" />
        <h1 className={activeBtn === 2 ? "active-heading" : "not-active-heading"}>
          Inventory
        </h1>
      </button>
      <button
        className={activeBtn === 3 ? "active-btn" : "not-active-btn"}
        onClick={() => handleButtonClick(3)}
      >
        <MdBorderLeft className="sidebar-logo" />
        <h1 className={activeBtn === 3 ? "active-heading" : "not-active-heading"}>
          Orders
        </h1>
      </button>
      <button
        className={activeBtn === 4 ? "active-btn" : "not-active-btn"}
        onClick={() => handleButtonClick(4)}
      >
        <LiaShippingFastSolid className="sidebar-logo" />
        <h1 className={activeBtn === 4 ? "active-heading" : "not-active-heading"}>
          Shipping
        </h1>
      </button>
      <button
        className={activeBtn === 5 ? "active-btn" : "not-active-btn"}
        onClick={() => handleButtonClick(5)}
      >
        <FiShare2 className="sidebar-logo" />
        <h1 className={activeBtn === 5 ? "active-heading" : "not-active-heading"}>
          Channel
        </h1>
      </button>
    </div>
  );
};

export default NavigationBar;
