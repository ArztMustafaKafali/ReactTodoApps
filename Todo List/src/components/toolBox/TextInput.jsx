import React from "react";

const TextInput = ({ name, value, onChange, error, label, placeholder }) => {
  return (
    <div>
        <label htmlFor={name}> {label} </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type="text"
        className="form-control"
        placeholder = {placeholder}
      ></input>
      {error && <div className="alert alert-danger"> {error} </div>}
    </div>
  );
};

export default TextInput;
