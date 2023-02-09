import useFetch from "react-fetch-hook";
import { api } from "./data";

export const Files = () => {
  const filenames = useFetch(`${api}/getFilenames`).data as string[];
  return (
    <>
      {filenames?.map((f) => (
        <div>{f}</div>
      ))}
    </>
  );
};
