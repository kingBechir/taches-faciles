import { Link, NavLink } from 'react-router-dom';

const TaskList = ({ tasks }) => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Mes Todos</h1>

      {/* Bouton Ajouter une tâche */}
      <Link to="/ajouter" className="btn btn-primary mb-4">
         Ajouter une tâche
      </Link>

      <div className="list-group mb-4">
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

      {/* Bouton retour à l’accueil */}
    </div>
  );
};

export default TaskList;
