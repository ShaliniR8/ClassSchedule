import './Course.css'

const CourseList = ({course}) => (
     <div className="card m-1 p-2">
          <div className="card-body">
          <h3 className="card-title"> {course.term} CS {course.number} </h3>
          <p className="card-text"> {course.title} </p>
          <div className="card-footer">
          <p className="card-text"> {course.meets} </p>
          </div>
          </div>
     </div>
);

export default CourseList;