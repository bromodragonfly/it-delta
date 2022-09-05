export const MainPictureItem = (props) => {
  const {
    id,
    url,
    openModalHandler = Function.prototype,
    getModalPictureHandler = Function.prototype,
  } = props;

  return (
    <div
      className="card"
      onClick={() => {
        openModalHandler();
        getModalPictureHandler(id);
      }}
    >
      <img className="images_card" src={url} alt="pictures" />
      <p style={{ marginTop: "8px" }}>id: {id}</p>
    </div>
  );
};
