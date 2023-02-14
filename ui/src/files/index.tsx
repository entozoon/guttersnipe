import useFetch from "react-fetch-hook";
import { Link } from "react-router-dom";
import { api } from "../data";
//
export const FilesIndex = () => {
  const filenames = useFetch(`${api}/getFilenames`).data as string[];
  return (
    <>
      <header>
        <Link to="/">Guttersnipe</Link>
        <h1>Data Files</h1>
      </header>
      <ul>
        {filenames?.map((f, i) => (
          <li key={`file-${i}`}>
            <Link to={`/file/${f}/`}>{f}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
