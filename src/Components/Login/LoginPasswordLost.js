import React from "react";
import { PASSWORD_LOST } from "../../Api";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Error from "../Helper/Error";

function LoginPasswordLost() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(login.validate())
    {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      const {json} = await request(url, options);
    }
  };
  return (
    <section>
      {data ? <p style={{color: '#4c1'}}>{data}</p> : 
      <form onSubmit={handleSubmit}>
      <h1 className="title">Perdeu a Senha </h1>
        <Input label="Email / Usuario" type="text" name="login" {...login} />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar Email</Button>
        )}
      </form>
}
      <Error error={error} />
    </section>
  );
}

export default LoginPasswordLost;
