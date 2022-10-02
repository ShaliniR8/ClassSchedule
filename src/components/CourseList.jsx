import './Course.css'
import Course from './Course';

const CourseList = ({courses, selected, toggleSelected}) => (
  <div className="course-list">
    {
      courses.map(([id, course]) => <Course key={id} id={id} course={course} selected={selected} toggleSelected={toggleSelected}/>)
    }
  </div>
);

export default CourseList;