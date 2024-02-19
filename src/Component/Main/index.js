import React from "react";
import OrderTable from "../OrderTable";
import OrderTab from "../OrderTab";
import { MdCancel } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

import "./index.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="responsive-main-container">
        <div className="top-option-container">
          <div className="orders-container">
            <div className="responsive-orders-container">
              <p className="orders-option">Orders</p>
              <MdCancel className="cancel-logo" />
            </div>
          </div>
          <div className="setting-container">
            <CiSettings className="setting-logo" />
          </div>
        </div>
        <OrderTab />
        <OrderTable />
      </div>
    </div>
  );
};

export default Main;
