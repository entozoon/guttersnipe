import { useEffect } from "react";
import useFetch from "react-fetch-hook";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { api, parseSchema } from "../data";
//
export default () => {
  const { control, handleSubmit, getValues, setValue } = useForm();
  const filename = useParams<{ filename: string }>().filename;
  const dataFile = useFetch(`${api}/getFile/${filename}`).data as any[];
  const schema = parseSchema(
    useFetch(`${api}/getSchema/${filename}`).data as string[]
  );
  useEffect(() => {
    console.log(":: ~ dataFile", dataFile);
    console.log(":: ~ schema", schema);
  }, [dataFile, schema]);
  if (!dataFile && !schema) {
    return <>Couldn't find both data and schema for </>;
  }
  return (
    <>
      <h1>{filename}</h1>
      <form onSubmit={handleSubmit((data) => console.log(":: ~ data", data))}>
        {dataFile?.map((e, i) => (
          <fieldset key={`entry-${i}`}>
            {schema?.map((s, j) => (
              <div key={`e-${i}-f-${j}`}>
                <Controller
                  name={`e-${i}-f-${j}`}
                  control={control}
                  defaultValue={e[j]}
                  render={({ field }) => (
                    <>
                      <label>{s.name}</label>
                      <input
                        {...field}
                        type={s.type}
                        defaultValue={e[s.name]}
                      />
                    </>
                  )}
                />
              </div>
            ))}
          </fieldset>
        ))}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
