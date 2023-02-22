import { useState } from "react";
import EditBook from "./EditBook";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = (
    <div>
      <h3>{book.title}</h3>
    </div>
  );
  if (showEdit) {
    content = <EditBook onSubmit={handleSubmit} onEdit={onEdit} book={book} />;
  }

  return (
    <div className="book-show">
      <img alt="pics" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div> {content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default BookShow;
