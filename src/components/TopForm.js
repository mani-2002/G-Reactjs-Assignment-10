import React from "react";
import "../App.css";

function Form({ handleChange, formInputData, handleSubmit }) {
  return (
    <div>
      <div className="form-content">
        <div className="container register-form">
          <div className="form">
            <div className="note">
              <p>Welcome to Gradious Doctor Appointment Booking</p>
            </div>

            <form className="form-content" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      name="patientName"
                      type="text"
                      className="form-control"
                      placeholder="Patient Name *"
                      value={formInputData.patientName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      name="gender"
                      className="form-control"
                      placeholder="Select Male/Female *"
                      value={formInputData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option name="select" value="">
                        Male/Female
                      </option>
                      <option name="M" value="Male">
                        Male
                      </option>
                      <option name="F" value="Female">
                        Female
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      name="age"
                      type="text"
                      className="form-control"
                      placeholder="Age *"
                      value={formInputData.age}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      name="phoneNumber"
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number *"
                      value={formInputData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="date"
                      type="date"
                      className="form-control"
                      placeholder="Date *"
                      value={formInputData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="time"
                      type="time"
                      className="form-control"
                      placeholder="Time *"
                      value={formInputData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      name="doctorName"
                      type="text"
                      className="form-control"
                      placeholder="Doctor Name *"
                      value={formInputData.doctorName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      name="status"
                      className="form-control"
                      placeholder="Select Consule/Revisit *"
                      value={formInputData.status}
                      onChange={handleChange}
                      required
                    >
                      <option name="select" value="">
                        Consult/Revist
                      </option>
                      <option name="Consult" value="Consult">
                        Consult
                      </option>
                      <option name="Revisit" value="Revist">
                        Revisit
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <input
                type="submit"
                className="btnSubmit"
                value="book appointement"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
