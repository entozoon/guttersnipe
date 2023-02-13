import { useEffect } from "react";
import useFetch from "react-fetch-hook";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import {
  api,
  inputElementTypes,
  parseEntryToSchemaFields,
  Schema,
} from "../data";
import { startCase } from "lodash";
//
export default () => {
  const { control, handleSubmit, getValues, setValue } = useForm();
  const filename = useParams<{ filename: string }>().filename;
  const schema = useFetch(`${api}/getSchema/${filename}`).data as Schema;
  const entriesFields = (
    useFetch(`${api}/getFile/${filename}`).data as []
  )?.map((d) => parseEntryToSchemaFields(d, schema));
  console.log(":: ~ entriesFields", entriesFields);
  if (!schema && !entriesFields) {
    return <>Couldn't find schema or parse data against it</>;
  }
  const submit = (values: FieldValues) => {
    console.log(":: ~ values", values);
    // right, how the fuck do I submit this mother?
  };
  return (
    <>
      <header>
        <Link to="/">Guttersnipe</Link>
        <h1>{filename}</h1>
      </header>
      {entriesFields?.map((entry, i) => (
        <form
          key={`entry-${i}`}
          onSubmit={handleSubmit((_data) => submit(_data))}
        >
          {entry?.map((entry) => (
            <Controller
              name={`${i}.${entry.name}`}
              key={`${i}.${entry.name}`}
              control={control}
              defaultValue={entry.value}
              render={({ field }) => (
                <section>
                  <label>{startCase(entry.name)}</label>
                  {entry.description && <p>{entry.description}</p>}
                  {inputElementTypes.includes(entry.type) && (
                    <input {...field} type={entry.type} />
                  )}
                  {["textarea"].includes(entry.type) && <textarea {...field} />}
                </section>
              )}
            />
          ))}
          <button type="submit">Save</button>
        </form>
      ))}
    </>
  );
};
