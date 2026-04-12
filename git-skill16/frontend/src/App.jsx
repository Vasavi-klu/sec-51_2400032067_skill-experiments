import { useCallback, useState } from 'react';
import AddStudent from './components/AddStudent.jsx';
import StudentList from './components/StudentList.jsx';

export default function App() {
  const [listVersion, setListVersion] = useState(0);
  const [editingStudent, setEditingStudent] = useState(null);

  const refreshList = useCallback(() => {
    setListVersion((v) => v + 1);
  }, []);

  return (
    <>
      <h1>Student Management</h1>
      <AddStudent
        onSuccess={refreshList}
        editingStudent={editingStudent}
        onCancelEdit={() => setEditingStudent(null)}
      />
      <StudentList
        listVersion={listVersion}
        onRefresh={refreshList}
        onEdit={setEditingStudent}
      />
    </>
  );
}
