import React, { useState } from "react";
import "./App.css";
import TopForm from "./components/TopForm";
import BottomTable from "./components/BottomTable";

function App() {
  const [editIndex, setEditIndex] = useState(null);
  const [mode, setMode] = useState("add");

  const [tableData, setTableData] = useState([
    {
      id: 1,
      patientName: "John Doe",
      gender: "Male",
      age: "28",
      phoneNumber: "9876543215",
      date: "02-02-2021",
      time: "18:00",
      doctorName: "Ananth",
      status: "Consult",
    },
    {
      id: 2,
      patientName: "Mukul Rao",
      gender: "Male",
      age: "28",
      phoneNumber: "9876543215",
      date: "02-02-2021",
      time: "18:00",
      doctorName: "Ananth",
      status: "Revisit",
    },
    {
      id: 3,
      patientName: "Neeraj Sharma",
      gender: "Male",
      age: "28",
      phoneNumber: "9876543215",
      date: "02-02-2021",
      time: "18:00",
      doctorName: "Ananth",
      status: "Consult",
    },
  ]);

  const [formInputData, setFormInputData] = useState({
    patientName: "",
    gender: "",
    age: "",
    phoneNumber: "",
    date: "",
    time: "",
    doctorName: "",
    status: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const editedAppointment = {
      id: editIndex !== null ? tableData[editIndex].id : Date.now(),
      patientName: formInputData.patientName,
      gender: formInputData.gender,
      age: formInputData.age,
      phoneNumber: formInputData.phoneNumber,
      date: formInputData.date,
      time: formInputData.time,
      doctorName: formInputData.doctorName,
      status: formInputData.status,
    };
  
    if (mode === "edit") {
      const updatedTableData = [...tableData];
      updatedTableData[editIndex] = editedAppointment;
      setTableData(updatedTableData);
      setEditIndex(null);
      setMode("add");
    } else {
      
      setTableData((prevTableData) => [...prevTableData, editedAppointment]);
    }
  
    setFormInputData({
      patientName: "",
      gender: "",
      age: "",
      phoneNumber: "",
      date: "",
      time: "",
      doctorName: "",
      status: "",
    });
  };

  


  const onEdit = (rowData, index) => {
    setFormInputData({ ...rowData });
    setEditIndex(index);
    setMode("edit");
  };

  const onDelete = (index) => {
    setTableData((prev) => {
      return prev.filter((_, currentIndex) => currentIndex !== index);
    });
  };

  return (
    <div>
      <TopForm
        handleChange={handleChange}
        formInputData={formInputData}
        handleSubmit={handleSubmit}
      />
      <BottomTable tableData={tableData} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

export default App;
