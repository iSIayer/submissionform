export const inputs = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Username",
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special character!",
    label: "Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: 2,
    name: "id",
    type: "text",
    placeholder: "ID",
    errorMessage:
      "ID should be 3-16 characters and shouldn't include any special character!",
    label: "ID",
    pattern: "^[A-Za-z0-9]{1,26}$",
    required: true,
  },
  {
    id: 3,
    name: "department",
    type: "text",
    placeholder: "Department",
    errorMessage:
      "Department should be 1-40 characters and shouldn't include any special character!",
    label: "Department",
    pattern: "^[A-Za-z0-9]{1,40}$",
    required: false,
  },
  {
    id: 4,
    name: "employment_status",
    type: "select",
    placeholder: "Employment Status",
    errorMessage:
      "Department should be 1-40 characters and shouldn't include any special character!",
    label: "Employment Status",
    options: ["Select an option", "Unemployed", "Working", "Student"],
    required: true,
  },
  {
    id: 5,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "It should be a valid email address!",
    label: "Email",
    required: true,
  },
  {
    id: 6,
    name: "resume",
    type: "file",
    placeholder: "Upload CV",
    label: "Upload Resume",
    required: false,
  },
];
