import "./app.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Files } from "./Files";
export function App() {
  return (
    <>
      <header>Guttersnipe</header>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Files />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
