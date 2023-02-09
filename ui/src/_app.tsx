import "./app.css";
import useFetch from "react-fetch-hook";
import { Routes, Route } from "react-router-dom";
export const api = "http://127.0.0.1:1338/api";
export function App() {
  const filenames = useFetch(`${api}/getFilenames`).data as string[];
  return (
    <>
      <header>Guttersnipe</header>
      <main>
        <Routes>
          <Route path="/" element={<div>Welcome</div>} />
        </Routes>
        {filenames?.map((f) => (
          <div>{f}</div>
        ))}
      </main>
    </>
  );
}
