import React, { useState } from "react";
import "./Upload.css";
import Sidebar from "../Sidebar/Sidebar";
import excel from "../../assets/excel.png";
import "boxicons/css/boxicons.min.css";
import TableElement from "../Table/TableElement";

const Upload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  const handleUpload = () => {
    setIsLoading(true);

    // Simulate an asynchronous operation (e.g., API call) with setTimeout
    setTimeout(() => {
      // After 1 second, reset the loading state
      setIsLoading(false);
 setIsBlurred(true);
     
    }, 1000);
  };

  return (
    <div className="up-main">
      <div className=" up-sidebar">
        <Sidebar />
      </div>
      <div className="up-main2">
        <div className="navs">
          <p>Upload CSV</p>

          <div>
            <i
              class="bx bxs-bell"
              style={{ color: "#9A9AA9", fontSize: "30px" }}
            ></i>
            
          </div>
        </div>
        <div>
          <div className="upload-container">
            <div className="upload-rectangle">
              <div className="up-ex">
                <img src={excel} alt="" />
              </div>
              {isLoading ? (
                <>
                  <p>upload-template.xlsx</p>
                  <p style={{ color: "red" }}>Remove</p>
                  <div className="loader"></div>
                </>
              ) : (
                <p>
                  Drop your excel sheet here or <samp>browse</samp>
                </p>
              )}
            </div>
          </div>

          <button
            className={`Upload-button ${isLoading ? "loading" : ""} ${
              isBlurred ? "blurred" : ""
            }`}
            onClick={handleUpload}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i
                  class="bx bx-loader-alt"
                  style={{
                    color: "#fff",
                    fontSize: "14px",
                    marginRight: "20px",
                  }}
                ></i>
                <div className="loader"></div>
              </>
            ) : (
              <>
                <i
                  className="bx bx-upload"
                  style={{
                    color: "#fff",
                    fontSize: "14px",
                    marginRight: "5px",
                  }}
                ></i>
                Upload
              </>
            )}
          </button>
        </div>

        <div style={{ width: "100%" }}>{isBlurred && <TableElement />}</div>
      </div>
    </div>
  );
};

export default Upload;
