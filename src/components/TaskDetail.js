import { useParams, Link } from 'react-router-dom';
import { tasks } from '../data';

const TaskDetail = () => {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return (
      <div className="container mt-5 text-center">
        <h2 className="text-danger"> Tâche non trouvée</h2>
        <Link to="/" className="btn btn-secondary mt-4">← Retour à la liste</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-3">{task.title}</h2>
      <div className="alert alert-info">{task.description}</div>
      <Link to="/" className="btn btn-primary mt-4">← Retour à la liste</Link>
    </div>
  );
};

export default TaskDetail;
