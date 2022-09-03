import { MainPictureItem } from "./MainPictureItem";

export function MainPicturesList({ picturesList = [] }) {
  return (
    <div className="list">
      {picturesList.map((item) => {
        return <MainPictureItem key={item.id} {...item} />;
      })}
    </div>
  );
}
