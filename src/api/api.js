const API_URL = "https://boiling-refuge-66454.herokuapp.com/images/";

const getAllPictures = async () => {
  const result = await fetch(API_URL);
  return result.json();
};
const getModalPicture = async (id) => {
  const result = await fetch(API_URL + `${String(id)}`);
  return result.json();
};
const postComment = async (id, text) => {
  await fetch(API_URL + `${id}/comments`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Roman Kushchev", comment: text }),
  });
};

export { getAllPictures, getModalPicture, postComment };
