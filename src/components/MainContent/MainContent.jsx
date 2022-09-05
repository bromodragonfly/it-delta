import { getAllPictures, getModalPicture } from "../../api/api";
import { useEffect, useState } from "react";
import { MainPicturesList } from "../MainPictures/MainPicturesList";
import { ModalWindow } from "../Modal/ModalWindow";

export const MainContent = () => {
  const [pictures, setPictures] = useState([]);
  const [modalActive, setmodalActive] = useState(false);
  const [modalPicture, setModalPicture] = useState({});
  useEffect(() => {
    getAllPictures().then((res) => setPictures(res));
  }, []);
  const openModalHandler = () => {
    setmodalActive(true);
  };

  useEffect(() => {
    return setModalPicture({});
  }, [modalActive]);

  const getModalPictureHandler = async (id) => {
    try {
      const res = await getModalPicture(id);
      setModalPicture(res);
    } catch (error) {
      return "";
    }
  };

  return (
    <>
      <ModalWindow
        active={modalActive}
        setActive={setmodalActive}
        getModalPictureHandler={getModalPictureHandler}
        modalPicture={modalPicture}
      />

      <div className="main">
        <MainPicturesList
          getModalPictureHandler={getModalPictureHandler}
          picturesList={pictures}
          openModalHandler={openModalHandler}
        />
      </div>
    </>
  );
};
