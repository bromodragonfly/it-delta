// ! не забудь обнулять стейт большой фотки в редюсере (в ретёрне Юз Эфекта)
import { getAllPictures } from "../api";
import { useEffect, useState } from "react";
import { MainPicturesList } from "./MainPictures/MainPicturesList";
export function Main() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    getAllPictures().then((res) => setPictures(res));
  }, []);
  return (
    <div className="main">
      <MainPicturesList picturesList={pictures} />
    </div>
  );
}
