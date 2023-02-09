import "./app.scss";
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
import FilesIndex from "./files";
import FilesView from "./files/view";
//
export function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Guttersnipe</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<FilesIndex />} />
          <Route path="/file/:filename" element={<FilesView />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
