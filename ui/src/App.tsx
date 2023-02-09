import "./app.scss";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Files } from "./Files";
import { File } from "./File";
//
export function App() {
  return (
    <>
      <header>Guttersnipe</header>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Files />} />
            <Route path="/file/:filename" element={<File />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
