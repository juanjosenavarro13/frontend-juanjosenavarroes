import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface QuillProps {
  value: string | undefined;
}

export function QuillEditor({ value = "" }: Readonly<QuillProps>) {
  const modules = {
    toolbar: {
      container: [
        [{ font: [] }],
        [{ size: [] }],
        [{ header: "1" }, { header: "2" }],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["bold", "italic", "underline", "strike"],
        ["link", "image", "video"],
        ["clean"],
      ],
    },
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <ReactQuill
      value={value}
      modules={modules}
      formats={[
        "font",
        "size",
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "code-block",
        "list",
        "bullet",
        "script",
        "sub",
        "super",
        "indent",
        "direction",
        "color",
        "background",
        "align",
        "link",
        "image",
        "video",
      ]}
    />
  );
}
