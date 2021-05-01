import React from "react";

// types of validation
const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email valido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A sua senha deve conter 8 caracteres sendo ao menos 1 letra maiúscula, 1 letra mínuscula e 1 número",
  },
};
const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");
  function validate(value) {
    if (type === false) {
      return true;
    }
    if (value.length === 0) {
      setError("Preencha um valor!");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      // it checks if the type of validation exists and if the value doesnt match with the regex
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }
  const onChange = ({ target }) => {
    if (error) {
      validate(target.value);
    }
    setValue(target.value);
  };
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}

export default useForm;
