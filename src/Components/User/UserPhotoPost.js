import React from "react";
import styles from "./UserPhotoPost.module.css";
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';

import Input from '../Forms/Input';
import Button from '../Forms/Button';
const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const {data, error, loading, request} = useFetch();
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleImgChange = () => {
    
  }
  return <section className={`${styles.photoPhost} animeLeft`}>
    <form onSubmit={handleSubmit}>
    <Input label="Nome" type="text" name="nome"/>
    <Input label="Peso" type="text" name="peso"/>
    <Input label="Idade" type="text" name="idade"/>
    <input type="file" name="img" id="img" onChange={handleImgChange} />
    <Button>Enviar</Button>
    </form>
  </section>
};

export default UserPhotoPost;
