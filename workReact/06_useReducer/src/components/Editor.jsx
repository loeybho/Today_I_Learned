import "../css/Editor.css";
import { useRef, useState } from "react";

function Editor({ onCreate }) {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        onKeyDown={onKeydown}
        placeholder="Todo를 입력하세요"
        ref={contentRef}
        type="text"
        value={content}
        onChange={onChangeContent}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}

export default Editor;
