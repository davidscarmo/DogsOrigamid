import React from "react";
import { PHOTOS_GET } from "../../Api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import FeedPhotosItem from "./FeedPhotosItem";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ user, page, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const fetchPhotos = async () => {
      const total = 6; 
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      console.log('Request: ' + json);
      if (response && response.ok && json.length < 6) setInfinite(false);
    };
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => {
          return (
            <FeedPhotosItem
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          );
        })}
      </ul>
    );
  } else return null;
};

export default FeedPhotos;
