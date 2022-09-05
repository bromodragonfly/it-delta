import { MainPictureItem } from "./MainPictureItem";

export const MainPicturesList = ({
  picturesList = [],
  openModalHandler = Function.prototype,
  getModalPictureHandler = Function.prototype,
}) => {
  if (!picturesList.length) {
    return <div>Идет загрузка фотографий...</div>;
  } else {
    return (
      <div className="list">
        {picturesList.map((item) => {
          return (
            <MainPictureItem
              key={item.id}
              {...item}
              openModalHandler={openModalHandler}
              getModalPictureHandler={getModalPictureHandler}
            />
          );
        })}
      </div>
    );
  }
};
