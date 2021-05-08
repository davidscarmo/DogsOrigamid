import React from "react";
import styles from "./PhotoComments.module.css";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);
  React.useEffect(() => {
    //set the position of the scroll at the bottom of the section 
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight; 
  }, [comments])
  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            {console.log(comment.comment_content)}
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
    </>
  );
};

export default PhotoComments;
