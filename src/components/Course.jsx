import './Course.css'
import { checkConflict, timeAndDay } from '../utilities/timeOperations'; 

const Course = ({id, course, selected, toggleSelected, conflict , toggleConflict}) => (
     <div className="card m-1 p-2" onClick={() => {toggleSelected(id); toggleConflict(id, course.meets) }}>
          <div className={`card-body ${conflict.includes(id)? "bi bi-x-circle-fill" : (selected.includes(id)? 'selected' : '')}`}>
          {/* <div className={`card-body ${selected.includes(id)? 'selected' : ''}`}> */}
          <h3 className="card-title"> {course.term} CS {course.number} </h3>
          <p> Conflict: {conflict} </p>
          <p className="card-text"> {course.title} </p>
          <div className="card-footer">
          <p className="card-text"> {course.meets} </p>
          </div>
          </div>
     </div>
);

export default Course;