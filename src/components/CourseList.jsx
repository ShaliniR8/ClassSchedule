import './css/Course.css'
import Course from './Course';

const CourseList = ({courses, selected, useStateToggler, conflict}) => (
  <div className="course-list ">
    {
      courses.map(([id, course]) => <Course key={id} id={id} course={course} selected={selected} useStateToggler={useStateToggler} conflict={conflict}/>)
    }
  </div>
);

export default CourseList;