import { lazy, Suspense, useEffect } from "react";

const ReactQuill = lazy(() => import("react-quill"));

interface EditorProps {
  value: string | undefined;
  onChange: (value: string) => void;
}

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "background",
];

export function QuillEditor({ value, onChange }: Readonly<EditorProps>) {
  useEffect(() => {
    import("react-quill/dist/quill.snow.css");
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
    </Suspense>
  );
}
