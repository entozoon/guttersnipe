import ky from "ky";
import { useEffect } from "preact/hooks";
import "./app.css";
export function App() {
  useEffect(() => {
    (async () => {
      const posts = await ky.get("http://127.0.0.1:6969/api/posts").json();
      console.log(":: ~ posts", posts);
    })();
  }, []);
  return (
    <>
      <header>Guttersnipe</header>
      <main></main>
    </>
  );
}
