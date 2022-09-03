import { MainPictureItem } from "./MainPictureItem";

export function MainPicturesList({
  picturesList = [],
  openModalHandler = Function.prototype,
}) {
  const styleHandler = { style: true };
  return (
    <div className="list">
      {picturesList.map((item) => {
        if (picturesList.indexOf(item) > 2) {
          return (
            <MainPictureItem
              key={item.id}
              {...item}
              style={styleHandler}
              openModalHandler={openModalHandler}
            />
          );
        } else {
          return (
            <MainPictureItem
              key={item.id}
              {...item}
              openModalHandler={openModalHandler}
            />
          );
        }
      })}
    </div>
  );
}
