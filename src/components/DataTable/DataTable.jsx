import { useEffect, useState } from "react";
import "./DataTable.css";

export const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData")) || [];
    setData(savedData);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>ID</th>
          <th>Department</th>
          <th>Employment Status</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.username}</td>
            <td>{item.id}</td>
            <td>{item.department}</td>
            <td>{item.employment_status}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
