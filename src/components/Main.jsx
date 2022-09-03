// ! не забудь обнулять стейт большой фотки в редюсере (в ретёрне Юз Эфекта)
import { getAllPictures } from "../api";
import { useEffect, useState } from "react";
import { MainPicturesList } from "./MainPictures/MainPicturesList";
import { ModalWindow } from "./Modal/ModalWindow";

export function Main() {
  const [pictures, setPictures] = useState([]);
  const [modalActive, setmodalActive] = useState(false);
  useEffect(() => {
    getAllPictures().then((res) => setPictures(res));
  }, []);
  const openModalHandler = () => {
    setmodalActive(true);
  };
  return (
    <>
      <ModalWindow active={modalActive} setActive={setmodalActive} />

      <div className="main">
        <MainPicturesList
          picturesList={pictures}
          openModalHandler={openModalHandler}
        />
      </div>
    </>
  );
}
