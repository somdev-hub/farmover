import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const Editor = ({ data, setData }) => {
  const [value, setValue] = useState(data);

  const handleChange = (content, delta, source, editor) => {
    setValue(content);
    setData(editor.getContents());
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6] }, { font: [] }],

      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      ["link", "image", "video"],
      ["clean"]
    ],
    clipboard: {
      // Toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    }
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
    "video"
  ];

  return (
    <div>
      <ReactQuill
        value={value}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder="Compose an epic..."
        theme="snow"
      />
    </div>
  );
};

export default Editor;
