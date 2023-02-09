import "./app.css";
import useFetch from "react-fetch-hook";
export const api = "http://127.0.0.1:6969/api";
export function App() {
  const filenames = useFetch(`${api}/getFilenames`).data as string[];
  return (
    <>
      <header>Guttersnipe</header>
      <main>
        {filenames?.map((f) => (
          <div>{f}</div>
        ))}
      </main>
    </>
  );
}
