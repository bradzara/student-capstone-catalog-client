export function StudentsShow(props) {
  let student = props.student 
  console.log(student)
  
  return (
    <div>
      <h1>Student information</h1>
      <p>Name: {props.student.first_name} {props.student.last_name}</p>
      <p>{props.student.capstones[0].title}</p>
      <p>{props.student.capstones[0].description}</p>
      <p>{props.student.capstones[0].image}</p>
    </div>
  );
}