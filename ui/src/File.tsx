import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import { api } from "./data";
//
export const File = () => {
  // useparams for filename
  const filename = useParams<{ filename: string }>().filename;
  const file = useFetch(`${api}/getFile`).data as string[];
  return (
    <>
      <h1>{filename}</h1>
      {JSON.stringify(file)}
    </>
  );
};
