export function StudentsIndex(props) {
  return (
    <div>
      <h1>All students</h1>
      {props.students.map((student) => (
        <div key={student.id}>
          <p>first_name: John Smith</p>
          {/* <h2>{student.name}</h2>
          <p>First_name: {student.first_name}</p>
          <p>Last_name: {student.last_name}</p>
          <p>Email: {student.email}</p>
          <p>Phone_number: {student.phone_number}</p>
          <p>Bio: {student.bio}</p>
          <p>Linked_in_url: {student.linked_in_url}</p>
          <p>Twitter_handle: {student.twitter_handle}</p>
          <p>Blog_url: {student.blog_url}</p>
          <p>Resume_url: {student.resume_url}</p>
          <p>Git_hub_url: {student.git_hub_url}</p>
          <img src={student.url} /> */}
          <button onClick={()=>props.onShowStudent(student)}>Create student</button>
        </div>
      ))}
    </div>
  );
}
