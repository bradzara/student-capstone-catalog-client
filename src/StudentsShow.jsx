export function StudentsShow(props) {
  return (
    <div>
      <h1>Student information</h1>
      <p>Name: {props.student.name}</p>
    </div>
  );
}