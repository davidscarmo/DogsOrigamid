import React from "react";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import { USER_POST } from "../../Api";
import { UserContext } from "../../UserContext";
const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  const { userLogin } = React.useContext(UserContext);

  const handleSubmit = async (event) => {
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    event.preventDefault();
    const response = await fetch(url, options);
    if (response.ok) {
      userLogin(username.value, password.value);
    }
  };
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastra-se</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
