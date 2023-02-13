export const api = "http://127.0.0.1:1338/api";
export interface SchemaProperty {
  name: string;
  type: string;
  description?: string;
}
export interface Schema {
  properties: SchemaProperty[];
}
// SchemaProperty + value
export interface EntryField extends SchemaProperty {
  value?: any;
}
// export const parseSchema = (schema: any): Schema[] => {
//   if (!schema) return [];
//   return Object.keys(schema).map((key: string) => {
//     return {
//       name: key,
//       type: schema[key],
//     } as Schema;
//   });
// };
//
export const parseEntryToSchemaFields = (
  entry: any,
  schema: Schema
): EntryField[] => {
  if (!entry || !schema) {
    console.log("!! No entry / schema");
    return [];
  }
  const fields = Object.keys(schema.properties).map((key: string) => {
    const property = schema.properties[key as any];
    return {
      name: key,
      type: property.type,
      value: entry[key],
      description: property.description,
    };
  });
  // gonna make each entry as its own form!
  // { "title": "foo" } =>
  // [ { "title": "foo",
  //      "type": "text" } ]
  // const fields = schema.properties.map((field) => {
  //   return {
  //     ...field,
  //     value: entry[field.name],
  //   };
  // });
  // [ { "textField": "text stuff", } ] ->
  return fields;
};
export const inputElementTypes = [
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "email",
  // "file",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week",
];
