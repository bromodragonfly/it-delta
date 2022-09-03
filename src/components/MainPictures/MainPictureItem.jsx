export const MainPictureItem = (props) => {
  const { id, url } = props;
  return (
    <div className="card">
      <img src={url} alt="s" />
      <p>id: {id}</p>
    </div>
  );
};
