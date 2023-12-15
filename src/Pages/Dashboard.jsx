import axios from "axios";
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const token = localStorage.getItem("token");
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://revision2backend.onrender.com/employees`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Include other headers as needed
          },
        }
      );
      const data = await response.data;
      // console.log(data)
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  useEffect(() => {
    fetchData();
  }, []);
//console.log(employees)
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl text-yellow-400 font-bold mb-24">Employee Dashboard</h1>
      <table className="  border-gray-300">
        <thead className="w-screen">
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td className="py-2 px-4 border-b">{employee._id}</td>
              <td className="py-2 px-4 border-b">{employee.firstname}</td>
              <td className="py-2 px-4 border-b">{employee.email}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
