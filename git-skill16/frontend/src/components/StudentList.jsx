import { useEffect, useState } from 'react';
import axios from 'axios';
import { STUDENTS_API_URL } from '../config.js';

export default function StudentList({ listVersion, onRefresh, onEdit }) {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setError(null);
    axios
      .get(STUDENTS_API_URL)
      .then((res) => {
        if (!cancelled) {
          setStudents(res.data);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError('Could not load students. Is the backend running on port 8080?');
        }
      });
    return () => {
      cancelled = true;
    };
  }, [listVersion]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${STUDENTS_API_URL}/${id}`);
      onRefresh();
    } catch {
      setError('Delete failed.');
    }
  };

  return (
    <section>
      <h2>All students</h2>
      {error && <p className="error">{error}</p>}
      {students.length === 0 && !error ? (
        <p className="empty">No students yet. Add one using the form above.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.course}</td>
                <td className="actions">
                  <button type="button" className="warn" onClick={() => onEdit(s)}>
                    Update
                  </button>
                  <button type="button" className="danger" onClick={() => handleDelete(s.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
