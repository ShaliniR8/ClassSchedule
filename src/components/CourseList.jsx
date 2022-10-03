import './Course.css'
import Course from './Course';

const CourseList = ({courses, selected, toggleSelected, conflict, toggleConflict}) => (
  <div className="course-list ">
    {
      courses.map(([id, course]) => <Course key={id} id={id} course={course} selected={selected} toggleSelected={toggleSelected} conflict={conflict} toggleConflict={toggleConflict}/>)
    }
  </div>
);

export default CourseList;