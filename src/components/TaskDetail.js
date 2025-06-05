import { useParams, Link, useNavigate } from 'react-router-dom';

const TaskDetail = ({ tasks, deleteTask }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return (
      <div className="container mt-5 text-center">
        <h2 className="text-danger">Tâche non trouvée</h2>
        <Link to="/" className="btn btn-secondary mt-4">← Retour à la liste</Link>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm("Es-tu sûr de vouloir supprimer cette tâche ?")) {
      deleteTask(id);
      navigate("/");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">{task.title}</h2>
      <div className="alert alert-info">{task.description}</div>

      <Link to="/" className="btn btn-primary me-2">Retour à la liste</Link>

    
      <Link to={`/modifier/${task.id}`} className="btn btn-warning me-2"> Modifier</Link>

      <button onClick={handleDelete} className="btn btn-danger"> Supprimer</button>
    </div>
  );
};

export default TaskDetail;
