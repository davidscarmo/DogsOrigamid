import React from "react";
import { PHOTO_DELETE } from "../../Api";
import useFetch from "../../Hooks/useFetch";
import styles from "./PhotoDelete.module.css";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();
  const handleClick = async () => {
    const confirm = window.confirm("Tem certeza que deseja deletar a foto?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) {
        window.location.reload(); //after delete the photo this reloads the page
      }
    }
  };
  return (
    <>
      {loading ? <button className={styles.delete} disabled>
        Deletar
      </button> : <button onClick={handleClick} className={styles.delete}>
        Deletar
      </button> }
      
    </>
  );
};

export default PhotoDelete;
