import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';

export default function TodosActions({ resetTodos, deleteCompletedTodos }) {
  return (
    <div className={styles.actionsContainer}>
      <Button title="Reset all tasks" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title="Delete all completed tasks" onClick={deleteCompletedTodos}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}
