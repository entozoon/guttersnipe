import { parseInterface } from "parse-interface";
import { useEffect } from "react";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import { api } from "../data";
//
export const File = () => {
  // useparams for filename
  const filename = useParams<{ filename: string }>().filename;
  const file = useFetch(`${api}/getFile/${filename}`).data as string[];
  const schema = useFetch(`${api}/getSchema/${filename}`).data as string[];
  useEffect(() => {
    console.log(":: ~ file", file);
    console.log(":: ~ schema", schema);
  }, [file, schema]);
  return (
    <>
      <h1>{filename}</h1>
    </>
  );
};
