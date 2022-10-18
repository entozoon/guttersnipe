import ky from "ky";
export const doAllTheThings = async () => {
  console.log("::doAllTheThings");

  const data: any = await ky
    .get("/api/posts")
    .json()
    .catch((err) => {
      console.log(err);
      console.log(err.message);
      console.log(err.response.body);
    });
  console.log("🚀", data);
  const postsElement = document.getElementById("posts");
  // Create listing element for each data
  const postsElements = data.map((l, i) => {
    const el = document.createElement("a");
    el.innerText = l.name;
    el.href = "/posts/" + i;
    return el;
  });
  // Append listing elements to posts element
  postsElements.forEach((listingElement) => {
    postsElement.appendChild(listingElement);
  });
};
doAllTheThings();
