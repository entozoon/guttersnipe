import ky from "ky";
export const doAllTheThings = async () => {
  const schema: any = await ky.get("/api/schema").json();
  const urlFragments = window.location.pathname.split("/");
  const i = urlFragments[2]; // id index
  const mode = i ? "update" : "create";
  //
  let data: any;
  if (mode == "update") {
    const i = parseInt(urlFragments[2]);
    data = await ky
      .get(`/api/posts/${i}`)
      .json()
      .catch((err) => {
        console.log(err);
        console.log(err.message);
        console.log(err.response.body);
      });
    console.log({ schema, data });
  }
  // Use schema to create form
  const form = document.createElement("form");
  // form.method = mode == "update" ? "PUT" : "POST";
  // form.action = `/api/posts${mode == "update" ? `/${i}` : ""}`;
  const formElements = schema.map((s: any) => {
    const el = document.createElement("input");
    el.id = s.id;
    el.type = s.type;
    if (mode == "update") {
      el.value = data[s.id];
    }
    return el;
  });
  formElements.forEach((el: any) => {
    form.appendChild(el);
  });
  const submit = document.createElement("input");
  submit.type = "submit";
  form.appendChild(submit);
  document.body.appendChild(form);
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // Get current form field values
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    // Not sure why this isn't working ^^^
    // const data = new FormData(form);
    // const json = Object.fromEntries(data.entries());
    // console.log(data.entries(), { json });
    // console.log(data);
    // Get field data from form
    // console.log({ json });
    // const response = await ky.post(form.action, { json }).json();
    // console.log({ response });
  });
};
doAllTheThings();
