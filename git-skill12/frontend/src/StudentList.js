import React, { useEffect, useState } from "react";
import API from "./api";

function StudentList({ onEdit, refresh }) {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await API.get("/");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, [refresh]);

  const deleteStudent = async (id) => {
    await API.delete(`/${id}`);
    fetchStudents();
  };

  return (
    <div>
      <h2>Student List</h2>

      {students.map((s) => (
        <div key={s.id}>
          {s.name} | {s.email} | {s.course}

          <button onClick={() => onEdit(s)}>Edit</button>
          <button onClick={() => deleteStudent(s.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;