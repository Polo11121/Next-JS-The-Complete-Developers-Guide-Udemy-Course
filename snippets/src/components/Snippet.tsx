"use client";

import { Editor } from "@monaco-editor/react";

type SnippetEditFormProps = {
  code: string;
};

export const Snippet = ({ code }: SnippetEditFormProps) => (
  <Editor
    options={{
      readOnly: true,
      minimap: {
        enabled: false,
      },
    }}
    value={code}
    height="40vh"
    theme="vs-dark"
    language="javascript"
    defaultValue={code}
  />
);
