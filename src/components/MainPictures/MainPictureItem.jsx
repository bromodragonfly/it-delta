import { getBigPicture, postComment } from "../../api";
export const MainPictureItem = (props) => {
  const { id, url, style, openModalHandler = Function.prototype } = props;

  const getBigPictureHandler = (id) => {
    getBigPicture(id).then((res) => console.log(res));
  };

  const postCommentHandler = (text) => {
    postComment(id, text);
  };
  if (style) {
    return (
      <div
        className="card firstElem"
        onClick={() => {
          openModalHandler();
        }}
      >
        <img src={url} alt="pictures" />
        <p style={{ marginTop: "8px" }}>id: {id}</p>
      </div>
    );
  } else {
    return (
      <div
        className="card"
        onClick={() => {
          openModalHandler();
        }}
      >
        <img src={url} alt="pictures" />
        <p style={{ marginTop: "8px" }}>id: {id}</p>
      </div>
    );
  }
};
