import React, { useState } from "react";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";

function App() {
  const [selected, setSelected] = useState(null);
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <AddStudent
        selected={selected}
        refresh={() => setRefresh(!refresh)}
      />

      <StudentList
        onEdit={setSelected}
        refresh={refresh}
      />
    </div>
  );
}

export default App;