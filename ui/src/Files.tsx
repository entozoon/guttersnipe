import useFetch from "react-fetch-hook";
import { Link } from "react-router-dom";
import { api } from "./data";
//
export const Files = () => {
  const filenames = useFetch(`${api}/getFilenames`).data as string[];
  return (
    <>
      <h1>Files</h1>
      {filenames?.map((f, i) => (
        <Link key={`file-${i}`} to={`/file/${f}`}>
          {f}
        </Link>
      ))}
    </>
  );
};
