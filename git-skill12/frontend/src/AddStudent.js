import React, { useState, useEffect } from "react";
import API from "./api";

function AddStudent({ selected, refresh }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  useEffect(() => {
    if (selected) setStudent(selected);
  }, [selected]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (student.id) {
      await API.put(`/${student.id}`, student);
    } else {
      await API.post("/", student);
    }

    setStudent({ name: "", email: "", course: "" });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add / Update Student</h2>

      <input
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={student.email}
        onChange={handleChange}
      />

      <input
        name="course"
        placeholder="Course"
        value={student.course}
        onChange={handleChange}
      />

      <button type="submit">Save</button>
    </form>
  );
}

export default AddStudent;