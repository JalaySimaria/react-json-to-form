import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const formJSON = {
  f_name: {
    label: "First Name",
    type: "input",
    validation: {
      regex: /\S/,
      message: "First name is required field."
    }
  },
  l_name: {
    label: "Last Name",
    type: "input",
    validation: {
      regex: /\S/,
      message: "Last name is required field."
    }
  },
  address: {
    label: "Address",
    type: "textarea",
    validation: {
      regex: /\S/,
      message: "Address is required field."
    }
  },
  city: {
    label: "City",
    type: "select",
    options: ["city 1", "city 2", "city 3"],
    validation: {
      regex: /\S/,
      message: "City is required field."
    }
  },
  gender: {
    label: "Gender",
    type: "radio",
    options: ["Male", "Female", "Other"],
    validation: {
      regex: /\S/,
      message: "Gender is required field."
    }
  },
  email: {
    label: "Email",
    type: "email",
    validation: {
      regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      message: "Invalid email address."
    }
  },
  onSubmit(json) {
    console.log("form submitted and returned JSON");
    console.log(JSON.stringify(json, null, "    "));
  }
};

ReactDOM.render(<App formJSON={formJSON} />, document.getElementById("root"));
