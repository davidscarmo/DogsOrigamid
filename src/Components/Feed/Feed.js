import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";
import PropTypes from "prop-types";
const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1, 2, 3]);
  const [inifite, setInifite] = React.useState(true);
  // inifite scroll effect activated by scrolling the page and mouse wheel
  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (inifite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        console.log(scroll);
        console.log(height);
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [inifite]);
  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          user={user}
          key={page}
          page={page}
          setModalPhoto={setModalPhoto}
          setInifite={setInifite}
        />
      ))}
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
}; 

Feed.propType = {
  user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
}
export default Feed;
