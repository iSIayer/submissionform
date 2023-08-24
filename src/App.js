import { useState } from "react";
import { FormInput } from "./components/FormInput/FormInput.jsx";
import { DataTable } from "./components/DataTable/DataTable.jsx"; // Импортируйте компонент DataTable
import { inputs } from "./inputs/inputs.js";
import "./App.css";

export const App = () => {
  const [values, setValues] = useState({
    username: "",
    id: "",
    department: "",
    employment_status: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { ...values };

    const savedData = JSON.parse(localStorage.getItem("formData")) || [];
    savedData.push(formData);
    localStorage.setItem("formData", JSON.stringify(savedData));
    setValues({
      username: "",
      id: "",
      department: "",
      employment_status: "",
      email: "",
    });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Submission Form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
      <DataTable />
    </div>
  );
};
