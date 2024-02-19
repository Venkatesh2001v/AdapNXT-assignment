import React, { useState } from "react";
import "./index.css";

const OrdersTab = () => {
  const [activebtn, setActiveBtn] = useState(1);
  const clickActivebtn = (id) => {
    setActiveBtn(id);
  };
  
  return (
    <div className="status-tab-container">
      <button
        className={
          "status-tab-btn " + (activebtn === 1 ? " active-status-tab-btn" : "")
        }
        onClick={() => clickActivebtn(1)}
      >
        Pending
      </button>
      <button
        className={
          "status-tab-btn " + (activebtn === 2 ? "active-status-tab-btn" : "")
        }
        onClick={() => clickActivebtn(2)}
      >
        Accepted
      </button>
      <button
        className={
          "status-tab-btn " + (activebtn === 3 ? "active-status-tab-btn" : "")
        }
        onClick={() => clickActivebtn(3)}
      >
        AWB Created
      </button>
      <button
        className={
          "status-tab-btn " + (activebtn === 4 ? "active-status-tab-btn" : "")
        }
        onClick={() => clickActivebtn(4)}
      >
        Ready to Ship
      </button>
      <button
        className={
          "status-tab-btn " + (activebtn === 5 ? "active-status-tab-btn" : "")
        }
        onClick={() => clickActivebtn(5)}
      >
        Shipped
      </button>
      <button
        className={
          "status-tab-btn " + (activebtn === 6 ? "active-status-tab-btn" : "")
        }
        onClick={() => clickActivebtn(6)}
      >
        Completed
      </button>
      <button
        className={
          "status-tab-btn " + (activebtn === 7 ? "active-status-tab-btn" : "")
        }
        onClick={() => clickActivebtn(7)}
      >
        Cancelled
      </button>
    </div>
  );
};

export default OrdersTab;
