const API_URL = "https://boiling-refuge-66454.herokuapp.com/images/";

const getAllPictures = async () => {
  const result = await fetch(API_URL);
  return result.json();
};
const getBigPicture = async (id) => {
  const result = await fetch(API_URL + `:${id}`);
  return result.json();
};
const postComment = async (id, text) => {
  await fetch(API_URL + `:${id}/comments`, {
    method: "POST",
    body: JSON.stringify({ text }),
  });
};

export { getAllPictures, getBigPicture, postComment };
