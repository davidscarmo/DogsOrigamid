import React from "react";
import { Link } from "react-router-dom";
import { TOKEN_POST, USER_GET } from "../../api";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";

const LoginForm = () => {
  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if(token)
    {
      getUser(token);
    }
  }, []);
  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  };
  const username = useForm();
  const password = useForm();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(username.value);
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      const reponse = await fetch(url, options);
      const json = await reponse.json();
      window.localStorage.setItem("token", json.token); // stores token in localStorage
      getUser(json.token);
    }
  };
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button> Entrar </Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
