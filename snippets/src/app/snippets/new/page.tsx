"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { createSnippet } from "@/actions/snippets";
import { Editor } from "@monaco-editor/react";

const NewSnippetPage = () => {
  const [code, setCode] = useState("");
  const [formState, action] = useFormState(createSnippet.bind(null, code), {
    message: "",
  });

  const changeHandler = (value: string = "") => setCode(value);

  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4 ">
        <div className="flex gap-2 flex-col">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            name="title"
            id="title"
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <Editor
            height="40vh"
            theme="vs-dark"
            language="javascript"
            value={code}
            options={{
              minimap: {
                enabled: false,
              },
            }}
            onChange={changeHandler}
          />
        </div>
        {formState.message && (
          <div className="text-red-500">{formState.message}</div>
        )}
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
};

export default NewSnippetPage;
