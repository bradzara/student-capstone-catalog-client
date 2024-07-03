import axios from "axios";
import { Modal } from "./Modal"
import { StudentsIndex } from "./StudentsIndex";
import { StudentsShow } from "./StudentsShow";
import { useState, useEffect } from "react";

export function Content() {
  const [isStudentShowVisible, setIsStudentShowVisible] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({});

  const [students, setStudents] = useState([]);

  const handleIndexStudents = () => {
    console.log("handleIndexStudents");          
    axios.get("http://localhost:3000/students.json").then((response) => {
      console.log(response.data);
      setStudents(response.data);
    });
  };

  useEffect(handleIndexStudents, []);

  const handleShowStudent = (student) => {
    console.log("handleShowStudent", student);
    setIsStudentShowVisible(true);
    setCurrentStudent(student);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsStudentShowVisible("false");
  };
  
  return (
    <main>
      <StudentsIndex students={students} onShowStudent={handleShowStudent}/>
      <Modal show={isStudentShowVisible} onClose={handleClose}>
        <StudentsShow student={currentStudent} />
      </Modal>
    </main>
  )
}
