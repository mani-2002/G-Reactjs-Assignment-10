import React, { useState } from "react";
import "../App.css";
import prof from "../images/icon.jpg";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function formatDate(inputDate) {
  const options = { year: "numeric", month: "short", day: "2-digit" };

  return new Date(inputDate).toLocaleDateString(undefined, options);
}

function formatTime(inputTime) {
  const options = { hour: "numeric", minute: "numeric", hour12: true };

  return new Date(`1970-01-01T${inputTime}`).toLocaleTimeString(
    undefined,
    options
  );
}

function Table({ tableData, onEdit, onDelete }) {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null);
    } else {
      setOpenDropdownIndex(index);
    }
  };

  return (
    <div>
      <div className="main-content">
        <div className="container">
          <br />
          <br />
          <table className="table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Status</th>
                <th>Appointment</th>
                <th>Phone</th>
                <th>Doctor</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                const isDropdownOpen = openDropdownIndex === index;
                return (
                  <tr key={index}>
                    <td>
                      <div className="user-info">
                        <div className="user-info__img">
                          <img src={prof} alt="User Img" />
                        </div>
                        <div className="user-info__basic">
                          <h5 className="mb-0">{data.patientName}</h5>
                          <p className="text-muted mb-0">
                            {data.age}yrs, {data.gender}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span
                        className={`btn btn-success ${
                          data.status === "Consult"
                            ? "bg-success"
                            : "bg-primary"
                        }`}
                      >
                        {data.status}
                      </span>
                    </td>
                    <td>
                      <h6 className="mb-0">{formatTime(data.time)}</h6>
                      <small>{formatDate(data.date)}</small>
                    </td>
                    <td>
                      <h6 className="mb-0">+91 {data.phoneNumber}</h6>
                      <a href="#!">
                        <small>Contact</small>
                      </a>
                    </td>
                    <td>
                      <h6 className="mb-0">Dr. {data.doctorName}</h6>
                    </td>

                    <td>
                      <div
                        className={`dropdown `} //${isDropdownOpen ? "show" : ""}
                      >
                        <a
                          href="#!"
                          className="px-2"
                          id={`triggerId${index}`}
                          onClick={() => toggleDropdown(index)}
                        >
                          <i className="fa fa-ellipsis-v"></i>
                        </a>

                        {/* dropdown */}
                        <div
                          className={`dropdown-menu ${
                            isDropdownOpen ? "show" : ""
                          }`}
                          aria-labelledby={`triggerId${index}`}
                        >
                          <a
                            className="dropdown-item"
                            onClick={() => {
                              onEdit(data, index);
                              setOpenDropdownIndex(null);
                            }}
                          >
                            <i className="fa fa-pencil mr-1"></i> Edit
                          </a>
                          <a
                            className="dropdown-item text-danger"
                            onClick={() => {
                              onDelete(index);
                              setOpenDropdownIndex(null);
                            }}
                          >
                            <i className="fa fa-trash mr-1"></i> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
