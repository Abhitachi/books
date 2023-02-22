import { useState } from "react";

function EditBook({ book, onEdit, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onEdit(book.id, title);
    onSubmit();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="Button is-Primary">Save</button>
      </form>
    </div>
  );
}
export default EditBook;
