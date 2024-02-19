import React from "react";
import { LiaFileImportSolid } from "react-icons/lia";
import { PiArrowSquareRightThin } from "react-icons/pi";
import { MdOutlinePrint } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { SlRefresh } from "react-icons/sl";
import { RiArrowDropUpFill } from "react-icons/ri";
import { RiArrowDropDownFill } from "react-icons/ri";
import { VscFilter } from "react-icons/vsc";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaShopify } from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";

import "./index.css";

function OrderTable() {
  return (
    <div className="order-table-container">
      <div className="order-table-responsive-container">
        <div className="table-options-container">
          <div className="table-options">
            <button className="import-button">
              <LiaFileImportSolid className="import-logo" />
              <p>Import Orders</p>
            </button>
            <button className="accept-button">
              <PiArrowSquareRightThin className="accept-logo" />
              <p>Accept</p>
            </button>
            <button className="print-button">
              <MdOutlinePrint className="print-logo" />
              <p>Print</p>
              <IoMdArrowDropdown className="arrow-logo" />
            </button>
          </div>
          <button className="refresh-button">
            <SlRefresh className="refresh-logo" />
            <p>Refresh</p>
          </button>
        </div>
        <div className="table-heading-container">
          <div className="responsive-table-heading-container">
            <div className="fisrt-checkbox">
              <input type="checkbox" />
            </div>
            <div className="channel-container">
              <p>Channel</p>
              <div className="up-down-arrow">
                <RiArrowDropUpFill className="up-arrow" />
                <RiArrowDropDownFill className="down-arrow" />
              </div>
              <VscFilter className="filter-icon" />
              <hr className="line" />
            </div>
            <div className="order-no-container">
              <p>Order No</p>
              <div className="order-no-arrow-container">
                <div className="up-down-arrow">
                  <RiArrowDropUpFill className="up-arrow" />
                  <RiArrowDropDownFill className="down-arrow" />
                </div>
                <BiSearchAlt2 className="search-icon" />
              </div>
              <hr className="line" />
            </div>
            <div className="order-date-container">
              <p>Order Date</p>
              <div className="order-no-arrow-container">
                <div className="up-down-arrow">
                  <RiArrowDropUpFill className="up-arrow" />
                  <RiArrowDropDownFill className="down-arrow" />
                </div>
                <BiSearchAlt2 className="search-icon" />
              </div>
              <hr className="line" />
            </div>
            <div className="city-container">
              <p>City</p>
              <div className="space-bettwen">
                <div className="up-down-arrow">
                  <RiArrowDropUpFill className="up-arrow" />
                  <RiArrowDropDownFill className="down-arrow" />
                </div>
              </div>
              <hr className="line" />
            </div>
            <div className="customer-name-container">
              <p>Customer Name</p>
              <div className="end-responsive">
                <BiSearchAlt2 className="search-icon" />
                <hr className="line" />
              </div>
            </div>
            <div className="order-value-container">
              <p>Order value</p>
              <div className="space-bettwen">
                <div className="up-down-arrow">
                  <RiArrowDropUpFill className="up-arrow" />
                  <RiArrowDropDownFill className="down-arrow" />
                </div>
              </div>
              <hr className="line" />
            </div>
            <div className="status-container">
              <p>Status</p>
              <div className="space-bettwen">
                <div className="up-down-arrow">
                  <RiArrowDropUpFill className="up-arrow" />
                  <RiArrowDropDownFill className="down-arrow" />
                </div>
              </div>
              <hr className="line" />
            </div>
            <div className="operation-container">
              <p>Operation</p>
              <div className="space-bettwen">
                <div className="up-down-arrow">
                  <RiArrowDropUpFill className="up-arrow" />
                  <RiArrowDropDownFill className="down-arrow" />
                </div>
              </div>
              <hr className="line" />
            </div>
          </div>
        </div>
        <div className="table-details-container">
          <div className="first-result">
            <div className="responsive-table-heading-container">
              <div className="fisrt-checkbox">
                <FaRegSquarePlus />
                <input type="checkbox" className="check-box" />
              </div>
              <div className="channel-result">
                <FaShopify className="shopify-logo" />
              </div>
              <div className="order-no-result">
                <p>#LHNOY8</p>
              </div>
              <div className="order-data-result">
                <p>2022-05-04 </p>
              </div>
              <div className="city-result">
                <p>Karur</p>
              </div>
              <div className="name-result">
                <p>Gowtham</p>
              </div>
              <div className="order-value-result">
                <p>0.00</p>
              </div>
              <div className="status-result">
                <p>Pending</p>
              </div>
              <div className="operation-result">
                <select>
                  <option>Actions</option>
                </select>
              </div>
            </div>
          </div>
          <div className="second-result">
            <div className="responsive-table-heading-container">
              <div className="fisrt-checkbox">
                <FaRegSquarePlus />
                <input type="checkbox" className="check-box" />
              </div>
              <div className="channel-result">
                <FaShopify className="shopify-logo" />
              </div>
              <div className="order-no-result">
                <p>#THNO76h8</p>
              </div>
              <div className="order-data-result">
                <p>2022-08-02 </p>
              </div>
              <div className="city-result">
                <p>Covai</p>
              </div>
              <div className="name-result">
                <p>Kumar</p>
              </div>
              <div className="order-value-result">
                <p>1.00</p>
              </div>
              <div className="status-result">
                <p>Pending</p>
              </div>
              <div className="operation-result">
                <select>
                  <option>Actions</option>
                </select>
              </div>
            </div>
          </div>
          <div className="third-result">
            <div className="responsive-table-heading-container">
              <div className="fisrt-checkbox">
                <FaRegSquarePlus />
                <input type="checkbox" className="check-box" />
              </div>
              <div className="channel-result">
                <FaShopify className="shopify-logo" />
              </div>
              <div className="order-no-result">
                <p>#GHLD76h8</p>
              </div>
              <div className="order-data-result">
                <p>2021-05-09 </p>
              </div>
              <div className="city-result">
                <p>Banglore</p>
              </div>
              <div className="name-result">
                <p>Karthi</p>
              </div>
              <div className="order-value-result">
                <p>0.10</p>
              </div>
              <div className="status-result">
                <p>Pending</p>
              </div>
              <div className="operation-result">
                <select>
                  <option>Actions</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="table-end">
          <button className="less-and-greater">&lt;</button>
          <button className="page-button">1</button>
          <button className="less-and-greater">&gt;</button>
          <select className="page-select-option">
            <option>20 / Page</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default OrderTable;
