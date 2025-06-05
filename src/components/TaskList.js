import { NavLink } from 'react-router-dom';
import { tasks } from '../data';

const TaskList = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center"> Mes Tâches Journalier</h1>
      <div className="list-group">
        {tasks.map((task) => (
          <NavLink
            to={`/taches/${task.id}`}
            key={task.id}
            className="list-group-item list-group-item-action"
          >
            {task.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
