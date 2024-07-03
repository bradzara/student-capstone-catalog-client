export function StudentsShow(props) {
  return (
    <div>
      <h1>Student information</h1>
      <p>Name: {props.student.first_name} {props.student.last_name}</p>
      {/* <p>{props.student.capstone.title}</p>
      <p>{props.student.capstone.description}</p>
      <p>{props.student.capstone.image}</p> */}
    </div>
  );
}