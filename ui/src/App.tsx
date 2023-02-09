import "./app.scss";
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
import { Files } from "./files";
import { File } from "./files/view";
//
export function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Guttersnipe</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Files />} />
          <Route path="/file/:filename" element={<File />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
