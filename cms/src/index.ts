import ky from "ky";
export const doAllTheThings = async () => {
  const json = await ky.get("/api").json();
  console.log(json);
};
doAllTheThings();
