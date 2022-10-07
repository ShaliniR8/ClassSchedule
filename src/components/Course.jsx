import './css/Course.css'
import { Link } from 'react-router-dom'; 

const Course = ({id, course, selected, useStateToggler, conflict}) => (
     <>
     <div className="card m-1 p-2" onClick={() => {useStateToggler(id, course.meets, selected, conflict) }}>
     <Link to={`/course_form/${id}`} className="bi bi-pen-fill text-danger"> <i ></i> </Link>
          <div className={`card-body ${conflict.includes(id)? "bi bi-x-circle-fill" : (selected.includes(id)? 'selected' : '')}`}>
          <h3 className="card-title"> {course.term} CS {course.number} </h3>
          <p className="card-text"> {course.title} </p>
          <div className="card-footer">
          <p className="card-text"> {course.meets} </p>
          </div>
          </div>
     </div>
     </>
);

export default Course;