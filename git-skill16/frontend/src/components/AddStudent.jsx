import { useEffect, useState } from 'react';
import axios from 'axios';
import { STUDENTS_API_URL } from '../config.js';

const emptyForm = { name: '', email: '', course: '' };

export default function AddStudent({ onSuccess, editingStudent, onCancelEdit }) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (editingStudent) {
      setForm({
        name: editingStudent.name ?? '',
        email: editingStudent.email ?? '',
        course: editingStudent.course ?? '',
      });
    } else {
      setForm(emptyForm);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      course: form.course.trim(),
    };
    if (!payload.name || !payload.email || !payload.course) {
      setError('Please fill in name, email, and course.');
      return;
    }
    try {
      if (editingStudent) {
        await axios.put(`${STUDENTS_API_URL}/${editingStudent.id}`, payload);
        onCancelEdit();
      } else {
        await axios.post(STUDENTS_API_URL, payload);
      }
      setForm(emptyForm);
      onSuccess();
    } catch {
      setError(editingStudent ? 'Update failed.' : 'Could not add student.');
    }
  };

  return (
    <section>
      <h2>{editingStudent ? 'Update student' : 'Add student'}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
        />
        <label htmlFor="course">Course</label>
        <input
          id="course"
          name="course"
          type="text"
          value={form.course}
          onChange={handleChange}
        />
        {error && <p className="error">{error}</p>}
        <div>
          <button type="submit">{editingStudent ? 'Save changes' : 'Add student'}</button>
          {editingStudent && (
            <button type="button" className="secondary" onClick={onCancelEdit}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
