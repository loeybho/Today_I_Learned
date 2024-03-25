import "../css/TodoItem.css";

function TodoItem({ id, isDone, content, date, onUpdate, onDelete }) {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      {/* 버튼 요소가 input이기 때문에 onClick이 아닌 onChange를 사용한다 */}
      <input onChange={onChangeCheckBox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}

export default TodoItem;
