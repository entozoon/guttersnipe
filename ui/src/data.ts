export const api = "http://127.0.0.1:1338/api";
//
interface Schema {
  name: string;
  type: string;
}
export const parseSchema = (schema: any): Schema[] => {
  if (!schema) return [];
  return Object.keys(schema).map((key: string) => {
    return {
      name: key,
      type: schema[key],
    } as Schema;
  });
};
