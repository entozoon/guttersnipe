import "./App.scss";
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
import FilesIndex from "./files";
import FilesView from "./files/view";
//
export function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<FilesIndex />} />
          <Route path="/file/:filename" element={<FilesView />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
