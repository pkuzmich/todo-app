import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, deleteTodo }) {
  return (
    <li className={styles.item} onDoubleClick={() => deleteTodo(todo.id)}>
      <RiTodoFill className={styles.itemIcon} />
      <span className={styles.itemText}>{todo.text}</span>
      <RiDeleteBin2Line className={styles.deleteIcon} />
      <FaCheck className={styles.checkIcon} />
    </li>
  );
}
