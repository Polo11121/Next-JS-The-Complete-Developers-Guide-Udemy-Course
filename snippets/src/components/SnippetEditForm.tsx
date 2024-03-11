"use client";

import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { editSnippet } from "@/actions/snippets";
import { useRouter } from "next/navigation";
import type { Snippet } from "@prisma/client";

type SnippetEditFormProps = {
  snippet: Snippet;
};

export const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  const [code, setCode] = useState(snippet.code);
  const router = useRouter();

  const editSnippetAction = editSnippet.bind(null, snippet.id, {
    ...snippet,
    code,
  });

  const changeHandler = (value: string = "") => setCode(value);

  const goBackHandler = () => router.back();

  return (
    <form action={editSnippetAction} className="flex flex-col gap-2">
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{
          minimap: {
            enabled: false,
          },
        }}
        onChange={changeHandler}
      />
      <div className="flex items-center justify-end gap-2">
        <button
          className="p-2 border border-gray-400 rounded"
          onClick={goBackHandler}
        >
          Cancel
        </button>
        <button className="p-2 border border-gray-400 rounded" type="submit">
          Edit
        </button>
      </div>
    </form>
  );
};
