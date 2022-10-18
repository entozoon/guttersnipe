import ky from "ky";
export const doAllTheThings = async () => {
  try {
    const json = await ky.get("/api/get").json();
    console.log(json);
  } catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.response.body);
  }
};
doAllTheThings();
