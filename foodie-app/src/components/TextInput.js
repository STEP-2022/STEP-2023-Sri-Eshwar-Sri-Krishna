import React from "react";
import "../styles/textInputStyles.css";

const TextInput = ({type, className, placeholder, value, onChange}) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={event => onChange(event)}
    />
  );
}

export default TextInput