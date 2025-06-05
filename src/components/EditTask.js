import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const EditTask = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const taskToEdit = tasks.find(task => task.id === id);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, title, description } : task
    );
    setTasks(updatedTasks);
    navigate('/');
  };

  if (!taskToEdit) {
    return <p className="container mt-5 text-danger">Tâche introuvable</p>;
  }

  return (
    <div className="container mt-5">
      <h2>Modifier la tâche</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Titre</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-warning me-2">Modifier </button> 

        <Link to="/" className="btn btn-secondary"> Retour à l’accueil</Link>
      </form>
    </div>
  );
};

export default EditTask;
