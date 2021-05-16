import React from "react";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Error from "../Helper/Error";
import { useNavigate } from "react-router-dom";
import { PASSWORD_RESET} from '../../Api';

function LoginPasswordReset() {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password.validate())
    {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  };
  return (
    <div>
      <h1 className="title">Reset a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar Senha</Button>
        )}
      </form>
      {error && <Error error={error} />}
    </div>
  );
}

export default LoginPasswordReset;
