import useFetch from "react-fetch-hook";
import { Link } from "react-router-dom";
import { api } from "../data";
//
export default () => {
  const filenames = useFetch(`${api}/getFilenames`).data as string[];
  return (
    <>
      <h1>Data Files</h1>
      <ul>
        {filenames?.map((f, i) => (
          <li>
            <Link key={`file-${i}`} to={`/file/${f}/`}>
              {f}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
