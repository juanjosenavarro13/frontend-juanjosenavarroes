// https://ckeditor.com/docs/ckeditor5/latest/getting-started/index.html
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "ckeditor5";

import "ckeditor5/ckeditor5.css";
import { CONFIG_EDITOR } from "./config-editor";

interface EditorProps {
  value: string | undefined;
  onChange: (value: string) => void;
}

export function Editor({ value = "", onChange }: Readonly<EditorProps>) {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{ ...CONFIG_EDITOR, initialData: value }}
      onChange={(_e, editor) => {
        onChange(editor.getData());
      }}
    />
  );
}
