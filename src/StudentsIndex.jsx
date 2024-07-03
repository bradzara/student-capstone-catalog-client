export function StudentsIndex(props) {
  return (
    <div>
      <h1>Student Capstone Catalog</h1>
      {props.students.map((student) => (
        <div key={student.id}>
          <h2>{student.name}</h2>
          <p>Name: {student.first_name} {student.last_name}</p>
          {/* <p>Email: {student.email}</p>
          <p>Phone_number: {student.phone_number}</p>
          <p>Bio: {student.bio}</p> */}
          <p>Linked In: {student.linked_in_url}</p>
          <p>X: {student.twitter_handle}</p>
          {/* <p>Blog_url: {student.blog_url}</p>
          <p>Resume_url: {student.resume_url}</p> */}
          <p>Github: {student.git_hub_url}</p>
          <img src={student.image} />
          <br/>
          <button onClick={()=>props.onShowStudent(student)}>More Info</button>
          <hr/>
        </div>
      ))}
    </div>
  );
}
