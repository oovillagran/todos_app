import styles from '@/styles/TodoItem.module.css';
import { useState, useRef } from 'react';

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  
  const editInputRef = useRef(null);
  // const [updateInput, setUpdateInput] = useState(itemProp.title);
  
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: '0.4',
    textDecoration: 'line-through',
  }

  const [editing, setEditing] = useState(false);
  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }


  const handleEditing = () => {
    setEditing(true);
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={handleEditing}>Edit</button>
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        ref={editInputRef}
        defaultValue={itemProp.title}
        // value={updateInput}
        className={styles.textInput}
        style={editMode}
        // onChange={(e) => setUpdateInput(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  ) 
};

export default TodoItem;