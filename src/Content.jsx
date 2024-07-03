import { Modal } from "./Modal"
import { StudentsShow } from "./StudentsShow";
import { useState } from "react";

export function Content() {
  const [isStudentShowVisible, setIsStudentShowVisible] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({});

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
      <Modal show={isStudentShowVisible} onClose={handleClose}>
        <StudentsShow student={currentStudent} />
      </Modal>
    </main>
  )
}
