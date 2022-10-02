import './Course.css'

const Course = ({id, course, selected, toggleSelected}) => (
     <div className="card m-1 p-2" onClick={() => toggleSelected(id)}>
          <div className={`card-body ${selected.includes(id) ? 'selected' : ''}`}>
          <h3 className="card-title"> {course.term} CS {course.number} </h3>
          <p className="card-text"> {course.title} </p>
          {/* <p> {selected.includes(id)? selected:''} </p> */}

          
          <div className="card-footer">
          <p className="card-text"> {course.meets} </p>
          </div>
          </div>
     </div>
);

export default Course;